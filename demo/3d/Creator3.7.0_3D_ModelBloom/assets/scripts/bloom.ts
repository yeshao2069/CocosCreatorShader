
import { _decorator, Component, Node } from 'cc';
import { PPBaseStage } from './PPBaseStage';
import { PPMgr } from './PPMgr';
import { PPThresholdStage } from './stage/PPThresholdStage';
import { PPBlurXStage } from './stage/PPBlurXStage';
import { PPBlurYStage } from './stage/PPBlurYStage';
import { PPMergeStage } from './stage/PPMergeStage';
const { ccclass, property } = _decorator;
 
@ccclass('Bloom')
export class Bloom extends Component {

    @property(PPMgr)
    mgr: PPMgr|null = null;

    start () {
        this.mgr?.registerCreateStage(stageDesc => {
            let stage : PPBaseStage | null = null;
            if ('PPThresholdStage' == stageDesc.stageName) {
                stage = new PPThresholdStage();
            } else if ('PPBlurXStage' == stageDesc.stageName) {
                stage = new PPBlurXStage();
            } else if ('PPBlurYStage' == stageDesc.stageName) {
                stage = new PPBlurYStage();
            } else if ('PPMergeStage' == stageDesc.stageName) {
                stage = new PPMergeStage();
            }

            if (stage) {
                stage.mat = stageDesc.mat;
            }

            return stage;
        });
        this.mgr?.init();
    }

}
