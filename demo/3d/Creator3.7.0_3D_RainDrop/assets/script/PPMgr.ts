
import { _decorator, Component, Director, ForwardFlow, ForwardStage, pipeline, ForwardPipeline, renderer, RenderPipeline, gfx, Material, CCString, RenderStage, view } from 'cc';
import { PPBaseStage } from './PPBaseStage';
const { ccclass, property } = _decorator;

export class ShaderTexParams {
    name: string = "";

}

@ccclass('PPStageDesc')
export class PPStageDesc {
    @property(Material)
    mat:    Material | null = null;

    @property(CCString)
    stageName: string = "";
}

type createPPStage = (stageDesc: PPStageDesc) => PPBaseStage | null;

const _samplerInfo = [
    gfx.Filter.LINEAR,
    gfx.Filter.LINEAR,
    gfx.Filter.NONE,
    gfx.Address.CLAMP,
    gfx.Address.CLAMP,
    gfx.Address.CLAMP,
];

@ccclass('PPMgr')
export class PPMgr extends Component {

    @property([PPStageDesc])
    stageDescs: PPStageDesc[] = [];

    private static createPPStageCounter = 0;
    private createPPStageMap: Map<number, createPPStage> = new Map();
    private fbMap: Map<string, gfx.Framebuffer> = new Map();
    private _quadIA: gfx.InputAssembler | null = null;

    get pipeline() {
        const pl = Director.instance.root?.pipeline;
        if (!pl) { return null; }
        return pl;
    }

    get device() {
        const pl = this.pipeline;
        if (!pl) { return null; }

        return pl?.device;
    }

    get samper() {
        const dev = this.device;
        if (!dev) { return null; }

        // @ts-ignore
        return this.device.getSampler(_samplerInfo);
    }

    get flows() {
        const flows = this.pipeline?.flows;
        if (!flows) {
            return null;
        }

        return flows;
    }

    public init() {
        const pl = this.pipeline;
        if (!pl) { return; }

        this.generateIA(pl.device);
        this.replaceScreenFrameBuffer();
        this.stageDescs.forEach(stageDesc => {
            this.createPPStageMap.forEach(create => {
                const stage = create(stageDesc);
                if (!stage) { return; }
                this.addStage(stage);
            });
        });
    }

    public registerCreateStage(cb: createPPStage) {
        PPMgr.createPPStageCounter++;
        this.createPPStageMap.set(PPMgr.createPPStageCounter, cb);

        return PPMgr.createPPStageCounter;
    }

    public createFrameBufferIf(fbName: string): gfx.Framebuffer|null {
        let fb = this.fbMap.get(fbName);
        if (fb) { return fb; }
        const pl = this.pipeline;
        if (!pl) { return null; }
        const newfb = this.generateFrameBuffer(pl);
        if (newfb) {
            this.fbMap.set(fbName, newfb);
        }

        return newfb;
    }

    public getFrameBuffer(name: string): gfx.Framebuffer | null {
        const fb = this.fbMap.get(name);
        if (!fb) { return null; }
        return fb;
    }

    public replaceScreenFrameBuffer() {
        const flows = this.flows;
        if (!flows) { return; }
        const self = this;
        const screenTexName = "screenTex";
        const fb = this.createFrameBufferIf(screenTexName);
        if (!fb) { return; }
        for (let flow of flows) {
            if (flow instanceof ForwardFlow) {
                const ff = flow as ForwardFlow;

                for (let stage of ff.stages) {
                    if (stage instanceof ForwardStage) {
                        const fstage = stage;
                        const originRender = fstage.render;

                        fstage.render = function(camera: renderer.scene.Camera) {
                            const originfb = camera.window?.framebuffer;

                            if (camera.window) {
                                // @ts-ignore
                                camera.window._framebuffer = self.fbMap.get(screenTexName);
                            }

                            originRender.call(fstage, camera);

                            // @ts-ignore
                            camera.window._framebuffer = originfb;
                        }

                        break;
                    }
                }
                break;
            }
        }
    }

    public addStage(stage: PPBaseStage) {
        const pl = this.pipeline;
        if (!pl) { return; }
        const flows = this.flows;
        if (!flows) { return; }

        for (let flow of flows) {
            if (flow instanceof ForwardFlow) {
                stage.initWithStageDesc(this, pl);
                stage.ia = this._quadIA;
                stage.activate(pl, flow);
                flow.stages.push(stage);
                break;
            }
        }
    }

    private generateIA(device: gfx.Device) {
        if (null != this._quadIA) { return; }

        const vbStride = Float32Array.BYTES_PER_ELEMENT * 4;
        const vbSize = vbStride * 4;
        const quadVB = device.createBuffer(new gfx.BufferInfo(
            gfx.BufferUsageBit.VERTEX | gfx.BufferUsageBit.TRANSFER_DST,
            gfx.MemoryUsageBit.HOST | gfx.MemoryUsageBit.DEVICE,
            vbSize,
            vbStride,
        ));
        const vbData = new Float32Array(4 * 4);
        let n = 0;
        vbData[n++] = -1.0; vbData[n++] = -1.0; vbData[n++] = 0; vbData[n++] = 0;
        vbData[n++] = 1.0; vbData[n++] = -1.0; vbData[n++] = 1; vbData[n++] = 0;
        vbData[n++] = -1.0; vbData[n++] = 1.0; vbData[n++] = 0; vbData[n++] = 1;
        vbData[n++] = 1.0; vbData[n++] = 1.0; vbData[n++] = 1; vbData[n++] = 1;
        quadVB.update(vbData);

        const ibStride = Uint8Array.BYTES_PER_ELEMENT;
        const ibSize = ibStride * 6;
        const quadIB = device.createBuffer(new gfx.BufferInfo(
            gfx.BufferUsageBit.INDEX | gfx.BufferUsageBit.TRANSFER_DST,
            gfx.MemoryUsageBit.HOST | gfx.MemoryUsageBit.DEVICE,
            ibSize,
            ibStride,
        ));
        const indices = new Uint8Array(6);
        indices[0] = 0; indices[1] = 1; indices[2] = 2;
        indices[3] = 1; indices[4] = 3; indices[5] = 2;
        quadIB.update(indices);

        const attributes = new Array<gfx.Attribute>(2);
        attributes[0] = new gfx.Attribute('a_position', gfx.Format.RG32F);
        attributes[1] = new gfx.Attribute('a_texCoord', gfx.Format.RG32F);

        const quadIA = device.createInputAssembler(new gfx.InputAssemblerInfo(
            attributes,
            [quadVB],
            quadIB,
        ));

        this._quadIA = quadIA;
    }

    private generateFrameBuffer (pl: RenderPipeline): gfx.Framebuffer | null {
        const device = pl.device;
        if (null == device) {
            return null;
        }
        const width = view.getViewportRect().width;
        const height = view.getViewportRect().height;

        const colorAttachment0 = new gfx.ColorAttachment();
        colorAttachment0.format = gfx.Format.RGBA16F;
        colorAttachment0.loadOp = gfx.LoadOp.CLEAR;
        colorAttachment0.storeOp = gfx.StoreOp.STORE;
        const depthStencilAttachment = new gfx.DepthStencilAttachment();
        depthStencilAttachment.format = gfx.Format.UNKNOWN;
        depthStencilAttachment.depthLoadOp = gfx.LoadOp.CLEAR;
        depthStencilAttachment.depthStoreOp = gfx.StoreOp.STORE;
        depthStencilAttachment.stencilLoadOp = gfx.LoadOp.CLEAR;
        depthStencilAttachment.stencilStoreOp = gfx.StoreOp.STORE;
        const rPass = device.createRenderPass(new gfx.RenderPassInfo([colorAttachment0], depthStencilAttachment));

        const clrTexs : gfx.Texture[] = [];
        clrTexs.push(device.createTexture(new gfx.TextureInfo(
            gfx.TextureType.TEX2D,
            gfx.TextureUsageBit.COLOR_ATTACHMENT | gfx.TextureUsageBit.SAMPLED,
            gfx.Format.RGBA16F,
            width,
            height,
        )));

        const depthTex: gfx.Texture = device.createTexture(new gfx.TextureInfo(
            gfx.TextureType.TEX2D,
            gfx.TextureUsageBit.DEPTH_STENCIL_ATTACHMENT,
            gfx.Format.UNKNOWN,
            width,
            height,
        ));

        const fb: gfx.Framebuffer = device.createFramebuffer(new gfx.FramebufferInfo(
            rPass,
            clrTexs,
            depthTex,
        ));

        return fb;
    }

    protected destroyQuadInputAssembler () {
        if (this._quadIA) {
            let vbs = this._quadIA?.vertexBuffers;
            vbs.forEach(vb => {
                vb.destroy();
            });
            this._quadIA.indexBuffer?.destroy();
            this._quadIA.destroy();
            this._quadIA = null;
        }

    }

}

