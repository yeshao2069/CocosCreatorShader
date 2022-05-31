
import { _decorator, Component, Slider, Label, dynamicAtlasManager,
    find, Node, RenderComponent, Material, Vec2, pipeline } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GaussionBlur')
export class GaussionBlur extends Component {

    private _blurSlider !: Slider;
    private _blurSliderLabel !: Label;
    private _examplesParentNode !: Node;
    private _gsFactor : number = 500; // 调整高斯模糊系数 (建议 50 ~ 5000)

    onLoad () {
        dynamicAtlasManager.enabled = false;

        this._blurSlider = find("Canvas/Content/Controller/BlurSlider/Slider")!.getComponent(Slider)!;
        this._blurSliderLabel = find("Canvas/Content/Controller/BlurSlider/ValueLabel")!.getComponent(Label)!;
        this._examplesParentNode = find("Canvas/Content/ScrollView/Examples")!;
    }

    onEnable() {
        this._blurSlider.node.on("slide", this._onSliderChanged, this);
    }

    onDisable() {
        this._blurSlider.node.off("slide", this._onSliderChanged, this);
    }

    start() {
        this._onSliderChanged();
    }

    private _onSliderChanged() {
        this._blurSliderLabel.string = `${this._blurSlider.progress.toFixed(2)}`;

        // 更新材质
        this._updateRenderComponentMaterial({});
    }

    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    private _updateRenderComponentMaterial(param: {}) {
        this._examplesParentNode.children.forEach(childNode => {
            childNode.getComponents(RenderComponent).forEach(renderComponent => {
                let material: Material = renderComponent.getMaterial(0)!;
                // let _w = 1000 - 990 * this._blurSlider.progress;
                // let _h = 1000 - 990 * this._blurSlider.progress;

                let _w = this._gsFactor - (this._gsFactor-30) * this._blurSlider.progress;
                let _h = this._gsFactor - (this._gsFactor-30) * this._blurSlider.progress;
                material.setProperty('textureSize', new Vec2(_w, _h));

                renderComponent.setMaterial(material, 0);
            });
        });
    }
}

