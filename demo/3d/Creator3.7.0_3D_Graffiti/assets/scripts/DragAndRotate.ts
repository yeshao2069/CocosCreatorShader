
import { _decorator, Component, Node, systemEvent, SystemEvent, EventTouch, Touch, Quat, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('DragAndRotate')
export class DragAndRotate extends Component {

    private quat: Quat = new Quat();
    private delta: Vec2 = Vec2.ZERO;

    start () {
    }

    onEnable () {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onDisable () {
        systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart (touch: Touch, event: EventTouch) {
        this.delta = Vec2.ZERO;
    }

    onTouchMove (touch: Touch, event: EventTouch) {
        this.delta = touch.getUIDelta();
    }

    onTouchEnd (touch: Touch, event: EventTouch) {
        this.delta = Vec2.ZERO;
    }

    update() {
        Quat.fromEuler(this.quat, -this.delta.y, this.delta.x, 0);
        this.node.rotate(this.quat, 1);
    }

}

