import { _decorator, Component, Material, Sprite, sp, AnimationState } from 'cc';
import { JSB } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('FlashSpine')
export default class FlashSpine extends Component {
    duration: number = 0.5;
    _median: number = 0;
    _time: number = 0;

    _material: Material = null!;
    _skeleton: sp.Skeleton = null!;

    onLoad() {
        this._median = this.duration / 2;
        // 获取材质
        this._skeleton = this.node.getComponent(sp.Skeleton)!;
        this._material = this._skeleton.customMaterial!;
        // 设置材质对应的属性
        this._material.setProperty("u_rate", 1);
    }

    update(dt: number) {
        if (this._time > 0) {
            this._time -= dt;

            this._time = this._time < 0 ? 0 : this._time;
            let rate = Math.abs(this._time - this._median) * 2 / this.duration;

            if (JSB) { 
                this._skeleton.getMaterial(0)!.setProperty("u_rate", rate);
                // @ts-ignore 
                this._renderComponent._updateMaterial(); 
            } else {
                // @ts-ignore 
                let cache: any = this._skeleton._materialCache; 
                for (let i in cache) { 
                    let material= cache[i];
                    material.setProperty("u_rate", rate);
                }
            }
        }
    }
    clickFlash() {
        this._time = this.duration;
    }
}
