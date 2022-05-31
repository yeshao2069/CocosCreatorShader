
import { _decorator, Component, Node, Sprite, Material } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteDynamicLightAndShadow')
export class SpriteDynamicLightAndShadow extends Component {

    @property(Sprite)
    testSpr !: Sprite;

    _material !: Material;
    _time = 0;

    start () {
        this._material = this.testSpr.getMaterial(0)!;
    }

    update (dt: number) {
        this._time += 0.01;

        if (this._material) {
            this._material.setProperty('u_time', this._time);
        }
    }
}
