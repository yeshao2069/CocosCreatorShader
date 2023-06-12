import { _decorator, Component, Node, find, Sprite, Material } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('moon')
export class moon extends Component {

    _time : number = 0;
    bgMat : Material;

    start() {
        this.bgMat = find("Canvas/bg").getComponent(Sprite).getMaterial(0);
    }

    update(dt: number) {
        this._time += dt;
        this.bgMat.setProperty('tt',this._time); 
    }
}

