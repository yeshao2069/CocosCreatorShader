
import { _decorator, Component, Node, Material, Sprite, Vec2, UITransform, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Metaball')
export class Metaball extends Component {

    @property(Node)
    ball !: Node;
    material !: Material;

    touchStartPoint: Vec2 = new Vec2();

    onLoad() {
        this.material = this.ball.getComponent(Sprite)!.getMaterial(0)!;
        let _width = this.ball.getComponent(UITransform)!.contentSize.width;
        let _height = this.ball.getComponent(UITransform)!.contentSize.height;
        this.touchStartPoint.set(_width/2, _height/2);
        this.ball.on(Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
      }

    
    touchMoveEvent(evt: EventTouch) {
        this.touchStartPoint = this.touchStartPoint.add(evt.getUIDelta());
        let _width = this.ball.getComponent(UITransform)!.contentSize.width;
        let _height = this.ball.getComponent(UITransform)!.contentSize.height;
        const x = this.touchStartPoint.x;
        const y = _height - this.touchStartPoint.y;
        this.material.setProperty('u_point', new Vec2(x/_width, y/_height));
    }
}

