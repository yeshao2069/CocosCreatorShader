
import { _decorator, Component, MeshRenderer, Color, renderer, Vec3, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

const desPos = new Vec3;
const tempV1 = new Vec3;
const tempV2 = new Vec3(1, 1, 1);
const tempV3 = new Vec3(0, 0, 0);
const tOffset = new Vec2(1, 1);
const gayColor = new Color(255, 34, 96, 255) /* 导航线颜色 */

@ccclass('导航线组件')
export class NavLineComp extends Component {

    @property({ type: MeshRenderer, displayName: "箭头Mesh", tooltip: "拖MeshRenderer组件到这里" })
    lineMesh: MeshRenderer = null;
    @property({ displayName: "执行间隔", tooltip: "多少帧执行一次，建议3-5", min: 1 })
    dtFrame = 4;
    @property({ displayName: "箭头速度", tooltip: "控制材质texture位移,在代码里设置x轴向或者y轴移动", min: 0.1 })
    moveSpeed = 2;
    @property({ displayName: "箭头密度", tooltip: "控制箭头的密度", min: 0.1 })
    density  = 1;
    @property({ displayName: "角度变化", tooltip: "箭头是否有x欧拉角度变化，不勾选性能好点喽" })
    xEuler = true;
    protected mat: renderer.MaterialInstance /* 材质instance */
    private inited = false;/* 导航线是否启动 */
    private desLen: number = 0;
    private dt: number = 0;
    private angle: number = 0;


    onEnable() {
        this.mat = this.lineMesh.material;
        this.stop();
    }

    start() {
        const textureSpeed = new Vec2(0, 0);
        //根据需求也可以是x
        textureSpeed.y = this.moveSpeed;
        this.mat.setProperty("textureMoveSpeed", textureSpeed);
    }

    stop() {
        this.inited = false;
        this.mat.setProperty("mainColor", Color.TRANSPARENT);

    }

    init(pos) {
        this.dt = 0;
        this.inited = true;
        this.mat.setProperty("mainColor", gayColor);
        desPos.set(pos);
        this.setDis();

    }

    setDis() {
        tempV1.set(this.node.worldPosition);
        this.desLen = Vec3.distance(desPos, tempV1)
        //根据需求也可以是x
        tempV2.z = this.desLen;
        this.node.setScale(tempV2);
        //根据需求也可以是x
        tOffset.y = this.desLen*this.density;
        this.mat.setProperty("tilingOffset", tOffset);
        if(this.xEuler)this.rotateLine(tempV1, desPos)
    }

    /**
   * @Date: 2022-03-04 17:26:53
   * @LastEditors: iwae
   * @description: 
   * @param {any} pos 朝向,这里距离我们已经算过了，用deslen
   */
    rotateLine(start: Vec3, end: Vec3) {
        //角色转动的角度,相对Z轴，逆时针为正方向
        this.angle = Math.asin(Math.sin(Math.abs(end.y - start.y) / this.desLen)) * (180 / Math.PI) % 360
        tempV3.x = (end.y - start.y) > 0 ? -this.angle : this.angle
        this.node.setRotationFromEuler(tempV3);
    }


    update() {
        if (this.inited) {
            this.dt++;
            if (this.dt >= this.dtFrame) {
                this.setDis()
                this.dt = 0
            }
        }
    }
}

