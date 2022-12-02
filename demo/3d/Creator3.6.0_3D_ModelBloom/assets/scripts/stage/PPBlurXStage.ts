
import { _decorator, RenderPipeline, Vec2 } from 'cc';
import { PPBaseStage } from '../PPBaseStage';
import { PPMgr } from '../PPMgr';
const { ccclass } = _decorator;

@ccclass('PPBlurXStage')
export class PPBlurXStage extends PPBaseStage {

    constructor() {
        super();
        this._name = "PPBlurXStage";
    }

    public initWithStageDesc(mgr: PPMgr, pl: RenderPipeline) {
        this.outputTexName = 'tempTex2';

        const tex = mgr.getFrameBuffer('screenTex');
        const texSize = new Vec2(1, 1);
        if (tex && tex.colorTextures[0]) {
            texSize.x = tex.colorTextures[0].width;
            texSize.y = tex.colorTextures[0].height;
        }
        this.bindShaderParamsTexture(mgr, 'tempTex', 'tempTex');
        this.setOutputFramebuffer(mgr);
        this.bindShaderParamsVec2('texSize', texSize);
        this.bindShaderParamsVec2('direction', new Vec2(1, 0));
    }

}
