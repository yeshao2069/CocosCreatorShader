
import { _decorator, RenderPipeline, Vec2 } from 'cc';
import { PPBaseStage } from '../PPBaseStage';
import { PPMgr } from '../PPMgr';
const { ccclass } = _decorator;

@ccclass('PPMergeStage')
export class PPMergeStage extends PPBaseStage {

    constructor() {
        super();
        this._name = "PPMergeStage";
    }

    public initWithStageDesc(mgr: PPMgr, pl: RenderPipeline) {
        this.paramTexs = ['screenTex', 'tempTex'];
        this.outputTexName = '';

        super.initWithStageDesc(mgr, pl);
    }

}
