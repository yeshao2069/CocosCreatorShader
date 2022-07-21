
import { _decorator, Component, utils, primitives, MeshRenderer } from 'cc';

const { ccclass, property } = _decorator;

 
@ccclass('MyMesh')
export class MyMesh extends Component {
    start () {
        const renderer = this.node.getComponent(MeshRenderer);
        if(!renderer){
            return;
        }
        const plane: primitives.IGeometry = primitives.plane({
            width: 10,
            length: 10,
            widthSegments: 200,
            lengthSegments: 200,
        });

        renderer.mesh = utils.createMesh(plane);
    }

}
