import { _decorator, Component, Node, Mesh, Material, Vec3, Vec2, utils, ModelComponent } from 'cc';
const { ccclass, property } = _decorator;

const _tempVec3: Vec3 = new Vec3();
const _tempVec2: Vec2 = new Vec2();


@ccclass('lowPolyWater')
export class lowPolyWater extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property
    protected unitSize = 1

    @property({tooltip: '整数Vec2，暂未取整'})
    protected size: Vec2 = new Vec2(2, 2);

    @property({type: Material})
    protected material: Material = null;

    @property
    protected waterHeight = 2

    protected mesh: Mesh

   

    start () {
        // Your initialization goes here.

        this.CreateWaterPlane()
    }

    CreateWaterPlane(){


        // this.material= new Material();
        // this.material.initialize({effectName: "../shader/lowPolyWater"});

        let offset = new Vec3((this.size.x) / 2 * this.unitSize, 0, (this.size.y) / 2 * this.unitSize);


        //创建顶点和UV
        let positions: number[] = [];
        let uvs: number[] = [];

        //把uv缩放到0 - 1
        let uvScale: Vec2 = new Vec2(1 / (this.size.x), 1 / (this.size.y));


        //三角形index
        let indices: number[] = [];
        let index = 0;

        let normals: number[] = [];
        
        //生成水面indices

        let sizeX = this.size.x;
        let sizeZ = this.size.y;

        for (let tileX = 0; tileX < sizeX; tileX++){
            for (let tileZ = 0; tileZ < sizeZ; tileZ++){
                indices[index++] = index - 1;
                indices[index++] = index - 1;
                indices[index++] = index - 1;
                indices[index++] = index - 1;
                indices[index++] = index - 1;
                indices[index++] = index - 1;
            }
        }

        
        
        //生成水面顶点数据
        for (let tileX = 0; tileX < sizeX; tileX++){
            for (let tileZ = 0; tileZ < sizeZ; tileZ++){

            positions.push(...Object.values(_tempVec3.set(tileX, 0, tileZ).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX, 0, tileZ + 1).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX + 1, 0, tileZ + 1).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX, 0, tileZ).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX + 1, 0, tileZ + 1).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX + 1, 0, tileZ).multiplyScalar(this.unitSize).subtract(offset)));

            
            // uvs.push(...Object.values( _tempVec2.set(tileX, tileZ).multiply(uvScale))) 
            // uvs.push(...Object.values( _tempVec2.set(tileX, tileZ + 1).multiply(uvScale))) 
            // uvs.push(...Object.values( _tempVec2.set(tileX + 1, tileZ + 1).multiply(uvScale))) 
            // uvs.push(...Object.values( _tempVec2.set(tileX, tileZ).multiply(uvScale))) 
            // uvs.push(...Object.values( _tempVec2.set(tileX + 1, tileZ + 1).multiply(uvScale))) 
            // uvs.push(...Object.values( _tempVec2.set(tileX + 1, tileZ).multiply(uvScale))) 

            normals.push( ...[0, this.unitSize, 1] );
            normals.push( ...[1, this.unitSize, 0] );
            normals.push( ...[-1, this.unitSize, -1] );
            normals.push( ...[1, this.unitSize, 1] );
            normals.push( ...[0, this.unitSize, -1] );
            normals.push( ...[-1, this.unitSize, 0] );

            // normals.push( ...[0, 1, 0] );
            // normals.push( ...[0, 1, 0] );
            // normals.push( ...[0, 1, 0] );
            // normals.push( ...[0, 1, 0] );
            // normals.push( ...[0, 1, 0] );
            // normals.push( ...[0, 1, 0] );
            }

        }

        //生成其他面数据
        for (let tileX = 0; tileX < sizeX; tileX++){
            indices[index++] = index - 1;
            indices[index++] = index - 1;
            indices[index++] = index - 1;
            indices[index++] = index - 1;
            indices[index++] = index - 1;
            indices[index++] = index - 1;
        }

        for (let tileX = 0; tileX < sizeX; tileX++){

            let tileZ = sizeZ;
            positions.push(...Object.values(_tempVec3.set(tileX, 0, tileZ).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX, -this.waterHeight / this.unitSize, tileZ).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX + 1, -this.waterHeight / this.unitSize, tileZ).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX, 0, tileZ).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX + 1, -this.waterHeight / this.unitSize, tileZ).multiplyScalar(this.unitSize).subtract(offset)));
            positions.push(...Object.values(_tempVec3.set(tileX + 1, 0, tileZ).multiplyScalar(this.unitSize).subtract(offset)));


            normals.push( ...[0, this.unitSize, 0] );
            normals.push( ...[0, this.unitSize, 0] );
            normals.push( ...[0, this.unitSize, 0] );
            normals.push( ...[0, this.unitSize, 0] );
            normals.push( ...[0, this.unitSize, 0] );
            normals.push( ...[0, this.unitSize, 0] );
            
        }

        this.mesh = utils.createMesh({positions, indices, normals});

        const node: Node = new Node();
        const model = node.addComponent(ModelComponent);

        model.mesh = this.mesh;

        model.material = this.material;

        node.setParent(this.node);

        console.log(node);
        console.log(utils.readMesh(this.mesh));
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
