
import { _decorator, Component, Node, Material, Sprite, PhysicsSystem2D, EPhysics2DDrawFlags, UITransform, v4, color, TERRAIN_HEIGHT_BASE, Vec3, v3, SystemEventType, EventTouch, Vec2, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Elastic')
export class Elastic extends Component {
    
    mat: Material = null!;
    matHadel: number = 0;
    matName: string = "triangleStartPoint";
    matNewName: string = "triangleNewPoint";

    offset: number = 10;

    triangleArr: Node[][] = [];

    start() {


        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
            EPhysics2DDrawFlags.Pair |
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape;

        console.warn(this.node.children[0].getPosition())
        // [3]
        this.mat = this.node.getComponent(Sprite)?.getMaterialInstance(0)!;
        this.matHadel = this.mat.passes[0].getHandle(this.matNewName);

        this.triangleArr = this.splitTriangle();
        let startPoint = this.changeUV(this.triangleArr);
        console.warn("三角形总数", startPoint);

        this.mat.setProperty(this.matName, startPoint);
        this.mat.setProperty(this.matNewName, startPoint);

        this.touchEvent();
    }

    /**触摸监听 */
    touchEvent() {
        let children = this.node.children;
        console.warn("children", children)
        for (let i = 0; i < children.length; i++) {
            let temp = children[i];
            // temp.on(SystemEventType.TOUCH_START, this.touchStart, this);
            temp.on(SystemEventType.TOUCH_MOVE, this.touchMove, this);
        }
    }

    touchMove(event: EventTouch) {
        let node = event.target! as Node;
        let del = event.getDelta();
        let pos = node.getPosition().add(v3(del.x, del.y, 0));
        node.setPosition(pos);
    }

    test() {
        // 向量的叉乘
        function vectorPro(v1: Vec2, v2: Vec2) {
            return v1.x * v2.y - v1.y * v2.x;
        }

        // 用位运算高效判断符号相同
        function sameSign(a: number, b: number) {
            if ((a<0 && b<0) || (a>=0 && b>=0)) {
            // 符号相同
                return true;
            } else {
            // 符号不同
                return false;
            }
        }

        // 判断点是否在三角形内
        function pointinTriangle(A: Vec2, B: Vec2, C: Vec2, uv: Vec2) {
            let P = v2(uv.x, uv.y);
            let pa = v2(P).subtract(A);
            let pb = v2(P).subtract(B);
            let pc = v2(P).subtract(C);

            let t1 = vectorPro(pa, pb);
            let t2 = vectorPro(pb, pc);
            let t3 = vectorPro(pc, pa);
            console.warn(t1, t2, t3);
            return sameSign(t1, t2) && sameSign(t2, t3);
        }

        console.warn(pointinTriangle(v2(1, 0), v2(1, 2), v2(0, 0), v2(1, 0.755555555555)));
    }

    /**分割三角形 */
    splitTriangle() {
        let triangleArr: Node[][] = [];
        let center = this.node.getChildByName("NodeC")!;
        for (let i = 1; i < this.node.children.length; i++) {
            let current = this.node.children[i];
            let next: Node = null!;
            if (i === this.node.children.length - 1) {
                next = this.node.children[1];
            } else {
                next = this.node.children[i + 1];
            }
            triangleArr.push([current, next, center]);
        }
        return triangleArr;
    }

    /**转换uv坐标 */
    changeUV(arr: Node[][]) {
        let contentSize = this.node.getComponent(UITransform)!.contentSize;
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                const element = arr[i][j].getPosition();
                if (j < arr[i].length - 1) {
                    element.add(v3(element).normalize().multiplyScalar(this.offset));
                }
                let x = element.x / contentSize.width;
                let y = element.y / contentSize.height;
                res.push(v4((x + 0.5), (0.5 - y), 0, 0));
            }
        }
        return res;
    }

    //面积
    abcArea(A: Vec3, B: Vec3, C: Vec3) {
        let a = v3(A).subtract(B).length();
        let b = v3(B).subtract(C).length();
        let c = v3(C).subtract(A).length();
        let p = (a + b + c) / 2;
        let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return s;
    }

    update(deltaTime: number) {
        let startPoint = this.changeUV(this.triangleArr);
        this.mat.setProperty(this.matNewName, startPoint);

        let newWorldPos = this.node.getChildByName("NodeC")!.getWorldPosition();
        console.log(newWorldPos);
        this.node.setWorldPosition(newWorldPos);
    }
}