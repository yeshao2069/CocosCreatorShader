
import { _decorator, Component, EventTouch, Button, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ButtonCD')
export class ButtonCD extends Component {

    clickTime: number = -1; // 点击时间
    minInterval: number = 1000; // 最小点击间隔时间 1000 = 1s

    onLoad () {
        var self = this;

        function onTouchDown (event: EventTouch) {
            if(self.clickTime == -1){
                self.clickTime = new Date().getTime();
            } else {
                var now = new Date().getTime();
                if(now - self.clickTime < self.minInterval){
                    //点击间隔小于预设值
                    self.getComponent(Button)!.interactable = false;
                } else {
                    self.clickTime = now;
                    self.getComponent(Button)!.interactable = true;
                }
            }
        }
        
        function onTouchUp (event: EventTouch) {
            
        }
        
        this.node.on(Node.EventType.TOUCH_START, onTouchDown, this);
        this.node.on(Node.EventType.TOUCH_END, onTouchUp, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, onTouchUp, this);
    }
}

