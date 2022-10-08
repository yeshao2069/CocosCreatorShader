import { _decorator, Component, Node, Material, Sprite, Label, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Change')
export class Change extends Component {

    @property([Material])
    materials : Material[] = [];

    private _material : Material;
    private _time : number = 0;
    private _effectIndex : number = 0;
    private _label : Label;
    private labelStrings = [
        "center-split 中心分离",
        "center-to-edge 中心拆分",
        "close-to-center 中心合并",
        "random-block 随机块状",
        "random-erase 左右随机块状",
        "slice-circle 圆形过渡",
        "slice-cut 切分",
        "bidirectional-bolck 双时钟擦除",
        "blinds 不均匀百叶窗",
        "blinds1 百叶窗",
        "blinds2 百叶窗三角形擦除",
        "clock 时钟擦除",
        "rect 方块擦除",
        "rhombus 菱形划变擦除",
        "rhombus-blinds 菱形擦除"
    ];

    private beginTime : number = 0;
    private endTime : number = 0;
    private speedTime : number = 0.01;

    start() {
        this._material = find('Canvas/up').getComponent(Sprite).customMaterial;
        this._label= find('Canvas/label').getComponent(Label);
        this._label.string = this.labelStrings[0];
        this.updateEffect();
    }

    onChangeClick () {
        this._effectIndex ++;
        if (this._effectIndex > this.materials.length - 1) {
            this._effectIndex = 0;
        }
        this.updateEffect();
    }

    updateEffect () {
        this._material = find('Canvas/up').getComponent(Sprite).customMaterial = this.materials[this._effectIndex];
        this._label.string = this.labelStrings[this._effectIndex];

        switch (this._effectIndex) {
            case 0:
            case 1:
            case 2:
                this.beginTime = 0;
                this.endTime = 0.5;
                this.speedTime = 0.005;
                break;
            case 3:
            case 4:
                this.beginTime = 0;
                this.endTime = 1.2;
                this.speedTime = 0.012;
                break;
            case 5:
                this.beginTime = 0;
                this.endTime = 0.8;
                this.speedTime = 0.008;
                break;
            case 6:
            case 9:
            case 12:
                this.beginTime = 0;
                this.endTime = 1;
                this.speedTime = 0.01;
                break;
            case 7:
                this.beginTime = 0;
                this.endTime = 3.2;
                this.speedTime = 0.032;
                break;
            case 8:
            case 10:
                this.beginTime = -1;
                this.endTime = 1;
                this.speedTime = 0.02;
                break;
            case 11:
            case 13:
                this.beginTime = 0;
                this.endTime = 6.5;
                this.speedTime = 0.065;
                break;
            case 14:
                this.beginTime = -0.5;
                this.endTime = 0.5;
                this.speedTime = 0.01;
                break;
        }
    }

    update () {
        this._time += this.speedTime;

        if (this._time >= this.endTime) {
            this._time = this.beginTime;
        }

        this._material.setProperty('blendValue', this._time);
    }
}

