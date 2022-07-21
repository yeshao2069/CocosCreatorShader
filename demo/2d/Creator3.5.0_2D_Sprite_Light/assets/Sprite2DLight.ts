
import { _decorator, Component, Material, Vec4, Slider } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Sprite2DLight')
export class Sprite2DLight extends Component {

    @property(Material)
    mtl_sprite_2d_light !: Material;

    private _lightPos = new Vec4(0, 0, 1, 1)

    private sliderCallback(slider: Slider, customEventData: string) {
        const [key, min, max] = customEventData.split(',');
        const maxValue = Number(max)
        const minValue = Number(min)
        const value = slider.progress * (maxValue - minValue) + minValue;
        // @ts-ignore
        this._lightPos[key] = value;
        console.log(this._lightPos);
        this.mtl_sprite_2d_light.setProperty('lightPos', this._lightPos);
    }
}

