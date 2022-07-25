import { _decorator, Component, Camera, screen, input, Input, geometry, Vec2, macro, sys, view, Prefab, PhysicsSystem, Toggle, Node, resources, instantiate, Label } from 'cc';
import { eleColor } from './BulletEnum';
import { AgentComp } from './Comp/AgentComp';

const { ccclass, property } = _decorator;
const ray = new geometry.Ray();

@ccclass('材质颜色测试')
export default class MatTest extends Component {

    @property(Camera)
    mainCamera: Camera = null;

    @property(Node)
    ToggleGrp = null;

    private currentEle = eleColor.Normal;

    async start() {
        input.on(Input.EventType.TOUCH_START, (touch) => {
            const location = touch.getLocation();
            const result = this.getTouchModel(location);
            if (result == null) {
                return;
            }
        }, this);

        resources.load("Prefab/Toggle", Prefab, (err, prefab) => {
            for (var i in eleColor) {
                let toggle = instantiate(prefab);
                toggle.name = i;
                toggle.getChildByName("Label").getComponent(Label).string=eleColor[i].name;
                toggle.parent = this.ToggleGrp;
            }
        });
    }
    
    onEnable() {
        this.changeScreeen();
    }

    changeScreeen() {
        if (sys.isBrowser && sys.isMobile) {
            view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            screen.requestFullScreen();
        }
    }

    getTouchModel(location: Vec2) {
        this.mainCamera.screenPointToRay(location.x, location.y, ray);
        if (PhysicsSystem.instance.raycastClosest(ray)) {
            const item = PhysicsSystem.instance.raycastClosestResult;
            /* 检测到碰撞体，执行材质改变 */
            this.clickAgent(item.collider);
        }
    }

    clickAgent(mesh: Component) {
        mesh.getComponent(AgentComp).onHurt(this.currentEle);
    }

    onToggleContainerClick (toggle: Toggle) {
        console.log("当前选择元素==", eleColor[toggle.node.name].name);
        this.currentEle = eleColor[toggle.node.name];
    }
}

