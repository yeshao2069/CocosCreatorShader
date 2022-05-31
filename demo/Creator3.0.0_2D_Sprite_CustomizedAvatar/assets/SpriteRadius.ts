import { _decorator, Component, EffectAsset, Enum, Vec2, Sprite, Material, UITransform, warn } from 'cc';
import { DEV } from 'cc/env';
const { ccclass, property, requireComponent, executeInEditMode, disallowMultiple, executionOrder } = _decorator;

export enum InputMode {
    /** 单独输入 */
    CocosEditor = 1,
    /** 字符串联合输入 */
    Web
}

@ccclass('SpriteRadius')
@requireComponent(Sprite)
@executeInEditMode
export default class SpriteRadius extends Component {

    _effect !: EffectAsset;
    @property({ type: EffectAsset, tooltip: 'Effect 资源' })
    public get effect() { return this._effect; }
    public set effect(value: EffectAsset) { this._effect = value; this.init(); }

    @property({ type: Enum(InputMode), tooltip: '输入方式' })
    _inputMode: InputMode = InputMode.CocosEditor;
    public get inputMode() { return this._inputMode; }
    public set inputMode(value: InputMode) { this._inputMode = value; this.updateProperties(); }

    @property private _leftTop: Vec2 = new Vec2();
    // @ts-ignore
    @property({ tooltip: '左上角圆角半径', visible() { return this._inputMode === InputMode.CocosEditor;} })
    public get leftTop() { return this._leftTop; }
    public set leftTop(value: Vec2) { this._leftTop = value; this.updateProperties(); }

    @property private _rightTop: Vec2 = new Vec2();
    // @ts-ignore
    @property({ tooltip: '右上角圆角半径', visible() { return this._inputMode === InputMode.CocosEditor; } })
    public get rightTop() { return this._rightTop; }
    public set rightTop(value: Vec2) { this._rightTop = value; this.updateProperties(); }

    @property private _rightBottom: Vec2 = new Vec2();
    // @ts-ignore
    @property({ tooltip: '右下角圆角半径', visible() { return this.inputMode === InputMode.CocosEditor; } })
    public get rightBottom() { return this._rightBottom; }
    public set rightBottom(value: Vec2) { this._rightBottom = value; this.updateProperties(); }

    @property private _leftBottom: Vec2 = new Vec2();
    // @ts-ignore
    @property({ tooltip: '左下角圆角半径', visible() { return this.inputMode === InputMode.CocosEditor; } })
    public get leftBottom() { return this._leftBottom; }
    public set leftBottom(value: Vec2) { this._leftBottom = value; this.updateProperties(); }

    @property private _configString: string = "0px";
    // @ts-ignore
    @property({ tooltip: '配置字符串', visible() { return this.inputMode === InputMode.Web; } })
    public get configString() { return this._configString; }
    public set configString(value: string) { this._configString = value; this.updateProperties(); }

    private sprite !: Sprite;
    private material !: Material;


    protected onLoad() {
        this.init();
    }

    /**
     * 初始化组件
     */
    private init() {
        this.sprite = this.node.getComponent(Sprite)!;
        if (this.sprite!.spriteFrame) this.sprite!.spriteFrame.packable = false;
        // 生成并应用材质
        if(!this._effect) {
        warn("[SpriteRadius]: 请添加Effect资源");
        return;
        }

        this.material = new Material();
        this.material.reset({ effectAsset: this._effect });
        this.sprite.setMaterial(this.material, 0);
        // 更新材质属性
        this.updateProperties();
    }

    /**
     * 更新材质属性
     */
    private updateProperties() {
        switch (this._inputMode) {
            case InputMode.CocosEditor:
                this.cocosEditor(this._leftTop, this._rightTop, this._rightBottom, this._leftBottom);
                break;
            case InputMode.Web:
                this.web(this._configString);
                break;
        }
    }

    private cocosEditor(leftTop: Vec2, rightTop: Vec2, rightBottom: Vec2, leftBottom: Vec2) {
        this.material.setProperty('size', new Vec2(this.node.getComponent(UITransform)!.width, this.node.getComponent(UITransform)!.height));
        this.material.setProperty('leftTop', this.percentageToPixel(leftTop));
        this.material.setProperty('rightTop', this.percentageToPixel(rightTop));
        this.material.setProperty('rightBottom', this.percentageToPixel(rightBottom));
        this.material.setProperty('leftBottom', this.percentageToPixel(leftBottom));
    }

    private web(configString: string) {
        // 字符串为空直接退出
        if (configString.length === 0) return;

        // 替换多空格
        do {
            configString = configString.replace("  ", " ");
        } while (configString.indexOf("  ") !== -1);

        // 去除末尾分号
        if (configString.endsWith(";")) {
            configString = configString.slice(0, -1);
        }

        this.material.setProperty('size', new Vec2(this.node.getComponent(UITransform)!.width, this.node.getComponent(UITransform)!.height));

        // 处理字符串
        let configArray: any[] = configString.split(" ");
        // 处理数据
        for (let i = 0; i < configArray.length; i++) {
        if (configArray[i].indexOf("px") !== -1) {
        configArray[i] = parseFloat(configArray[i].slice(0, -2));
        } else if (configArray[i].indexOf("%") !== -1) {
        configArray[i] = parseFloat(configArray[i].slice(0, -1)) / 100;
        } else if (configArray[i] === "/") {
        continue;
        } else {
        return;
        }
        }

        let radiusPixelArray: Vec2[] = [];

        if (configArray.indexOf("/") !== -1) {
            // 数组中带有斜杠
            // 判断是否多斜线，多斜线为错误写法直接返回
            if (configArray.indexOf("/") !== configArray.lastIndexOf("/")) return;
            // 记录斜线下标
            let slashIndex = configArray.indexOf("/");

            if (configArray.length === 3) {
                // 此时为两个值和一个斜线，斜线必须在中间
                if (slashIndex !== 1) return;

                radiusPixelArray.push(new Vec2(configArray[0], configArray[2]));
                radiusPixelArray.push(...radiusPixelArray);
                radiusPixelArray.push(...radiusPixelArray);
            } else if (configArray.length === 4) {
                // 此时为三个值和一个斜线，斜线下标必须为 1 or 2
                if (slashIndex !== 1 && slashIndex !== 2) return;

                if (slashIndex === 1) {
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[2]));
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[3]));
                    radiusPixelArray.push(...radiusPixelArray);
                } else if (slashIndex === 2) {
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[3]));
                    radiusPixelArray.push(new Vec2(configArray[1], configArray[3]));
                    radiusPixelArray.push(...radiusPixelArray);
                }
            } else if (configArray.length === 5) {
                // 此时为四个值和一个斜线，斜线下标必须为 1 or 2 or 3
                if (slashIndex !== 1 && slashIndex !== 2 && slashIndex !== 3) return;

                if (slashIndex === 1) {
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[2]));
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[3]));
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[4]));
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[3]));
                } else if (slashIndex === 2) {
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[3]));
                    radiusPixelArray.push(new Vec2(configArray[1], configArray[4]));
                    radiusPixelArray.push(...radiusPixelArray);
                } else if (slashIndex === 3) {
                    radiusPixelArray.push(new Vec2(configArray[0], configArray[4]));
                    radiusPixelArray.push(new Vec2(configArray[1], configArray[4]));
                    radiusPixelArray.push(new Vec2(configArray[2], configArray[4]));
                    radiusPixelArray.push(new Vec2(configArray[1], configArray[4]));
                }
            }

        } else {
            // 数组中不带斜杠
            // 处理数据
            for (let i = 0; i < configArray.length; i++) {
                radiusPixelArray.push(new Vec2(configArray[i], configArray[i]));
            }

            if (configArray.length === 1) {
                // 仅有一个值，四个角均为此值
                radiusPixelArray.push(...radiusPixelArray);
                radiusPixelArray.push(...radiusPixelArray);
            } else if (configArray.length === 2) {
                // 有两个值，左上和右下为第一个值，右上和左下为第二个值
                radiusPixelArray.push(...radiusPixelArray);
            } else if (configArray.length === 3) {
                // 有三个值，左上为第一个值，右上和左下为第二个值，右下为第三个值
                radiusPixelArray.push(radiusPixelArray[1]);
            }
            // 四个值已凑齐无需填补
        }

        this.material.setProperty('leftTop', this.percentageToPixel(radiusPixelArray[0]));
        this.material.setProperty('rightTop', this.percentageToPixel(radiusPixelArray[1]));
        this.material.setProperty('rightBottom', this.percentageToPixel(radiusPixelArray[2]));
        this.material.setProperty('leftBottom', this.percentageToPixel(radiusPixelArray[3]));
    }

    private percentageToPixel(value: Vec2): Vec2 {
        let res = new Vec2();
        if (value.x < 1) res.x = value.x * this.node.getComponent(UITransform)!.width;
        else res.x = value.x;

        if (value.y < 1) res.y = value.y * this.node.getComponent(UITransform)!.height;
        else res.y = value.y;
        return res;
    }
}

/**
 * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
 */
// const { ccclass, property, requireComponent, executeInEditMode, disallowMultiple, executionOrder } = cc._decorator;
// 
// export enum InputMode {
//     /** 单独输入 */
//     CocosEditor = 1,
//     /** 字符串联合输入 */
//     Web
// }
// 
// @ccclass
// @requireComponent(cc.Sprite)
// @executeInEditMode
// @disallowMultiple
// @executionOrder(-100)
// export default class SpriteRadius extends cc.Component {
// 
//     @property private _effect: cc.EffectAsset = null;
//     @property({ type: cc.EffectAsset, tooltip: DEV && 'Effect 资源' })
//     public get effect() { return this._effect; }
//     public set effect(value: cc.EffectAsset) { this._effect = value; this.init(); }
// 
//     @property private _inputMode: InputMode = InputMode.CocosEditor;
//     @property({ type: cc.Enum(InputMode), tooltip: CC_DEV && '输入方式' })
//     public get inputMode() { return this._inputMode; }
//     public set inputMode(value: InputMode) { this._inputMode = value; this.updateProperties(); }
// 
//     @property private _leftTop: cc.Vec2 = cc.v2();
//     @property({ tooltip: CC_DEV && '左上角圆角半径', visible() { return this.inputMode === InputMode.CocosEditor; } })
//     public get leftTop() { return this._leftTop; }
//     public set leftTop(value: cc.Vec2) { this._leftTop = value; this.updateProperties(); }
// 
//     @property private _rightTop: cc.Vec2 = cc.v2();
//     @property({ tooltip: CC_DEV && '右上角圆角半径', visible() { return this.inputMode === InputMode.CocosEditor; } })
//     public get rightTop() { return this._rightTop; }
//     public set rightTop(value: cc.Vec2) { this._rightTop = value; this.updateProperties(); }
// 
//     @property private _rightBottom: cc.Vec2 = cc.v2();
//     @property({ tooltip: CC_DEV && '右下角圆角半径', visible() { return this.inputMode === InputMode.CocosEditor; } })
//     public get rightBottom() { return this._rightBottom; }
//     public set rightBottom(value: cc.Vec2) { this._rightBottom = value; this.updateProperties(); }
// 
//     @property private _leftBottom: cc.Vec2 = cc.v2();
//     @property({ tooltip: CC_DEV && '左下角圆角半径', visible() { return this.inputMode === InputMode.CocosEditor; } })
//     public get leftBottom() { return this._leftBottom; }
//     public set leftBottom(value: cc.Vec2) { this._leftBottom = value; this.updateProperties(); }
// 
//     @property private _configString: string = "0px";
//     @property({ tooltip: CC_DEV && '配置字符串', visible() { return this.inputMode === InputMode.Web; } })
//     public get configString() { return this._configString; }
//     public set configString(value: string) { this._configString = value; this.updateProperties(); }
// 
//     private sprite: cc.Sprite = null;
// 
//     private material: cc.Material = null;
// 
//     protected onLoad() {
//         this.init();
//     }
// 
//     protected resetInEditor() {
//         this.init();
//     }
// 
//     /**
//      * 初始化组件
//      */
//     private init() {
//         this.sprite = this.node.getComponent(cc.Sprite);
//         if (this.sprite.spriteFrame) this.sprite.spriteFrame.getTexture().packable = false;
//         // 生成并应用材质
//         if(!this._effect) {
//             cc.warn("[SpriteRadius]: 请添加Effect资源");
//             return;
//         }
// 
//         this.material = cc.Material.create(this._effect);
//         this.sprite.setMaterial(0, this.material);
//         // 更新材质属性
//         this.updateProperties();
//     }
// 
//     /**
//      * 更新材质属性
//      */
//     private updateProperties() {
//         switch (this._inputMode) {
//             case InputMode.CocosEditor:
//                 this.cocosEditor(this._leftTop, this._rightTop, this._rightBottom, this._leftBottom);
//                 break;
//             case InputMode.Web:
//                 this.web(this._configString);
//                 break;
//         }
// 
//     }
// 
//     private cocosEditor(leftTop: cc.Vec2, rightTop: cc.Vec2, rightBottom: cc.Vec2, leftBottom: cc.Vec2) {
//         this.material.setProperty('size', cc.v2(this.node.width, this.node.height));
//         this.material.setProperty('leftTop', this.percentageToPixel(leftTop));
//         this.material.setProperty('rightTop', this.percentageToPixel(rightTop));
//         this.material.setProperty('rightBottom', this.percentageToPixel(rightBottom));
//         this.material.setProperty('leftBottom', this.percentageToPixel(leftBottom));
//     }
// 
//     private web(configString: string) {
//         // 字符串为空直接退出
//         if (configString.length === 0) return;
// 
//         // 替换多空格
//         do {
//             configString = configString.replace("  ", " ");
//         } while (configString.indexOf("  ") !== -1);
// 
//         // 去除末尾分号
//         if (configString.endsWith(";")) {
//             configString = configString.slice(0, -1);
//         }
// 
//         this.material.setProperty('size', cc.v2(this.node.width, this.node.height));
// 
//         // 处理字符串
//         let configArray: any[] = configString.split(" ");
//         // 处理数据
//         for (let i = 0; i < configArray.length; i++) {
//             if (configArray[i].indexOf("px") !== -1) {
//                 configArray[i] = parseFloat(configArray[i].slice(0, -2));
//             } else if (configArray[i].indexOf("%") !== -1) {
//                 configArray[i] = parseFloat(configArray[i].slice(0, -1)) / 100;
//             } else if (configArray[i] === "/") {
//                 continue;
//             } else {
//                 return;
//             }
//         }
// 
//         let radiusPixelArray: cc.Vec2[] = [];
// 
//         if (configArray.indexOf("/") !== -1) {
//             // 数组中带有斜杠
//             // 判断是否多斜线，多斜线为错误写法直接返回
//             if (configArray.indexOf("/") !== configArray.lastIndexOf("/")) return;
//             // 记录斜线下标
//             let slashIndex = configArray.indexOf("/");
// 
//             if (configArray.length === 3) {
//                 // 此时为两个值和一个斜线，斜线必须在中间
//                 if (slashIndex !== 1) return;
// 
//                 radiusPixelArray.push(cc.v2(configArray[0], configArray[2]));
//                 radiusPixelArray.push(...radiusPixelArray);
//                 radiusPixelArray.push(...radiusPixelArray);
//             } else if (configArray.length === 4) {
//                 // 此时为三个值和一个斜线，斜线下标必须为 1 or 2
//                 if (slashIndex !== 1 && slashIndex !== 2) return;
// 
//                 if (slashIndex === 1) {
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[2]));
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[3]));
//                     radiusPixelArray.push(...radiusPixelArray);
//                 } else if (slashIndex === 2) {
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[3]));
//                     radiusPixelArray.push(cc.v2(configArray[1], configArray[3]));
//                     radiusPixelArray.push(...radiusPixelArray);
//                 }
//             } else if (configArray.length === 5) {
//                 // 此时为四个值和一个斜线，斜线下标必须为 1 or 2 or 3
//                 if (slashIndex !== 1 && slashIndex !== 2 && slashIndex !== 3) return;
// 
//                 if (slashIndex === 1) {
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[2]));
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[3]));
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[4]));
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[3]));
//                 } else if (slashIndex === 2) {
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[3]));
//                     radiusPixelArray.push(cc.v2(configArray[1], configArray[4]));
//                     radiusPixelArray.push(...radiusPixelArray);
//                 } else if (slashIndex === 3) {
//                     radiusPixelArray.push(cc.v2(configArray[0], configArray[4]));
//                     radiusPixelArray.push(cc.v2(configArray[1], configArray[4]));
//                     radiusPixelArray.push(cc.v2(configArray[2], configArray[4]));
//                     radiusPixelArray.push(cc.v2(configArray[1], configArray[4]));
//                 }
//             }
// 
//         } else {
//             // 数组中不带斜杠
//             // 处理数据
//             for (let i = 0; i < configArray.length; i++) {
//                 radiusPixelArray.push(cc.v2(configArray[i], configArray[i]));
//             }
// 
//             if (configArray.length === 1) {
//                 // 仅有一个值，四个角均为此值
//                 radiusPixelArray.push(...radiusPixelArray);
//                 radiusPixelArray.push(...radiusPixelArray);
//             } else if (configArray.length === 2) {
//                 // 有两个值，左上和右下为第一个值，右上和左下为第二个值
//                 radiusPixelArray.push(...radiusPixelArray);
//             } else if (configArray.length === 3) {
//                 // 有三个值，左上为第一个值，右上和左下为第二个值，右下为第三个值
//                 radiusPixelArray.push(radiusPixelArray[1]);
//             }
//             // 四个值已凑齐无需填补
//         }
// 
//         this.material.setProperty('leftTop', this.percentageToPixel(radiusPixelArray[0]));
//         this.material.setProperty('rightTop', this.percentageToPixel(radiusPixelArray[1]));
//         this.material.setProperty('rightBottom', this.percentageToPixel(radiusPixelArray[2]));
//         this.material.setProperty('leftBottom', this.percentageToPixel(radiusPixelArray[3]));
//     }
// 
//     private percentageToPixel(value: cc.Vec2): cc.Vec2 {
//         let res = cc.v2();
//         if (value.x < 1) res.x = value.x * this.node.width;
//         else res.x = value.x;
// 
//         if (value.y < 1) res.y = value.y * this.node.height;
//         else res.y = value.y;
//         return res;
//     }
// }
