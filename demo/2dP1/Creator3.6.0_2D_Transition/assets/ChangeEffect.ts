import { _decorator, Component, Node, Enum, Vec2, math, Material, Sprite } from 'cc';
const { ccclass, property } = _decorator;

// enum EffectType {
//     CENTER_SPLIT = '中心分离',
//     CENTER_TO_EDGE = '中心拆分',
//     CLOSE_TO_CENTER = '中心合并',
//     RANDOM_BLOCK = '随机块状',
//     RANDOM_ERASE = '左右随机块状',
//     SLICE_CIRCLE = '圆形过渡',
//     SLICE_CUT = '切分',
//     BIDIRECTIONAL_CLOCK = '双时钟擦除',
//     BLINDS = '不均匀百叶窗',
//     BLINDS1 = '百叶窗',
//     BLINDS2 = '三角形百叶窗',
//     CLOCK = '时钟擦除',
//     RECT = '方形擦除',
//     RHOMBUS = '菱形划变擦除',
//     RHOMBUS_BLINDS = '菱形擦除'
// }

enum EffectType {
    CENTER_SPLIT,
    CENTER_TO_EDGE,
    CLOSE_TO_CENTER,
    RANDOM_BLOCK,
    RANDOM_ERASE,
    SLICE_CIRCLE,
    SLICE_CUT,
    BIDIRECTIONAL_CLOCK,
    BLINDS,
    BLINDS1,
    BLINDS2,
    CLOCK,
    RECT,
    RHOMBUS,
    RHOMBUS_BLINDS
}

Enum(EffectType);

@ccclass('ChangeEffect')
export class ChangeEffect extends Component {
    @property({ type: EffectType, tooltip: 'Effect 类型' })
    get effectType(){
        return this._effectType;
    }

    set effectType(value){
        this._effectType = value;
    }

    @property({ type: Material, tooltip: '使用材质' })
    get useMat(){
        return this._useMat;
    }

    set useMat(value){
        this._useMat = value;
        const spriteComp = this.getComponent(Sprite);
        spriteComp.customMaterial = this._useMat;
    }

    @property({ tooltip: 'BlendValue 属性的范围' })
    blendValueLimitRange = new Vec2(0, 1);

    @property({ tooltip: '效果作用程度' })
    get blendValue(){
        return this._blendValue;
    }

    set blendValue(value){
        this._blendValue = math.lerp(this.blendValueLimitRange.x, this.blendValueLimitRange.y, value);
        if(this.useMat){
            this.useMat.setProperty('blendValue', this.blendValue);
        }
    }

    @property({ visible: function(){ return (this._effectType === EffectType.RANDOM_BLOCK ||
       this._effectType === EffectType.RANDOM_ERASE || this._effectType === EffectType.BIDIRECTIONAL_CLOCK ||
       this._effectRange === EffectType.CLOCK || this._effectRange === EffectType.RHOMBUS )
    }, tooltip: '块状大小' })
    get width(){
        return this._width;
    }

    set width(value){
        this._width = value;
        if(this.useMat){
            this.useMat.setProperty('width', this._width);
        }
    }

    @property({ visible: function(){ return (this._effectType === EffectType.BLINDS ||
        this._effectType === EffectType.BLINDS1 || this._effectType === EffectType.BLINDS2 ||
        this._effectRange === EffectType.RECT || this._effectRange === EffectType.RHOMBUS_BLINDS )
     }, tooltip: '方块的分布密度' })
    get amount(){
        return this._amount;
    }

    set amount(value){
        this._amount = value;
        if(this.useMat){
            this.useMat.setProperty('amount', this._amount);
        }
    }

    @property({ visible: function(){ return this._effectType === EffectType.SLICE_CIRCLE}, tooltip: '圆形柔边的作用范围' })
    get effectRange(){
        return this._effectRange;
    }

    set effectRange(value){
        this._effectRange = value;
        if(this.useMat){
            this.useMat.setProperty('effectRange', this._effectRange);
        }
    }

    @property({ visible: function(){ return this._effectType === EffectType.SLICE_CIRCLE}, tooltip: '是否翻转圆形特效作用区域' })
    get invert(){
        return this._invert;
    }

    set invert(value){
        this._invert = value;
        if(this.useMat){
            const invert = this._invert? 1: 0;
            this.useMat.setProperty('invert', invert);
        }
    }

    @property({ visible: function(){ return this._effectType === EffectType.SLICE_CUT}, tooltip: '切分区域高度' })
    get hight(){
        return this._hight;
    }

    set hight(value){
        this._hight = value;
        if(this.useMat){
            this.useMat.setProperty('hight', this._hight);
        }
    }

    @property({  visible: function(){ return this._effectType === EffectType.SLICE_CUT}, tooltip: '切分旋转角度' })
    get sliceAngle(){
        return this._sliceAngle;
    }

    set sliceAngle(value){
        this._sliceAngle = value;
        if(this.useMat){
            this.useMat.setProperty('sliceAngle', this._sliceAngle);
        }
    }

    @property
    private _effectType = EffectType.CENTER_SPLIT;
    @property
    private _useMat: Material = null;
    @property
    private _blendValue = 0;
    @property
    private _width = 6;
    @property
    private _amount = 6;
    @property
    private _hight = 6;
    @property
    private _effectRange = 0;
    @property
    private _invert = false;
    @property
    private _sliceAngle = 0;

}

