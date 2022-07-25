
import { _decorator, Component, AnimationComponent, SkeletalAnimation } from 'cc';
import { MatComp } from './MatComp';
const { ccclass, property } = _decorator;

const idle = "idle";
const damage = "damage";
const dance = "dance";

@ccclass('AgentComp')
export class AgentComp extends Component {

    @property(MatComp)
    MatComp = null;

    private animation: SkeletalAnimation = null;
    private currAnim = null;

    onEnable(){
        this.animation=this.node.getComponent(SkeletalAnimation);
        this.initAnm()
        this.animation.on(AnimationComponent.EventType.FINISHED, () => {
            this.initAnm();
        })
    }

    initAnm() {
        this.playLoop(Math.random() > 0.4 ? dance : idle);
    }

    playLoop(anim:string) {
        if(this.currAnim == anim) return;
        this.animation.crossFade(anim,0.3);
        this.currAnim = anim;
    }

    playNormal(anim:string) {
        this.animation.crossFade(anim, this.currAnim == damage ? 0 : 0.2);
        this.currAnim = anim;
    }

    onHurt(ele) {
        this.playNormal(damage);
        console.log(ele);
        this.MatComp.setProp(ele);
    }
}

