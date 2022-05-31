
import { _decorator, Component, Node, Label, Slider, MeshRenderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoleHighLight')
export class RoleHighLight extends Component {
    
    @property(Node)
    tempModel !: Node;
    @property(Label)
    showLabel !: Label;

    onSlider (evt: Slider) {
        let progress = evt.progress;

        this.showLabel.string = progress.toFixed(2);

        let mats = this.tempModel.getComponentsInChildren(MeshRenderer);
        for (let i = 0; i < mats.length; i++) {
            let mat = mats[i].getMaterial(0)!;
            mat.setProperty('brightness', progress);
        }
    }
}