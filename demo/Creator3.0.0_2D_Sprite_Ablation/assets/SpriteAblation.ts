
import { _decorator, Component, Slider, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpriteAblation')
export class SpriteAblation extends Component {

    @property([Sprite])
    sp_dissolve: Sprite[] = []

    private sliderCallback(slider: Slider, customEventData: string) {
        const value = slider.progress * 1.0;
        this.sp_dissolve.forEach((sp) => {
            sp.getMaterial(0)!.setProperty('noiseThreshold', value);
        })
    }
}

