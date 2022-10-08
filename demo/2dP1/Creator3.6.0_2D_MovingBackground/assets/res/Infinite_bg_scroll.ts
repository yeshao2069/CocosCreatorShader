import { _decorator, Component, Node, Widget, view, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InfiniteBgScroll')
export default class Infinite_bg_scroll extends Component {
  @property(Node)
  bg1: Node | null = null;
  @property(Node)
  bg2: Node | null = null;
  speed: number = 500;


  onLoad() {
    const viewSize = view.getVisibleSize();
    this.bg2.getComponent(Widget).left = viewSize.width
    this.bg2.getComponent(Widget).right = -viewSize.width
  }

  update(dt) {
    const temp = dt * this.speed;
    let bg2Pos = this.bg2.getPosition();
    let bg1Pos = this.bg1.getPosition();
    let bg1W = this.bg1.getComponent(UITransform).width;
    if (bg2Pos.x - temp <= 0) {
      bg1Pos.x = bg2Pos.x;
      bg2Pos.x = bg1Pos.x + bg1W;
    }
    bg1Pos.x -= temp;
    bg2Pos.x -= temp;

    this.bg1.setPosition(bg1Pos);
    this.bg2.setPosition(bg2Pos);
  }
}
