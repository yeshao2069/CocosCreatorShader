
import { _decorator, Component, systemEvent, SystemEvent, EventTouch, Touch, geometry, Camera, MeshRenderer, gfx, Vec3, find, Node, Mat4, Mat3, Vec4, Quat, Material, random } from 'cc';
import { DecalMeshRenderer } from './DecalMeshRenderer';
const { ccclass, property } = _decorator;
 
@ccclass('Decal')
export class Decal extends Component {

    @property(Camera)
    mainCamera: Camera | null = null;

    @property(Material)
    decalMaterial: Material | null = null;

    @property(Node)
    debugCube: Node | null = null;

    private meshRenderer: MeshRenderer | null = null;
    private isTouchMove: boolean = false;
    private _ray = new geometry.Ray();
    private modOpt: geometry.IRayModelOptions = {
        distance: Infinity,
        doubleSided: false,
        mode: geometry.ERaycastMode.ANY,
        subIndices: [],
        result: []
    };

    start () {
    }

    onEnable () {
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onDisable () {
        systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onTouchStart (touch: Touch, event: EventTouch) {
        this.isTouchMove = false;
    }

    onTouchMove (touch: Touch, event: EventTouch) {
        const delta = touch.getUIDelta();
        if (delta.length() > 0.1) {
            this.isTouchMove = true;
        }
    }

    onTouchEnd (touch: Touch, event: EventTouch) {
        if (this.isTouchMove) { return; }
        this.isTouchMove = false;

        const point = touch.getLocation();
        this.mainCamera?.screenPointToRay(point.x, point.y, this._ray);
        const position = new Vec3();
        const normal = new Vec3();
        if (!this.getTouchPointOnModel(position, normal)) {
            console.log('Not touch on model');
            return;
        }
        this.addDecal(position, normal);
    }

    getTouchPointOnModel(position: Vec3, normal: Vec3): boolean {
        if (null == this.meshRenderer) {
            this.meshRenderer = this.getComponent(MeshRenderer);
        }
        const mo = this.meshRenderer?.model;
        if (!mo) {
            console.log('model is null');
            return false;
        }
        const me = this.meshRenderer?.mesh;
        if (!me) {
            console.log('mesh is null');
            return false;
        }

        if (this.modOpt.result) { this.modOpt.result.length = 0; }
        if (this.modOpt.subIndices) { this.modOpt.subIndices.length = 0; }
        const intersectCount = geometry.intersect.rayModel(this._ray, mo, this.modOpt);
        if (0 == intersectCount) {
            return false;
        }

        if (!this.modOpt.subIndices || !this.modOpt.result) {
            console.log(this.modOpt);
            return false;
        }
        position.set(Vec3.ZERO);
        const r = this.modOpt.result!;
        const s = this.modOpt.subIndices;

        if (me.renderingSubMeshes.length > 0) {
            const subIdx = s[0];
            const pos = me.renderingSubMeshes[subIdx].geometricInfo.positions;
            // const pos = me.readAttribute(subIdx, gfx.AttributeName.ATTR_POSITION);
            // if (!pos) { return false; }

            const pa = new Vec3();
            let posIndex = r[0].vertexIndex0 * 3;
            pa.set(pos[posIndex], pos[posIndex + 1], pos[posIndex + 2]);

            const pb = new Vec3();
            posIndex = r[0].vertexIndex1 * 3;
            pb.set(pos[posIndex], pos[posIndex + 1], pos[posIndex + 2]);

            const pc = new Vec3();
            posIndex = r[0].vertexIndex2 * 3;
            pc.set(pos[posIndex], pos[posIndex + 1], pos[posIndex + 2]);

            position.add(pa);
            position.add(pb);
            position.add(pc);
            position.divide3f(3, 3, 3);

            const normals = me.readAttribute(subIdx, gfx.AttributeName.ATTR_NORMAL);
            if (normals) {
                let nIdx = r[0].vertexIndex0 * 3;
                pa.set(normals[nIdx], normals[nIdx + 1], normals[nIdx + 2]);

                nIdx = r[0].vertexIndex1 * 3;
                pb.set(normals[nIdx], normals[nIdx + 1], normals[nIdx + 2]);

                nIdx = r[0].vertexIndex2 * 3;
                pc.set(normals[nIdx], normals[nIdx + 1], normals[nIdx + 2]);

                normal.add(pa);
                normal.add(pb);
                normal.add(pc);
                normal.divide3f(3, 3, 3);
            }
        } else {
            this._ray.computeHit(position, r[0].distance);
        }

        return true;
    }

    addDecal(position: Vec3, normal: Vec3) {
        position.transformMat4(this.node.worldMatrix);
        const projectorEye = this.mainCamera?.node.worldPosition;
        if (null == projectorEye) {
            return;
        }
        const me = this.meshRenderer?.mesh;
        if (!me) {
            console.log('mesh is null');
            return false;
        }

        if (this.debugCube) {
            this.debugCube.setWorldPosition(position);
            this.debugCube.removeFromParent();
            this.node.addChild(this.debugCube);
        }

        const dmr = this.addComponent(DecalMeshRenderer);
        const scale = new Vec3(0.5, 0.5, 4);
        projectorEye.subtract(position).normalize().add(position);
        dmr?.genDecalMesh(this.node, me, projectorEye, position, normal, scale);
        if (dmr && this.decalMaterial) {
            const newMat = new Material();
            newMat.copy(this.decalMaterial);
            newMat.setProperty('albedo', new Vec4(Math.random(), Math.random(), Math.random(), 1));
            dmr.material = newMat;
        }
    }

    rotateForVectors(a: Vec3, b: Vec3): Mat3 {
        a.normalize();
        b.normalize();
        const v = Vec3.cross(new Vec3(), a, b);
        const c = Vec3.dot(a, b);
        const v1 = v.x;
        const v2 = v.y;
        const v3 = v.z;
        const h = 1 / (1 + c);

        const vx = new Mat3(
                         0,  -v3,  v2,
                         v3,  0,  -v1,
                        -v2,  v1,  0,
                        )
        const rm = this.matrix3Dot(vx, vx);
        rm.multiplyScalar(h);
        rm.add(vx).add(Mat3.IDENTITY);

        console.log(a);
        console.log(b);
        console.log(rm);
        return rm;
    }

    matrix3Dot(ma: Mat3, mb: Mat3): Mat3 {
        const m = new Mat3();

        m.m00 = ma.m00 * mb.m00 + ma.m01 * mb.m03 + ma.m02 * mb.m06;
        m.m01 = ma.m00 * mb.m01 + ma.m01 * mb.m04 + ma.m02 * mb.m07;
        m.m02 = ma.m00 * mb.m02 + ma.m01 * mb.m05 + ma.m02 * mb.m08;

        m.m03 = ma.m03 * mb.m00 + ma.m04 * mb.m03 + ma.m05 * mb.m06;
        m.m04 = ma.m03 * mb.m00 + ma.m04 * mb.m04 + ma.m05 * mb.m07;
        m.m05 = ma.m03 * mb.m01 + ma.m04 * mb.m05 + ma.m05 * mb.m08;

        m.m06 = ma.m06 * mb.m00 + ma.m07 * mb.m03 + ma.m08 * mb.m06;
        m.m07 = ma.m06 * mb.m03 + ma.m07 * mb.m04 + ma.m08 * mb.m07;
        m.m08 = ma.m06 * mb.m00 + ma.m07 * mb.m05 + ma.m08 * mb.m08;

        return m;
    }

    matrix4Dot(ma: Mat4, mb: Mat4): Mat4 {
        const m = new Mat4();

        m.m00 = ma.m00 * mb.m00 + ma.m01 * mb.m04 + ma.m02 * mb.m08 + ma.m03 * mb.m12;
        m.m01 = ma.m00 * mb.m01 + ma.m01 * mb.m05 + ma.m02 * mb.m09 + ma.m03 * mb.m13;
        m.m02 = ma.m00 * mb.m02 + ma.m01 * mb.m06 + ma.m02 * mb.m10 + ma.m03 * mb.m14;
        m.m03 = ma.m00 * mb.m03 + ma.m01 * mb.m07 + ma.m02 * mb.m11 + ma.m03 * mb.m15;

        m.m04 = ma.m04 * mb.m00 + ma.m05 * mb.m04 + ma.m06 * mb.m08 + ma.m07 * mb.m12;
        m.m05 = ma.m04 * mb.m01 + ma.m05 * mb.m05 + ma.m06 * mb.m09 + ma.m07 * mb.m13;
        m.m06 = ma.m04 * mb.m02 + ma.m05 * mb.m06 + ma.m06 * mb.m10 + ma.m07 * mb.m14;
        m.m07 = ma.m04 * mb.m03 + ma.m05 * mb.m07 + ma.m06 * mb.m11 + ma.m07 * mb.m15;

        m.m08 = ma.m08 * mb.m00 + ma.m09 * mb.m04 + ma.m10 * mb.m08 + ma.m11 * mb.m12;
        m.m09 = ma.m08 * mb.m01 + ma.m09 * mb.m05 + ma.m10 * mb.m09 + ma.m11 * mb.m13;
        m.m10 = ma.m08 * mb.m02 + ma.m09 * mb.m06 + ma.m10 * mb.m10 + ma.m11 * mb.m14;
        m.m11 = ma.m08 * mb.m03 + ma.m09 * mb.m07 + ma.m10 * mb.m11 + ma.m11 * mb.m15;

        m.m12 = ma.m12 * mb.m00 + ma.m13 * mb.m04 + ma.m14 * mb.m08 + ma.m15 * mb.m12;
        m.m13 = ma.m12 * mb.m01 + ma.m13 * mb.m05 + ma.m14 * mb.m09 + ma.m15 * mb.m13;
        m.m14 = ma.m12 * mb.m02 + ma.m13 * mb.m06 + ma.m14 * mb.m10 + ma.m15 * mb.m14;
        m.m15 = ma.m12 * mb.m03 + ma.m13 * mb.m07 + ma.m14 * mb.m11 + ma.m15 * mb.m15;

        return m;
    }

}

