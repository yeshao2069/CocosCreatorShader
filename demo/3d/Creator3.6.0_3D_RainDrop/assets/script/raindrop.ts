
import { _decorator, Component, Node, profiler } from 'cc';
import { PPBaseStage } from './PPBaseStage';
import { PPMgr } from './PPMgr';
import { PPRaindropStage } from './PPRaindropStage';
const { ccclass, property } = _decorator;
 
@ccclass('Raindrop')
export class Raindrop extends Component {

    @property(PPMgr)
    mgr: PPMgr|null = null;

    start () {
        this.mgr?.registerCreateStage(stageDesc => {
            let stage : PPBaseStage | null = null;
            if ('PPRaindropStage' == stageDesc.stageName) {
                stage = new PPRaindropStage();
            }

            if (stage) {
                stage.mat = stageDesc.mat;
            }

            return stage;
        });
        this.mgr?.init();


        profiler.hideStats();
    }

}

