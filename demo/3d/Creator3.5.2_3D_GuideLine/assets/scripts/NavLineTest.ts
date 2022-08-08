import { _decorator, Component, Node, CameraComponent, screen, input, Input, Vec3, MeshRenderer, geometry, Vec2, isValid, instantiate, macro, sys, view, Prefab } from 'cc';
import { AgentComp } from './NavLine/AgentComp';

const { ccclass, property } = _decorator;


@ccclass('导航线测试')
export default class NavLineTest extends Component {

    @property(Prefab)
    pointerPfb: Prefab = null;

    @property(AgentComp)
    agent: AgentComp = null;

    @property(CameraComponent)
    mainCamera: CameraComponent = null;

    private targetPos = new Vec3
    private pointer:Node =null;

    async start() {
        input.on(Input.EventType.TOUCH_END, (touch) => {
            const location = touch.getLocation();
            const result = this.getTouchModel(location);
            if (result == null) {
                return;
            }
        }, this);

        if(!this.pointer){
            this.pointer=instantiate(this.pointerPfb)
            this.pointer.parent=this.node;
            this.pointer.setPosition(1000,1000)
        }
    }
    onEnable() {
        this.changeScreeen()
    }
    changeScreeen() {
        if (sys.isBrowser && sys.isMobile) {
            view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            screen.requestFullScreen()
        }
    }
    getTouchModel(location: Vec2) {
        this.pointer.setPosition(1000,1000);
        const ray = this.mainCamera.screenPointToRay(location.x, location.y);
        const comps = this.node.parent.getComponentsInChildren(MeshRenderer);
        let mesh: Component = null;
        let distance = Number.MAX_VALUE;
        for (let index = 0; index < comps.length; index++) {
            const element = comps[index];
            if (!isValid(element.node, true) || !element.node.active || !element.model) {
                continue;
            }
            const dis = geometry.intersect.rayModel(ray, element.model, { mode: geometry.ERaycastMode.CLOSEST, doubleSided: false, distance: Number.MAX_VALUE });
            if (dis && dis < distance) {
                distance = dis;
                mesh = element;
            }
        }
        if (mesh == null) return;
        ray.computeHit(this.targetPos, distance);
        this.moveAgent(this.targetPos)      
    }

    /**
     * @Date: 2022-03-04 18:16:59
     * @LastEditors: iwae
     * @description: 执行agent位移，给agent穿目的地的v3
     * @param {Vec3} pos
     */
    moveAgent( pos: Vec3) {
        this.agent.initAgent(pos)
        this.setDebugNode(pos, 0)
    }

    setDebugNode(Pos: Vec3, time = 0) {
        setTimeout(() => {
            this.pointer.setPosition(Pos)
        }, time);
    }

}

