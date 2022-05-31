
import { _decorator, Component, CCInteger, Material, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonAmbilight')
export class ButtonAmbilight extends Component {

    @property
    _max : number = 1;
    @property(CCInteger)
    get max(): number {
        return this._max;
    }
    set max(value: number) {
        this._max = value;
    }

    private _start = 0;
    _material !: Material;
    
    update (dt: number) {
        this._material = this.node.getComponent(Sprite)!.getMaterial(0)!;

        if (this.node.active && this._material) {
            this._setShaderTime(dt);
        }
    }

    private _setShaderTime (dt: number) {
        let start = this._start;
        if (start > this.max) start = 0;
        start += 0.015;
        this._material.setProperty('timeTest', start);

        this._start = start;
    }
}

