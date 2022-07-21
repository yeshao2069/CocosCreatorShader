import { _decorator, Component, dynamicAtlasManager } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadingStyle')
export default class LoadingStyle extends Component {
    onLoad() {
        // 关闭动态合图
        dynamicAtlasManager.enabled = false;
    }
}
