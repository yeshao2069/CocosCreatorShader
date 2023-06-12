import { _decorator, Component, Node } from 'cc';
import { UIMgr, UILayer } from './UIMgr';
import { UI_RimLight_HUD } from './UI_RimLight_HUD';
const { ccclass, property } = _decorator;

@ccclass('AppStartRimLight')
export class AppStartRimLight extends Component {

    start () {
        UIMgr.inst.setup(UILayer.NUM);
        UIMgr.inst.showUI(UI_RimLight_HUD);
    }
}