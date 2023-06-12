
import { _decorator, RenderPipeline } from 'cc';
import { PPBaseStage } from '../PPBaseStage';
import { PPMgr } from '../PPMgr';
const { ccclass } = _decorator;

@ccclass('PPThresholdStage')
export class PPThresholdStage extends PPBaseStage {

    constructor() {
        super();
        this._name = "PPThresholdStage";
    }

    public initWithStageDesc(mgr: PPMgr, pl: RenderPipeline) {
        this.paramTexs = ['screenTex'];
        this.outputTexName = 'tempTex';

        super.initWithStageDesc(mgr, pl);
    }

}
