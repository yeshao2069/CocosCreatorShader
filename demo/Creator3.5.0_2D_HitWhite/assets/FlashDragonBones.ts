import { _decorator, Component, Material, dragonBones } from 'cc';
import { JSB } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('FlashDragonBones')
export default class FlashDragonBones extends Component {
    duration: number = 0.5;
    _median: number = 0;
    _time: number = 0;

    _material: Material = null!;
    _db: dragonBones.ArmatureDisplay = null!;

    onLoad() {
        this._median = this.duration / 2;
        // 获取材质
        this._db = this.node.getComponent(dragonBones.ArmatureDisplay)!;
        this._material = this._db.customMaterial!;
        // 设置材质对应的属性
        this._material.setProperty("u_rate", 1);
    }

    update(dt: number) {
        if (this._time > 0) {
            this._time -= dt;

            this._time = this._time < 0 ? 0 : this._time;
            let rate = Math.abs(this._time - this._median) * 2 / this.duration;

            if (JSB) { 
                this._db.getMaterial(0)!.setProperty("u_rate", rate);
                // @ts-ignore 
                this._renderComponent._updateMaterial(); 
            } else {
                // @ts-ignore 
                let cache: any = this._db._materialCache; 
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
