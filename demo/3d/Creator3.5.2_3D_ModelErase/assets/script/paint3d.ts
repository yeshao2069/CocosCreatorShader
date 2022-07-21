
import { _decorator, Component, Node, EventTouch, Camera, PhysicsSystem, utils, Vec3, Material, MeshRenderer } from 'cc';
import { TexturePaint } from './texturePaint';
const { ccclass, property } = _decorator;

const INTERVAL_TIME = 100;
@ccclass('Paint3d')
export class Paint3d extends Component {
    @property(Node)
    meshNode:Node = null!;    
    @property(Camera)
    cameraCom: Camera = null!;

    protected physicsSystem = PhysicsSystem.instance;
    protected meshPositions : Vec3[] = [];
    protected meshUvs : number[] = [];
    paint: TexturePaint = null!;
    startTime: number = 0;

    onLoad () {
        this.node.on(Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    start () {
        this.paint = this.meshNode.getComponent(TexturePaint)!;

        let meshData = utils.readMesh(this.paint.meshRenderer.mesh!);
        let positions = [];
        let meshNode = this.paint.meshRenderer.node;
        let worldma = meshNode.worldMatrix.clone();
        for(let i = 0, l = meshData.positions.length /3; i < l; i++){
            positions.push(Vec3.transformMat4(new Vec3(),new Vec3(meshData.positions[i*3],meshData.positions[i*3 + 1],meshData.positions[i*3 + 2]),worldma));
        }

        this.meshPositions = positions;
        this.meshUvs = meshData.uvs!;
    }

    private _onTouchBegin (event:EventTouch) {
        this._onDrawWithEvent(event);
    }

    private _onTouchMoved (event:EventTouch) {
        this._onDrawWithEvent(event);
    }

    private _onTouchEnd (event:EventTouch) {
        this._onDrawWithEvent(event);
    }

    private _onDrawWithEvent (event: EventTouch) {
        let drawTime = new Date().getTime();
        if(drawTime - this.startTime < INTERVAL_TIME){
            return;
        }
        this.startTime = drawTime;
        let point = event.touch!.getLocation();
        let ray = this.cameraCom.screenPointToRay(point.x, point.y);

        if (this.physicsSystem.raycastClosest(ray)) {
            const result = this.physicsSystem.raycastClosestResult;
            
            if (result) {
                let hitPoint = result.hitPoint;
                let closest = 100;
                let closestIndex = -1;

                for(let i = 0,l = this.meshPositions.length; i < l; i++){
                    let meshPos = this.meshPositions[i];
                    let distance = Vec3.squaredDistance(meshPos, hitPoint);

                    if(distance < closest){
                        closestIndex = i;
                        closest = distance;
                    }
                }

                console.log(closestIndex)
                console.log(this.meshUvs[closestIndex*2])
                console.log(this.meshUvs[closestIndex*2 + 1])
                
                this.paint.context.globalCompositeOperation="destination-out";
                this.paint.context.beginPath();
                this.paint.context.fillStyle = '#fff';
                this.paint.context.arc(this.meshUvs[closestIndex*2] * 512,this.meshUvs[closestIndex*2 + 1] * 512,30,0,2*Math.PI);
                this.paint.context.fill();
                this.paint.setTextureFromCanvas();
            }
        }
    }
}