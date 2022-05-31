
import { _decorator, Component, Node, Sprite, Material, Slider, Label, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteHighLight')
export class SpriteHighLight extends Component {
    
    @property(Sprite)
    tempSprite !: Sprite;
    @property(sp.Skeleton)
    tempSpine !: sp.Skeleton;

    @property(Label)
    showLab1 !: Label;
    @property(Label)
    showLab2 !: Label;

    _material !: Material;
    _spineMaterials : Material[] = [];

    start () {
        this._material = this.tempSprite.getMaterial(0)!;
    }

    onSlider1 (evt: Slider) {
        let progress = evt.progress;

        this.showLab1.string = progress.toFixed(2);
        this._material.setProperty('brightness', progress);
    }

    onSlider2 (evt: Slider) {
        let progress = evt.progress;

        this.showLab2.string = progress.toFixed(2);
        // spine的动态设置材质问题处理
        let matCaches = this.tempSpine['_materialCache'];
        for (var x in matCaches) {
            matCaches[x].setProperty('brightness', progress);
        }
    }
}
