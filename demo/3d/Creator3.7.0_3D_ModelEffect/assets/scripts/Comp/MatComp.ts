import { _decorator, Component, SkinnedMeshRenderer, renderer, Color} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('材质颜色组件')
export class MatComp extends Component {

    @property({ type: SkinnedMeshRenderer, tooltip: '角色mesh材质' })
    mesh: SkinnedMeshRenderer = null;
    protected mat: renderer.MaterialInstance = null;
    private colorEle: Color = null
    private currentProp: string = null;

    start() {
        this.mat = this.mesh.material;
    }

    onDisable() {
        this.colorEle = null;
        this.currentProp = null;
    }

    setProp(ele: { prop: string, color: Color, dura: number }) {
        if (this.currentProp != null && this.currentProp != ele.prop) {
            this.resetProp()
        }
        this.currentProp = ele.prop;
        this.colorEle = ele.color;
        this.unschedule(this.resetProp)
        this.changeProp()
        if (ele.dura > 0) this.scheduleOnce(this.resetProp, ele.dura)/* 持续事件大于0，重置初始状态 */
    }

    changeProp() {
        this.mat.setProperty(this.currentProp, this.colorEle);
    }
    
    resetProp() {
        if(this.currentProp == "baseColor"){
            this.mat.setProperty(this.currentProp, Color.BLACK);
            return
        }
        this.mat.setProperty(this.currentProp, this.currentProp == "mainColor" ? Color.WHITE : Color.TRANSPARENT);
    }
}

