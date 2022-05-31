
import { _decorator, Component, Node, Material, Vec2, Sprite, UITransform, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FollowSpot')
export class FollowSpot extends Component {

    @property(Node)
    bg !: Node;

    material !: Material;
    center : Vec2 = new Vec2(0.1, 0.5);

    onLoad() {
        this.material = this.bg.getComponent(Sprite)!.getMaterial(0)!;
        let _width = this.bg.getComponent(UITransform)!.contentSize.width;
        let _height = this.bg.getComponent(UITransform)!.contentSize.height;
        this.material.setProperty('wh_ratio', _width / _height);
        this.material.setProperty('center', this.center);

        this.bg.on(Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    }

    touchMoveEvent(evt: EventTouch) {
        console.log(evt);
        this.center.x += evt.getUIDelta().x / this.bg.getComponent(UITransform)!.contentSize.width;
        this.center.y -= evt.getDeltaY() / this.bg.getComponent(UITransform)!.contentSize.height;
        this.material.setProperty('center', this.center);
    }
}

