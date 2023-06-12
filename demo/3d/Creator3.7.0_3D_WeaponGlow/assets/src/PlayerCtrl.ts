import { _decorator, Component, Node, SkeletalAnimation, SkinnedMeshRenderer, Vec4 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerCtrl')
export class PlayerCtrl extends Component {
    /* use `property` decorator if your want the member to be serializable */
    @property({ type: SkinnedMeshRenderer })
    body: SkinnedMeshRenderer = null;

    @property({ type: SkinnedMeshRenderer })
    weapon: SkinnedMeshRenderer = null;

    private static _inst: PlayerCtrl;
    public static get inst(): PlayerCtrl {
        return this._inst;
    }

    private _isLoop: boolean = true;
    private _anim: SkeletalAnimation;
    private _curentAnimIndex: number = 0;

    start() {
        PlayerCtrl._inst = this;
        this._anim = this.node.getComponent(SkeletalAnimation);

        for (let i = 0; i < this._anim.clips.length; ++i) {
            let clip = this._anim[i];
            if (clip == this._anim.defaultClip) {
                this._curentAnimIndex = i;
            }
        }
        this.rimLightColor = this._rimColor;
    }

    private _rimColor = new Vec4(0, 0, 0, 0);
    private _rimEnabled = false;
    public set rimLightEnabled(enable: boolean) {
        this._rimEnabled = enable;
        this.rimLightColor = this._rimColor;
    }

    public get rimLightEnabled(): boolean {
        return this._rimEnabled;
    }

    set rimLightColor(rimColor: Vec4) {
        this._rimColor = rimColor;
        let value = new Vec4(rimColor.x, rimColor.y, rimColor.z, this._rimEnabled? rimColor.w : 0);
        // this.body.sharedMaterial.setProperty('rimColor', value);
        // this.weapon.sharedMaterial.setProperty('rimColor', value)
    }

    get rimLightColor(): Vec4 {
        return this._rimColor;
    }

    public set isLoop(v: boolean) {
        this._isLoop = v;
        let animState = this._anim.getState(this.curAnimName);
        animState.repeatCount = v ? Infinity : 1;
    }

    public get isLoop(): boolean {
        return this._isLoop;
    }

    playNext() {
        this._curentAnimIndex = (this._curentAnimIndex + 1) % this._anim.clips.length;
        this.playAnim(this.curAnimName, this._isLoop);
    }

    playPrev() {
        this._curentAnimIndex = (this._curentAnimIndex - 1 + this._anim.clips.length) % this._anim.clips.length;
        this.playAnim(this.curAnimName, this._isLoop);
    }

    playAnim(animName, isLoop?: boolean, cb?: Function) {
        let animState = this._anim.getState(animName);
        animState.repeatCount = isLoop ? Infinity : 1;
        this._anim.play(animName);
    }

    public get curAnimName(): string {
        let clip = this._anim.clips[this._curentAnimIndex];
        return clip.name;
    }
}
