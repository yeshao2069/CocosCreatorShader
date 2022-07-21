
import { _decorator, Component, Node, Sprite, UITransform, Material } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GradualTransitionalAlbum')
export class GradualTransitionalAlbum extends Component {

    @property([Node])
    switchNodeList: Node[] = [];

    fadeRadius: number = 0.1;
    isTransforming: boolean = false;
    _callback: Function = null!;

    onLoad() {
        this.switchNodeList.forEach((node, idx) => {
            node.getComponent(UITransform)!.priority  = this.switchNodeList.length - idx;
        })
    }

    bgTramsform() {
        if (this.isTransforming) return;
        this.isTransforming = true;

        let time = 0.0;
        let node = this.switchNodeList[0];
        let material = node.getComponent(Sprite)!.materials[0]!;
        material.setProperty('u_fade_radius', this.fadeRadius);
        material.setProperty('u_time', time);
        // material.define('USE_TRAMSFORM', true, 0, true);
        // material.passes[0].getShaderVariant([ { name:'USE_TRAMSFORM', value:true}]);
        // material.passes[0].beginChangeStatesSilently();
        // material.passes[0].tryCompile(); // force update shaders
        // material.passes[0].endChangeStatesSilently();

        this._callback = function(){
            time += 0.03;
            material.setProperty('u_time', time);

            if (time > 1.0 + this.fadeRadius) {
                node = this.switchNodeList.shift()!;
                this.switchNodeList.push(node);
                this.switchNodeList.forEach((node, idx) => {
                    node.getComponent(UITransform)!.priority = this.switchNodeList.length - idx;
                });

                material.setProperty('u_time', 0);
                // material.define('USE_TRAMSFORM', false, 0, true);
                // material.passes[0].getShaderVariant([ { name:'USE_TRAMSFORM', value:false}]);
                // material.passes[0].beginChangeStatesSilently();
                // material.passes[0].tryCompile(); // force update shaders
                // material.passes[0].endChangeStatesSilently();

                this.isTransforming = false;
                this.unschedule(this._callback);
            }
        };

        this.schedule(this._callback, 0.03);
    }
};