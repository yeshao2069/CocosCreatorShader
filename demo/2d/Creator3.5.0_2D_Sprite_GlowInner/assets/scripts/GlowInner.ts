import { _decorator, Component, Slider, Label, ScrollView, Vec4, dynamicAtlasManager, find, Material, RenderComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GlowInner')
export default class GlowInner extends Component {
    private _redSlider: Slider | null = null;
    private _redSliderLabel: Label | null = null;
    private _greenSlider: Slider | null = null;
    private _greenSliderLabel: Label | null = null;
    private _blueSlider: Slider | null = null;
    private _blueSliderLabel: Label | null = null;
    private _alphaSlider: Slider | null = null;
    private _alphaSliderLabel: Label | null = null;
    private _glowWidthSlider: Slider | null = null;
    private _glowWidthSliderLabel: Label | null = null;
    private _glowThresholdSlider: Slider | null = null;
    private _glowThresholdSliderLabel: Label | null = null;
    private _scrollView: ScrollView | null = null;

    onLoad() {
        dynamicAtlasManager.enabled = false;
        this._redSlider = find("Canvas/Content/Sliders/ColorRedSlider/Slider")!.getComponent(Slider);
        this._redSliderLabel = find("Canvas/Content/Sliders/ColorRedSlider/ValueLabel")!.getComponent(Label);

        this._greenSlider = find("Canvas/Content/Sliders/ColorGreenSlider/Slider")!.getComponent(Slider);
        this._greenSliderLabel = find("Canvas/Content/Sliders/ColorGreenSlider/ValueLabel")!.getComponent(Label);

        this._blueSlider = find("Canvas/Content/Sliders/ColorBlueSlider/Slider")!.getComponent(Slider);
        this._blueSliderLabel = find("Canvas/Content/Sliders/ColorBlueSlider/ValueLabel")!.getComponent(Label);

        this._alphaSlider = find("Canvas/Content/Sliders/ColorAlphaSlider/Slider")!.getComponent(Slider);
        this._alphaSliderLabel = find("Canvas/Content/Sliders/ColorAlphaSlider/ValueLabel")!.getComponent(Label);

        this._glowWidthSlider = find("Canvas/Content/Sliders/GlowWidthSlider/Slider")!.getComponent(Slider);
        this._glowWidthSliderLabel = find("Canvas/Content/Sliders/GlowWidthSlider/ValueLabel")!.getComponent(Label);

        this._glowThresholdSlider = find("Canvas/Content/Sliders/GlowThresholdSlider/Slider")!.getComponent(Slider);
        this._glowThresholdSliderLabel = find("Canvas/Content/Sliders/GlowThresholdSlider/ValueLabel")!.getComponent(Label);

        this._scrollView = find("Canvas/Content/ScrollView")!.getComponent(ScrollView);
    }

    onEnable() {
        this._redSlider!.node.on("slide", this._onSliderChanged, this);
        this._greenSlider!.node.on("slide", this._onSliderChanged, this);
        this._blueSlider!.node.on("slide", this._onSliderChanged, this);
        this._alphaSlider!.node.on("slide", this._onSliderChanged, this);
        this._glowWidthSlider!.node.on("slide", this._onSliderChanged, this);
        this._glowThresholdSlider!.node.on("slide", this._onSliderChanged, this);
    }

    onDisable() {
        this._redSlider!.node.off("slide", this._onSliderChanged, this);
        this._greenSlider!.node.off("slide", this._onSliderChanged, this);
        this._blueSlider!.node.off("slide", this._onSliderChanged, this);
        this._alphaSlider!.node.off("slide", this._onSliderChanged, this);
        this._glowWidthSlider!.node.off("slide", this._onSliderChanged, this);
        this._glowThresholdSlider!.node.off("slide", this._onSliderChanged, this);
    }

    start() {
        this._onSliderChanged();
    }
    
    private _onSliderChanged() {
        // ?????????????????? Label ??????
        this._redSliderLabel!.string = `${this._redSlider!.progress.toFixed(2)} | ${Math.round(255 * this._redSlider!.progress)}`;
        this._greenSliderLabel!.string = `${this._greenSlider!.progress.toFixed(2)} | ${Math.round(255 * this._greenSlider!.progress)}`;
        this._blueSliderLabel!.string = `${this._blueSlider!.progress.toFixed(2)} | ${Math.round(255 * this._blueSlider!.progress)}`;
        this._alphaSliderLabel!.string = `${this._alphaSlider!.progress.toFixed(2)} | ${Math.round(255 * this._alphaSlider!.progress)}`;

        // ?????????????????????????????????????????? [0.0, 0.1] ?????? 0.1+ ????????????????????????????????????????????????????????????
        let realGlowWidthProgress = this._glowWidthSlider!.progress * 0.2;
        this._glowWidthSliderLabel!.string = `${realGlowWidthProgress.toFixed(2)}`;

        // ?????????????????????????????????????????? [0.0, 0.5] ?????? 0.5+ ?????????????????????????????????????????????????????????????????????
        // let realGlowThresholdProgress = this._glowThresholdSlider!.progress * 0.5;
        let realGlowThresholdProgress = this._glowThresholdSlider!.progress;
        this._glowThresholdSliderLabel!.string = `${realGlowThresholdProgress.toFixed(2)}`;

        // ????????????
        this._updateRenderComponentMaterial({
            glowColor: new Vec4(this._redSlider!.progress, this._greenSlider!.progress,
                this._blueSlider!.progress, this._alphaSlider!.progress),
            glowColorSize: realGlowWidthProgress,
            glowThreshold: realGlowThresholdProgress,
        });
    }
    
    /**
     * ???????????????????????????
     *
     * 1. ????????????
     * 2. ???????????? unitform ????????????
     * 3. ???????????????????????????
     */
    private _updateRenderComponentMaterial(param: {
        /**
         * ???????????? [0.0, 1.0]
         */
        glowColorSize: number;
        /**
         * ???????????? [0.0, 1.0]
         */
        glowColor: Vec4;
        /**
         * ???????????? [0.0, 1.0]
         */
        glowThreshold: number;
    }) {
            this._scrollView!.content!.children.forEach((childNode) => {
                // let material: Material = childNode.getComponent(Sprite)!.getMaterial(0)!;
                let material: Material = childNode.getComponent(RenderComponent)!.getMaterial(0)!;
                material.setProperty("glowColorSize", param.glowColorSize);
                material.setProperty("glowColor", param.glowColor);
                material.setProperty("glowThreshold", param.glowThreshold);
            });
        }
}
