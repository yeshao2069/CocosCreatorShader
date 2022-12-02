
import { _decorator, RenderPipeline, Vec2 } from 'cc';
import { PPBaseStage } from './PPBaseStage';
import { PPMgr } from './PPMgr';
const { ccclass } = _decorator;

@ccclass('PPRaindropStage')
export class PPRaindropStage extends PPBaseStage {

    constructor() {
        super();
        this._name = "PPRaindropStage";
    }

    public initWithStageDesc(mgr: PPMgr, pl: RenderPipeline) {
        this.paramTexs = ['screenTex'];
        this.outputTexName = '';

        super.initWithStageDesc(mgr, pl);

        const tex = mgr.getFrameBuffer('screenTex');
        const texSize = new Vec2(1, 1);
        if (tex && tex.colorTextures[0]) {
            texSize.x = tex.colorTextures[0].width;
            texSize.y = tex.colorTextures[0].height;
        }
        this.bindShaderParamsVec2('winSize', texSize);
    }

}
