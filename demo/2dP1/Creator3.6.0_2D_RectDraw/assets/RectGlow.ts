import { Component, Material, Node, Sprite, _decorator } from "cc";
const { ccclass, property } = _decorator;

@ccclass('RectGlow')
export default class RectGlow extends Component {
    _sprite: Sprite = null;
    _time: number = 0;
    _material: Material;

    onLoad () {
        this._sprite = this.node.getComponent(Sprite);
        this._material = this._sprite.getMaterial(0);
    }

    setSize(w: number, h: number) {
        if (this._sprite == null)
            this._sprite = this.node.getComponent(Sprite);

        if (this._material) {
            this._material.setProperty('u_rect', [w, h]);
        }
    }

    update (dt: number) {
        this._time += 0.005;

        if (this._time >= 1) {
            this._time -= 1;
        }

        if (this._material) {
            this._material.setProperty('u_progress', this._time);
        }
    }
}
