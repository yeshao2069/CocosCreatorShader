import { _decorator, view, Node, ResolutionPolicy, Component, log, UITransform, Widget } from 'cc';
import { DEBUG } from 'cc/env';
const { ccclass, property } = _decorator;

/**
 * @classdesc  游戏主内容节点自适应所有分辨率的脚本
 * @author caizhitao
 * @version 0.1.0
 * @since 2018-11-30
 * @description
 *
 * 用法：
 *      1. 将本组件挂载在节点上即可
 *
 * 适配原理：
 *      1. 将游戏主内容节点的宽高调整为画布的大小，以进行Size适配
 *
 * 注意：
 *      1. 挂载这个脚本的节点不能加入Widget组件，不然这个适配是没有效果的
 *      2. 目前只支持 SHOW_ALL 模式下的背景缩放适配，不支持其他模式的背景缩放
 *
 *  @example
    ```
    // e.g.
    // 代码中设置 SHOW_ALL 模式的参考代码
        view.setDesignResolutionSize(720, 1280, ResolutionPolicy.SHOW_ALL);
    // 或者 Canvas 组件中，同时勾选 Fit Width 和 Fit Height 
    ```
 */

@ccclass('ContentAdapter')
export default class ContentAdapter extends Component {
    onLoad() {
        if (DEBUG) {
            log("调整前");
            log(`屏幕分辨率: ${view.getCanvasSize().width} x ${view.getCanvasSize().height}`);
            log(`视图窗口可见区域分辨率: ${view.getVisibleSize().width} x ${view.getVisibleSize().height}`);
            log(`视图中边框尺寸: ${view.getFrameSize().width} x ${view.getFrameSize().height}`);
            log(`设备或浏览器像素比例: ${view.getDevicePixelRatio()}`);
            log(`节点宽高: ${this.node.getComponent(UITransform)!.contentSize.width} x ${this.node.getComponent(UITransform)!.contentSize.height}`);
        }

        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        let srcScaleForShowAll = Math.min(view.getCanvasSize().width / this.node.getComponent(UITransform)!.contentSize.width, 
            view.getCanvasSize().height / this.node.getComponent(UITransform)!.contentSize.height);
        let realWidth = this.node.getComponent(UITransform)!.contentSize.width * srcScaleForShowAll;
        let realHeight = this.node.getComponent(UITransform)!.contentSize.height * srcScaleForShowAll;

        // 2. 基于第一步的数据，再做节点宽高适配
        const _width = this.node.getComponent(UITransform)!.contentSize.width * (view.getCanvasSize().width / realWidth);
        const _height = this.node.getComponent(UITransform)!.contentSize.height * (view.getCanvasSize().height / realHeight);
        this.node.getComponent(UITransform)!.setContentSize(_width, _height);

        // 3. 因为本节点的宽高发生了改变，所以要手动更新剩下子节点的宽高
        this._updateAllChildNodeWidget(this.node);

        if (DEBUG) {
            log(`节点在SHOW_ALL模式下展示的宽高: ${realWidth} x ${realHeight}`);
            log(`节点在SHOW_ALL模式下展示的缩放: ${srcScaleForShowAll}`);
            log(`节点在SHOW_ALL模式下做全屏处理后的实际宽高（${view.getCanvasSize().width}x${view.getCanvasSize().height}
                等价于于原节点的宽高(${this.node.getComponent(UITransform)!.contentSize.width}x${this.node.getComponent(UITransform)!.contentSize.height})`
            );
        }
    }
    private _updateAllChildNodeWidget(parentNode: Node) {
        if (parentNode == null) {
            return;
        }
        let widget = parentNode.getComponent(Widget);
        if (widget != null) {
            widget.updateAlignment();
        }
        if (parentNode.children.length == 0) {
            return;
        }
        parentNode.children.forEach((childNode: Node) => {
            this._updateAllChildNodeWidget(childNode);
        });
    }
}
