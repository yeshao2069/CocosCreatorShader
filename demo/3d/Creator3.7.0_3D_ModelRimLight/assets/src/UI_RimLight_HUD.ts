import { _decorator, director, instantiate, Toggle, Slider, Color } from 'cc';
import { UILayoutRimLightHUD } from './UILayout_RimLight_HUD';
import { UIController } from './UIController';
import { UILayer, UIMgr } from './UIMgr';
import { PlayerCtrl } from './PlayerCtrl';

export class UI_RimLight_HUD extends UIController {

    constructor() {
        super('prefab/ui_rim_light_hud', UILayer.HUD);
    }

    private get layout(): UILayoutRimLightHUD {
        return this.node.getComponent(UILayoutRimLightHUD);
    }

    protected onCreated() {

        this.layout.chkEnabled.isChecked = PlayerCtrl.inst.rimLightEnabled;

        let rimColor = PlayerCtrl.inst.rimLightColor;
        this.layout.R.progress = rimColor.x;
        this.layout.G.progress = rimColor.y;
        this.layout.B.progress = rimColor.z;
        this.layout.A.progress = rimColor.w;
        this.refreshSliderValueShow();

        this.onSlideEvent(this.layout.R, this.onRimLightChanged, this);
        this.onSlideEvent(this.layout.G, this.onRimLightChanged, this);
        this.onSlideEvent(this.layout.B, this.onRimLightChanged, this);
        this.onSlideEvent(this.layout.A, this.onRimLightChanged, this);

        this.onToggleEvent(this.layout.chkEnabled, (toggle: Toggle) => {
            PlayerCtrl.inst.rimLightEnabled = toggle.isChecked;
        });
    }

    onRimLightChanged(slider: Slider) {
        let rimColor = PlayerCtrl.inst.rimLightColor;
        rimColor.x = this.layout.R.progress;
        rimColor.y = this.layout.G.progress;
        rimColor.z = this.layout.B.progress;
        rimColor.w = this.layout.A.progress;
        PlayerCtrl.inst.rimLightColor = rimColor;
        this.refreshSliderValueShow();
    }

    private _color = new Color();
    refreshSliderValueShow(){
        this.layout.ValueR.string = '' + ~~(this.layout.R.progress * 255);
        this.layout.ValueG.string = '' + ~~(this.layout.G.progress * 255);
        this.layout.ValueB.string = '' + ~~(this.layout.B.progress * 255);
        this.layout.ValueA.string = '' + ~~(this.layout.A.progress * 255);
        this._color.x = this.layout.R.progress;
        this._color.y = this.layout.G.progress;
        this._color.z = this.layout.B.progress;
        this._color.w = this.layout.A.progress;
        this.layout.colorDisplay.color = this._color;
    }
}