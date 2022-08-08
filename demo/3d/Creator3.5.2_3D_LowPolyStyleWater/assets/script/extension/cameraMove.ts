import { _decorator, Component, Node ,Vec3,systemEvent,SystemEvent,math,macro} from 'cc';
const { ccclass, property } = _decorator;

cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
@ccclass('cameraMove')
export class cameraMove extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;


    private startShift = false;
    private startW = false;
    private startA = false;
    private startS = false;
    private startD = false;

    private isMouseDown = false;
    private ve = 0;
    
    start () {
        // Your initialization goes here.

         //键盘监听
         systemEvent.on(SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
         systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this);
         
         //鼠标监听
         systemEvent.on(SystemEvent.EventType.MOUSE_DOWN,this.onMouseDown,this);
         systemEvent.on(SystemEvent.EventType.MOUSE_MOVE,this.onMouseMove,this);
         systemEvent.on(SystemEvent.EventType.MOUSE_UP,this.onMouseUp,this);

    }

    onKeyUp(event){
        switch(event.keyCode) {
            case macro.KEY.shift:
                this.startShift = false;
                    break;
                case macro.KEY.w:
                    this.startW = false;
                    break;
                case macro.KEY.a:
                    this.startA = false;
                    break;
                case macro.KEY.s:
                    this.startS = false;
                    break;
                case macro.KEY.d:
                    this.startD = false;
                    break;
        }

        this.ve = 0;
    }

    onKeyDown(event){
        switch(event.keyCode) {
            case macro.KEY.shift:
                this.startShift = true;
                break;
            case macro.KEY.w:
                this.startW = true;
                break;
            case macro.KEY.a:
                this.startA = true;
                break;
            case macro.KEY.s:
                this.startS = true;
                break;
            case macro.KEY.d:
                this.startD = true;
                break;
            case macro.KEY.num1:
                this.node.setPosition(new Vec3(0,14,0));
                this.node.eulerAngles = new Vec3(-90, 0 ,0)
                break;
        }
    }

    // onMouseDown(event) {
    //     if (event.getButton() === 2) {
    //         game.canvas.requestPointerLock();
    //     } 
    //     if (event.getButton() === 0&&Con.PlayerHp>0&&Con.buttonevent==false) {
    //         Con.AniShoot=true;
    //     } 
    // }

    // onMouseUp(event){
    //     if (event.getButton() === 0&&Con.PlayerHp>0) {
    //     Con.AniShoot=false;
    //     }

    //     Con.isanirun=false;
    //     Con.isanijump=false;
    //     Con.isanishoot=false;
    //     Con.isaniidleshoot=false;
    //     Con.isanirunshoot=false;
    //     Con.isanijumpshoot=false;
    // }

    onMouseDown(event){
        this.isMouseDown = true;
    }
    onMouseMove(event){
        if(event.movementX!=0 && this.isMouseDown){
            const up =new Vec3(0,1,0);
            const right = new Vec3(1,0,0);
            const rotationx = this.node.getRotation();
            math.Quat.rotateAround(rotationx, rotationx, up, -event.movementX/5/ 360.0 * 3.1415926535);
            math.Quat.rotateAroundLocal(rotationx, rotationx, right, -event.movementY/2.5/ 360.0 * 3.1415926535);
            this.node.setRotation(rotationx);
        }
    }

    onMouseUp(event){
        this.isMouseDown = false;
    }
    update (deltaTime: number) {

        

        if(this.startW){
            // this.node.setPosition(this.node.position.add(new Vec3(0, deltaTime, 0)))
            this.ve += deltaTime / 2;
            this.node.translate(new Vec3(0, 0, -this.ve));
        }

        if(this.startA){
            // this.node.setPosition(this.node.position.add(new Vec3(-deltaTime, 0, 0)))
            this.ve += deltaTime / 2;

            this.node.translate(new Vec3(-this.ve, 0, 0));

        }

        if(this.startS){
            // this.node.setPosition(this.node.position.add(new Vec3(0, -deltaTime, 0)))
            this.ve += deltaTime / 2;

            this.node.translate(new Vec3(0, 0, this.ve));

        }

        if(this.startD){
            // this.node.setPosition(this.node.position.add(new Vec3(deltaTime, 0, 0)))
            this.ve += deltaTime / 2;

            this.node.translate(new Vec3(this.ve, 0, 0));

        }
       
    }
}
