import { _decorator, Component, Node, EventTouch, Material, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('cardPerspective')
export class cardPerspective extends Component {

    @property(Material)
    _mat : Material;

    _startPos = new Vec2();
    _currentPos = new Vec2();

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    }

    touchStart (evt: EventTouch) {
        this._startPos = evt.getUILocation();
    }

    touchMove (evt: EventTouch) {
        this._currentPos = evt.getUILocation();

        let dy = this._currentPos.subtract(this._startPos).y;
        let pos = this.node.getPosition();
        pos.y += dy * 0.05;
        this.node.setPosition(pos);
        this._currentPos = this._startPos;
    }
}

