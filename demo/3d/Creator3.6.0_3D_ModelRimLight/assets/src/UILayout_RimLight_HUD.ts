import { _decorator, Component, Node, Toggle, Slider, Label, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UILayoutRimLightHUD')
export class UILayoutRimLightHUD extends Component {

    @property({type:Toggle})
    chkEnabled:Toggle = null;

    @property({type:Slider})
    R:Slider = null;

    @property({type:Slider})
    G:Slider = null;

    @property({type:Slider})
    B:Slider = null;

    @property({type:Slider})
    A:Slider = null;

    @property({type:Label})
    ValueR:Label = null;

    @property({type:Label})
    ValueG:Label = null;

    @property({type:Label})
    ValueB:Label = null;

    @property({type:Label})
    ValueA:Label = null;

    @property({type:Sprite})
    colorDisplay:Sprite = null;
}
