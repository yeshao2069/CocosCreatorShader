import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    @property(Sprite)
    spr : Sprite = null!;

    private turn = 1;
    // 进度
    private progress = 0;

    start() {

    }

    update(dt: number) {
        this.progress += dt * this.turn * 0.2;
        this.spr.getMaterial(0).setProperty('progress', this.progress);
        if(this.progress >= 1) {
            this.turn = -1;
        }
        if(this.progress <= 0) {
            this.turn = 1;
        }
    }
}

