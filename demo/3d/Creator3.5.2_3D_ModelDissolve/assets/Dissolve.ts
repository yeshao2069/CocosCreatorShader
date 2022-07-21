
import { _decorator, Component, MeshRenderer, gfx, renderer, Material, Texture2D } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('Dissolve')
export class Dissolve extends Component {

    @property(MeshRenderer)
    mr: MeshRenderer | null = null;

    @property(Texture2D)
    txtNoise1: Texture2D | null = null;

    @property(Texture2D)
    txtNoise2: Texture2D | null = null;

    private dissolve: boolean = false;
    private dissolve2: boolean = false;

    private dissolveThresholdHandle: number = -1;
    private dissolveThresholdTyeHandle: number = -1;
    private dissolveType2Handle: number = -1;
    private dissolveNoiseMapBinding: number = -1;
    private dissolveThreshold: number = 0.0;

    start () {
    }

    update (deltaTime: number) {
        if (this.mr?.materials) {
            let pass = this.mr?.materials[0]?.passes[0];
            if (pass) {
                if (this.dissolve) {
                    this.dissolveThreshold += 0.5 * deltaTime;
                    if (this.dissolveThreshold > 1) {
                        this.dissolveThreshold = 0;
                    }
                }
                this.processPass(pass);
            }

            pass = this.mr?.materials[1]?.passes[0];
            if (pass) {
                this.processPass(pass);
            }

            if (0 == this.dissolveThreshold) {
                this.dissolve = false;
            }
        }
    }

    processPass(pass: renderer.Pass) {
        if (this.dissolve) {
            this.setDissolveThreshold(pass, this.dissolveThreshold);
        } else if (this.dissolve2) {
            this.setDissolveThreshold(pass, this.dissolveThreshold);
        }
    }

    preFetchHandles(pass: renderer.Pass) {
        if (-1 == this.dissolveThresholdHandle) {
            this.dissolveThresholdHandle = pass.getHandle('dissolveThreshold')
        }
        if (-1 == this.dissolveThresholdTyeHandle) {
            this.dissolveThresholdTyeHandle = pass.getHandle('dissolveOffsetDir', 3, gfx.Type.FLOAT);
        }
        if (-1 == this.dissolveType2Handle) {
            this.dissolveType2Handle = pass.getHandle('dissolveParams2', 0, gfx.Type.FLOAT);
        }
        if (-1 == this.dissolveNoiseMapBinding) {
            this.dissolveNoiseMapBinding = pass.getBinding('dissolveMap');
        }
    }

    setDissolveThreshold(pass: renderer.Pass, value: number) {
        pass.setUniform(this.dissolveThresholdHandle, value);
        pass.update();
    }

    onBtnDissolve() {
        this.dissolve = true;
        if (this.mr?.materials) {
            let pass = this.mr?.materials[0]?.passes[0];
            if (pass) {
                this.preFetchHandles(pass);
                pass.setUniform(this.dissolveThresholdTyeHandle, 1.0);
                pass.setUniform(this.dissolveType2Handle, 1.0);
                pass.bindTexture(this.dissolveNoiseMapBinding, this.txtNoise1?.getGFXTexture()!);
                pass.update();
            }

            pass = this.mr?.materials[1]?.passes[0];
            if (pass) {
                pass.setUniform(this.dissolveThresholdTyeHandle, 1.0);
                pass.setUniform(this.dissolveType2Handle, 1.0);
                pass.bindTexture(this.dissolveNoiseMapBinding, this.txtNoise1?.getGFXTexture()!);
                pass.update();
            }
        }
    }

    onBtnDissolveUp() {
        this.dissolve = true;
        if (this.mr?.materials) {
            let pass = this.mr?.materials[0]?.passes[0];
            if (pass) {
                this.preFetchHandles(pass);
                pass.setUniform(this.dissolveThresholdTyeHandle, 1.0);
                pass.setUniform(this.dissolveType2Handle, 0.0);
                pass.bindTexture(this.dissolveNoiseMapBinding, this.txtNoise2?.getGFXTexture()!);
                pass.update();
            }

            pass = this.mr?.materials[1]?.passes[0];
            if (pass) {
                pass.setUniform(this.dissolveThresholdTyeHandle, 1.0);
                pass.setUniform(this.dissolveType2Handle, 0.0);
                pass.bindTexture(this.dissolveNoiseMapBinding, this.txtNoise2?.getGFXTexture()!);
                pass.update();
            }
        }
    }

    onBtnDissolveExpand() {
        this.dissolve = true;

        if (this.mr?.materials) {
            let pass = this.mr?.materials[0]?.passes[0];
            if (pass) {
                this.preFetchHandles(pass);
                pass.setUniform(this.dissolveThresholdTyeHandle, 0.0);
                pass.setUniform(this.dissolveType2Handle, 0.0);
                pass.bindTexture(this.dissolveNoiseMapBinding, this.txtNoise2?.getGFXTexture()!);
                pass.update();
            }

            pass = this.mr?.materials[1]?.passes[0];
            if (pass) {
                pass.setUniform(this.dissolveThresholdTyeHandle, 0.0);
                pass.setUniform(this.dissolveType2Handle, 0.0);
                pass.bindTexture(this.dissolveNoiseMapBinding, this.txtNoise2?.getGFXTexture()!);
                pass.update();
            }
        }
    }

}

