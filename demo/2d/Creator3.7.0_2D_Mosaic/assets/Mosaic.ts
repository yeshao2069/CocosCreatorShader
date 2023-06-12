
import { _decorator, Component, Material, Sprite, Slider, Toggle } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Mosaic')
export class Mosaic extends Component {

    material: Material = null!;

    progressX : number = 50;
    progressY : number = 50;

    onLoad() {
        this.material = this.node.getChildByName('npc')!.getComponent(Sprite)!.getMaterial(0)!;
    }

    setPixelCount(slide: Slider, type: 'x' | 'y') {
        this.material.setProperty(`${type}_count`, Math.floor(slide.progress * 100));

        if (type == 'x') {
            this.progressX = Math.floor(slide.progress * 100);
        } else if(type == 'y') {
            this.progressY = Math.floor(slide.progress * 100);
        }
    }

    togglePixel(toggle: Toggle) {
        // this.material.define('USE_MASAIC', toggle.isChecked, 0, true);

        if (toggle.isChecked) {
            this.material.setProperty(`x_count`, this.progressX);
            this.material.setProperty(`y_count`, this.progressY);
        } else {
            this.material.setProperty(`x_count`, 100);
            this.material.setProperty(`y_count`, 100);
        }
    }
}

