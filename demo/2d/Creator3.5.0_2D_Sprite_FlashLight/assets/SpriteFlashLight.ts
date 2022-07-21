import { CCFloat, Color, Component, log, Material, Sprite, Vec2, Vec4, _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass
export default class FlashLight extends Component {

    @property(Sprite)
    sprite !: Sprite;

    /**光束宽度 */
    @property({type: CCFloat, tooltip: "光束宽度"})
    lightWidth = 0.2;

    /**时间 */
    @property({type: CCFloat, tooltip: "时间"})
    LoopTime = 1.0;

    /**TimeInterval */
    @property({type: CCFloat, tooltip: "TimeInterval"})
    TimeInterval = 3.0;

    /**记录时间 */
    private time: number = 0;
    /**精灵上的材质 */
    private material: Material = null!;

    private startPos = 0;
    private moveLength = 0;

    private Speed = 0;

    private dttime = 0;

    start(){
        
        this.time = 0;
        this.dttime = 0;
        this.material = this.sprite.getMaterial(0)!;   //获取材质 
        // this.material.setProperty('mainTexture', this.sprite.spriteFrame.texture);
        // this.material.setProperty('lightColor', this.lightColor);
        // this.material.setProperty('lightAngle', this.lightAngle);
        // this.material.setProperty('lightWidth', this.lightWidth);
        // this.material.setProperty('enableGradient', this.enableGradient);
        // this.material.setProperty('cropAlpha', this.cropAlpha);
        this.startPos = -this.lightWidth/2;
        this.moveLength = this.lightWidth + 1;
        this.Speed = this.moveLength / this.LoopTime;
        this.time = this.startPos;
    }

    update(dt: number){

        this.time += dt * this.Speed;
        this.dttime += dt;
        this.material.setProperty("lightCenterPoint", new Vec2(this.time, this.time));          //设置材质对应的属性

        if (this.dttime > this.LoopTime + this.TimeInterval) {
            this.time = this.startPos;
            this.dttime = 0;
        }
    }
}