import { _decorator, Component, Node, loader, find, Button, EventHandler, EventTouch, game, Toggle, Slider } from 'cc';
import { UIMgr } from './UIMgr';

const { ccclass, property } = _decorator;

//按钮事件监听器
@ccclass('ClickEventAgent')
export class ClickEventAgent extends Component {

    onButtonClicked(evt: EventTouch, customEventData) {
        let btn = (evt.target as Node).getComponent(Button);
        let clickEvents = btn.clickEvents;
        for (let i = 0; i < clickEvents.length; ++i) {
            let h = clickEvents[i];
            if (h.customEventData == customEventData) {
                let cb = h['$cb$'];
                let target = h['$target$']
                let args = h['$args$'];
                cb.apply(target, [btn, args]);
            }
        }
    }

    onCheckEvent(toggle: Toggle, customEventData) {
        let checkEvents = toggle.checkEvents;
        for (let i = 0; i < checkEvents.length; ++i) {
            let h = checkEvents[i];
            if (h.customEventData == customEventData) {
                let cb = h['$cb$'];
                let target = h['$target$']
                let args = h['$args$'];
                cb.apply(target, [toggle, args]);
            }
        }
    }

    onSlideEvent(slider: Slider, customEventData) {
        let slideEvents = slider.slideEvents;
        for (let i = 0; i < slideEvents.length; ++i) {
            let h = slideEvents[i];
            if (h.customEventData == customEventData) {
                let cb = h['$cb$'];
                let target = h['$target$']
                let args = h['$args$'];
                cb.apply(target, [slider, args]);
            }
        }
    }

}

//自动管理事件，将在UI销毁时自动清理
export class AutoEventHandler {
    private _handlers = [];
    on(event: string, cb: Function, target?: any, once?: boolean) {
        this._handlers.push({
            event: event,
            cb: cb,
            target: target,
            once: once
        });
        game.on(event, cb, target, once);
    }

    off(event: string, cb: Function, target?: any, once?: boolean) {
        game.off(event, cb, target);
        for (let i = 0; i < this._handlers.length; ++i) {
            let h = this._handlers[i];
            if (h.event == event && h.cb == cb && h.target == target && h.once == once) {
                this._handlers.splice(i, 1);
                return;
            }
        }
    }

    dispose() {
        for (let i = 0; i < this._handlers.length; ++i) {
            let h = this._handlers[i];
            game.off(h.event, h.cb, h.target);
        }
    }
}

export class UIController extends AutoEventHandler {
    private static _idBase = 1000;

    private static _controllers: UIController[] = [];
    private _controllerId: number = 0;
    private _prefabUrl: string;
    private _layer: number;
    protected node: Node;
    constructor(prefabUrl: string, layer: number) {
        super();
        this._prefabUrl = prefabUrl;
        this._layer = layer;
        this._controllerId = UIController._idBase++;
        UIController._controllers.push(this);
    }

    public get prefabUrl(): string {
        return this._prefabUrl;
    }

    public get layer(): number {
        return this._layer;
    }

    public getRes(): [] {
        return [];
    }

    public static hideAll() {
        while (this._controllers.length) {
            this._controllers[0].hide();
        }
    }

    public setup(node: Node) {
        this.node = node;
        let parent = UIMgr.inst.getLayerNode(this.layer) || find('Canvas');
        parent.addChild(node);
        //结点创建完毕，调用子类的处理函数。
        this.onCreated();
    }

    public hide() {
        this.node.removeFromParent();
        this.node.destroy();
        for (let i = 0; i < UIController._controllers.length; ++i) {
            if (UIController._controllers[i] == this) {
                UIController._controllers.splice(i, 1);
                break;
            }
        }
        this.dispose();
        this.onDispose();
    }

    //添加按钮事件
    //cb:(btn:Button,args:any)=>void
    onButtonEvent(relativeNodePath: string | Node | Button, cb: Function, target?: any, args?: any) {

        let buttonNode: Node = null;
        if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
        }
        else if (relativeNodePath instanceof Button) {
            buttonNode = relativeNodePath.node;
        }
        else {
            buttonNode = find(relativeNodePath, this.node);
        }

        if (!buttonNode) {
            return null;
        }

        //添加转发器
        let agent = this.node.getComponent(ClickEventAgent);
        if (!agent) {
            agent = this.node.addComponent(ClickEventAgent);
        }

        let btn = buttonNode.getComponent(Button);
        let clickEvents = btn.clickEvents;
        let handler = new EventHandler();
        handler.target = this.node;
        handler.component = 'ClickEventAgent';
        handler.handler = 'onButtonClicked';
        handler.customEventData = '' + UIController._idBase++;

        //附加额外信息 供事件转发使用
        handler['$cb$'] = cb;
        handler['$target$'] = target;
        handler['$args$'] = args;

        clickEvents.push(handler);
        btn.clickEvents = clickEvents;
    }

    //移除按钮事件
    offButtonEvent(relativeNodePath: string | Node | Button, cb: Function, target: any) {
        let buttonNode: Node = null;
        if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;

        }
        else if (relativeNodePath instanceof Button) {
            buttonNode = relativeNodePath.node;
        }
        else {
            buttonNode = find(relativeNodePath, this.node);
        }

        if (!buttonNode) {
            return; ``
        }

        //添加转发器
        let agent = this.node.getComponent(ClickEventAgent);
        if (!agent) {
            return;
        }
        let btn = buttonNode.getComponent(Button);
        if (!btn) {
            return;
        }
        let clickEvents = btn.clickEvents;
        for (let i = 0; i < clickEvents.length; ++i) {
            let h = clickEvents[i];
            if (h['$cb$'] == cb && h['$target$'] == target) {
                clickEvents.splice(i, 1);
                btn.clickEvents = clickEvents;
                break;
            }
        }
    }

    //添加Toggle事件
    //cb:(btn:Toggle,args:any)=>void
    onToggleEvent(relativeNodePath: string | Node | Toggle, cb: Function, target?: any, args?: any) {
        let buttonNode: Node = null;
        if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
        }
        else if (relativeNodePath instanceof Toggle) {
            buttonNode = relativeNodePath.node;
        }
        else {
            buttonNode = find(relativeNodePath, this.node);
        }

        if (!buttonNode) {
            return null;
        }

        //添加转发器
        let agent = this.node.getComponent(ClickEventAgent);
        if (!agent) {
            agent = this.node.addComponent(ClickEventAgent);
        }

        let btn = buttonNode.getComponent(Toggle);
        let checkEvents = btn.checkEvents;
        let handler = new EventHandler();
        handler.target = this.node;
        handler.component = 'ClickEventAgent';
        handler.handler = 'onCheckEvent';
        handler.customEventData = '' + UIController._idBase++;

        //附加额外信息 供事件转发使用
        handler['$cb$'] = cb;
        handler['$target$'] = target;
        handler['$args$'] = args;

        checkEvents.push(handler);
        btn.checkEvents = checkEvents;
    }

    //移除按钮事件
    offToggleEvent(relativeNodePath: string | Node | Toggle, cb: Function, target: any) {
        let buttonNode: Node = null;
        if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
        }
        else if (relativeNodePath instanceof Toggle) {
            buttonNode = relativeNodePath.node;
        }
        else {
            buttonNode = find(relativeNodePath, this.node);
        }

        if (!buttonNode) {
            return null;
        }

        //添加转发器
        let agent = this.node.getComponent(ClickEventAgent);
        if (!agent) {
            return;
        }
        let btn = buttonNode.getComponent(Toggle);
        if (!btn) {
            return;
        }
        let checkEvents = btn.checkEvents;
        for (let i = 0; i < checkEvents.length; ++i) {
            let h = checkEvents[i];
            if (h['$cb$'] == cb && h['$target$'] == target) {
                checkEvents.splice(i, 1);
                btn.checkEvents = checkEvents;
                break;
            }
        }
    }


    //添加Slide事件
    //cb:(btn:Toggle,args:any)=>void
    onSlideEvent(relativeNodePath: string | Node | Slider, cb: Function, target?: any, args?: any) {
        let buttonNode: Node = null;
        if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
        }
        else if (relativeNodePath instanceof Slider) {
            buttonNode = relativeNodePath.node;
        }
        else {
            buttonNode = find(relativeNodePath, this.node);
        }

        if (!buttonNode) {
            return null;
        }

        //添加转发器
        let agent = this.node.getComponent(ClickEventAgent);
        if (!agent) {
            agent = this.node.addComponent(ClickEventAgent);
        }

        let btn = buttonNode.getComponent(Slider);
        let slideEvents = btn.slideEvents;
        let handler = new EventHandler();
        handler.target = this.node;
        handler.component = 'ClickEventAgent';
        handler.handler = 'onSlideEvent';
        handler.customEventData = '' + UIController._idBase++;

        //附加额外信息 供事件转发使用
        handler['$cb$'] = cb;
        handler['$target$'] = target;
        handler['$args$'] = args;

        slideEvents.push(handler);
        btn.slideEvents = slideEvents;
    }

    //移除Slide事件
    offSlideEvent(relativeNodePath: string | Node | Slider, cb: Function, target: any) {
        let buttonNode: Node = null;
        if (relativeNodePath instanceof Node) {
            buttonNode = relativeNodePath;
        }
        else if (relativeNodePath instanceof Slider) {
            buttonNode = relativeNodePath.node;
        }
        else {
            buttonNode = find(relativeNodePath, this.node);
        }

        if (!buttonNode) {
            return null;
        }

        //添加转发器
        let agent = this.node.getComponent(ClickEventAgent);
        if (!agent) {
            return;
        }
        let btn = buttonNode.getComponent(Slider);
        if (!btn) {
            return;
        }
        let slideEvents = btn.slideEvents;
        for (let i = 0; i < slideEvents.length; ++i) {
            let h = slideEvents[i];
            if (h['$cb$'] == cb && h['$target$'] == target) {
                slideEvents.splice(i, 1);
                btn.slideEvents = slideEvents;
                break;
            }
        }
    }

    //子类的所有操作，需要在这个函数之后。
    protected onCreated() { }
    //销毁
    protected onDispose() { }
}