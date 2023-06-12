import { _decorator, Component, Node, loader, instantiate, find, Widget, UITransform, view, ResolutionPolicy } from 'cc';
import { UIController } from './UIController';
const { ccclass, property } = _decorator;


export enum UILayer{
    SCENE,
    GAME,
    HUD,
    POPUP,
    ALERT,
    NOTICE,
    MASK,
    NUM
}

export class UIMgr {
    private static _inst: UIMgr = null;
    public static get inst(): UIMgr {
        if (!this._inst) {
            this._inst = new UIMgr();
        }
        return this._inst;
    }

    public resize() {
        //根据屏幕大小决定适配策略
        //想明白原理，请阅读本文 https://blog.csdn.net/qq_36720848/article/details/89742451

        //decide the resolution policy according to the relationship between screen size and design resolution.  go https://blog.csdn.net/qq_36720848/article/details/89742451 (artile in Chinese) for more detail.
        let dr = view.getDesignResolutionSize();
        var s = view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;

        //
        if((rw/rh) > (dr.width / dr.height)){
            //如果更长，则用定高
            //if screen size is longer than design resolution. use fitHeight
            finalH = dr.height;
            finalW = finalH * rw/rh;
        }
        else{
            //如果更短，则用定宽
            //if screen size is shorter than design resolution. use fitWidth.
            finalW = dr.width;
            finalH = rh/rw * finalW;
        }

        //手工修改canvas和设计分辨率，这样反复调用也能生效。
        //we use the code below instead of fitWidth = true or fitHeight = true. so that we can recall this method many times.
        view.setDesignResolutionSize(finalW,finalH,ResolutionPolicy.UNKNOWN);
        let cvs = find('Canvas').getComponent(UITransform);
        cvs.setContentSize(finalW, finalH);
    }

    public setup(maxLayers:number){
        this.resize();
        let canvas = find('Canvas').getComponent(UITransform);
        if(canvas.node.children.length){
            return;
        }
        
        for(let i = 0; i < maxLayers; ++i){
            let layerNode = new Node();
            layerNode.layer = canvas.node.layer;
            let uiTransfrom = layerNode.addComponent(UITransform);
            uiTransfrom.width = canvas.width;
            uiTransfrom.height = canvas.height;
            
            let widget = layerNode.addComponent(Widget);
            widget.isAlignBottom = true;
            widget.isAlignTop = true;
            widget.isAlignLeft = true;
            widget.isAlignRight = true;

            widget.left = 0;
            widget.right = 0;
            widget.top = 0;
            widget.bottom = 0;
            canvas.node.addChild(layerNode);
        }
    }

    public getLayerNode(layerIndex:number):Node{
        let canvas = find('Canvas');
        return canvas.children[layerIndex];
    }

    public showUI(uiCls: any, cb?: Function,target?:any):any {
        let ui = new uiCls() as UIController;
        let resArr = ui.getRes() || [];
        resArr.push(ui.prefabUrl as never);
        loader.loadResArray(resArr, () => {
            let node:Node = null;
            if(ui.prefabUrl){
                let prefab = loader.getRes(ui.prefabUrl);
                node = instantiate(prefab);
            }
            else{
                //special for empty ui
                node = new Node();
                node.layer = find('Canvas').layer;

                //keep size
                let widget = node.addComponent(Widget);
                widget.isAlignBottom = true;
                widget.isAlignTop = true;
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
    
                widget.left = 0;
                widget.right = 0;
                widget.top = 0;
                widget.bottom = 0;
            }

            ui.setup(node);
        });
        return ui;
    }
}
