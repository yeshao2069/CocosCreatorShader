import { _decorator, Component, Node, ModelComponent, utils } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MeshInfo')
export class MeshInfo extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.

        console.log(utils.readMesh( this.node.getComponent(ModelComponent).mesh))
    }
    
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
