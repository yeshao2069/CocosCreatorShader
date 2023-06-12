
import { _decorator, renderer, gfx, pipeline, Material, RenderStage, PipelineStateManager, Camera, RenderPipeline, Vec2, RenderFlow } from 'cc';
import { PPMgr } from './PPMgr';
const { ccclass, property } = _decorator;

const colors: gfx.Color[] = [new gfx.Color(0, 0, 0, 1)];

@ccclass('PPBaseStage')
export class PPBaseStage extends RenderStage {

    @property (Material)
    mat:    Material | null = null;

    private _ia:  gfx.InputAssembler | null = null;
    private _framebuffer: gfx.Framebuffer | null = null;

    paramTexs: string[] = ['screenTex'];
    outputTexName: string = '';

    constructor() {
        super();
        this._name = "PPBaseStage";
    }

    get ia() {
        return this._ia;
    }
    set ia(val) {
        this._ia = val;
    }

    get framebuffer() {
        return this._framebuffer;
    }
    set framebuffer(val) {
        this._framebuffer = val;
    }

    public initWithStageDesc(mgr: PPMgr, pl: RenderPipeline) {
        this.bindShaderParamsTexs(mgr);
        this.setOutputFramebuffer(mgr);
    }

    protected bindShaderParamsVec2(name: string, value: Vec2) {
        const pass = this.mat?.passes[0];
        if (!pass) { return; }

        const handle = pass.getHandle(name);
        if (handle < 1) { return; }

        pass.setUniform(handle, value)
    }

    protected bindShaderParamsTexs(mgr: PPMgr) {
        this.paramTexs.forEach(fbName => {
            this.bindShaderParamsTexture(mgr, fbName, fbName);
        });
    }

    protected setOutputFramebuffer(mgr: PPMgr) {
        if (!this.outputTexName) { return; }
        const fb = mgr.createFrameBufferIf(this.outputTexName);
        if (!fb) { return; }
        this.framebuffer = fb;
    }

    protected bindShaderParamsTexture(mgr: PPMgr, fbName: string, keyFBName: string) {
        const pass = this.mat?.passes[0];
        if (!pass) { return; }

        const binding = pass.getBinding(fbName);
        if (binding < 0) { return; }

        const fb = mgr.createFrameBufferIf(keyFBName);
        if (!fb) { return; }
        const samper = mgr.samper;
        if (!samper) { return; }

        pass.bindTexture(binding, fb.colorTextures[0]!);
        pass.bindSampler(binding, samper);
    }

    public activate (pipeline: RenderPipeline, flow: RenderFlow) {
        super.activate(pipeline, flow);
        this.mat?.passes[0].update();
    }

    public render (camera: renderer.scene.Camera): void {
        if (camera.projectionType != Camera.ProjectionType.PERSPECTIVE) { return; }
        if (null == this.mat) { return; }
        if (null == this._ia) { return; }

        const pl = this._pipeline;
        const device = pl.device;
        const cmdBuff = pl.commandBuffers[0];
        let fb = this.framebuffer ? this.framebuffer : camera.window?.framebuffer;
        if (null == fb) { return; }
        const rp = fb.renderPass;

        pl.pipelineUBO.updateCameraUBO(camera);

        const renderArea = new gfx.Rect(0, 0, 1, 1);
        const vp = camera.viewport;
        renderArea.x = vp.x * camera.width;
        renderArea.y = vp.y * camera.height;
        renderArea.width = vp.width * camera.width * pl.pipelineSceneData.shadingScale;
        renderArea.height = vp.height * camera.height * pl.pipelineSceneData.shadingScale;

        if (camera.clearFlag & gfx.ClearFlagBit.COLOR) {
            colors[0].x = camera.clearColor.x;
            colors[0].y = camera.clearColor.y;
            colors[0].z = camera.clearColor.z;
        }
        colors[0].w = camera.clearColor.w;

        cmdBuff.beginRenderPass(rp, fb, renderArea, colors, camera.clearDepth, camera.clearStencil);
        cmdBuff.bindDescriptorSet(pipeline.SetIndex.GLOBAL, pl.descriptorSet);

        const pass = this.mat!.passes[0];
        const shader = this.mat!.passes[0].getShaderVariant();

        let inputAssembler = this._ia;
        let pso: gfx.PipelineState | null = null;
        if (pass != null && shader != null && inputAssembler != null) {
            pso = PipelineStateManager.getOrCreatePipelineState(device, pass, shader, rp, inputAssembler);
        }

        if (pso != null) {
            cmdBuff.bindPipelineState(pso);
            cmdBuff.bindDescriptorSet(pipeline.SetIndex.MATERIAL, pass.descriptorSet);
            cmdBuff.bindInputAssembler(inputAssembler);
            cmdBuff.draw(inputAssembler);
        }

        cmdBuff.endRenderPass();
    }

    destroy() {
    }

}
