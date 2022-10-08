import { _decorator, Component, Node, Material, find, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    private _gradient_value: number = 0;
    private _material : Material = null!;

    start() {
        this._material = find('Canvas/sp').getComponent(Sprite).getMaterial(0)!;
    }

    update(deltaTime: number) {
        if (this._gradient_value >= 1) return;
        this._gradient_value = this._gradient_value + 0.003;
        if (this._material) {
            this._material.setProperty('gradient_value', this._gradient_value);
        }
    }

    onClick () {
        this._gradient_value = 0;
    }
}

