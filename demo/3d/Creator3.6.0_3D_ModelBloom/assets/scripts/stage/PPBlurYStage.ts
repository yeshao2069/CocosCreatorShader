
import { _decorator, RenderPipeline, Vec2, Material } from 'cc';
import { PPBaseStage } from '../PPBaseStage';
import { PPMgr } from '../PPMgr';
const { ccclass } = _decorator;

@ccclass('PPBlurYStage')
export class PPBlurYStage extends PPBaseStage {

    constructor() {
        super();
        this._name = "PPBlurYStage";
    }

    public initWithStageDesc(mgr: PPMgr, pl: RenderPipeline) {
        this.outputTexName = 'tempTex';

        const originMat = this.mat;
        if (originMat) {
            this.mat = new Material();
            this.mat.copy(originMat);
        }
        const tex = mgr.getFrameBuffer('screenTex');
        const texSize = new Vec2(1, 1);
        if (tex && tex.colorTextures[0]) {
            texSize.x = tex.colorTextures[0].width;
            texSize.y = tex.colorTextures[0].height;
        }
        this.bindShaderParamsTexture(mgr, 'tempTex', 'tempTex2');
        this.setOutputFramebuffer(mgr);
        this.bindShaderParamsVec2('texSize', texSize);
        this.bindShaderParamsVec2('direction', new Vec2(0, 1));
    }

}
