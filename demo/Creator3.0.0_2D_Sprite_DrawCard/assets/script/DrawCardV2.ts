
import { _decorator, Component, Node, dynamicAtlasManager,
    Material, Sprite, UITransform, Vec2, EventTouch, Vec3, Label
} from 'cc';
const { ccclass, property } = _decorator;

const TouchType = {
    InSide : 1,
    InEdge : 2,
    OutSide : 3,
}

@ccclass('DrawCardV2')
export class DrawCardV2 extends Component {

    _backMaterialNode !: Node;
    _frontMaterialNode !: Node;
    _backMaterial !: Material;
    _frontMaterial !: Material;
    _touchLayer !: Node;
    _angleLabel !: Label;

    touchFirstPos : any; // 咪牌的第一个坐标点
    rotateFirstPos : any; //旋转牌第一个坐标点
    pukeDisRatio = 0.1; //扑克边缘的大小比例(意思就是获取图片的宽度或高度的1/10为边缘大小)
    backAngle : number = 0;

    start () {
        dynamicAtlasManager.enabled = false;

        this.initData();

        this._backMaterialNode = this.node.getChildByName("cardBg")!;
        this._frontMaterialNode = this._backMaterialNode.getChildByName("cardNum")!;
        this._backMaterial = this._backMaterialNode.getComponent(Sprite)!.getMaterial(0)!;
        this._frontMaterial = this._frontMaterialNode.getComponent(Sprite)!.getMaterial(0)!;
        this._angleLabel = this.node.getChildByName('angleLabel')!.getComponent(Label)!;
        this._touchLayer = this.node.getChildByName("touchLayer")!;

        //设置设置阴影部分的最大距离,取图片宽度的10分一座位距离
        let shadowDis = this._backMaterialNode.getComponent(UITransform)!.contentSize.width * this._backMaterialNode.getScale().x * 0.1;
        this._frontMaterial.setProperty('shadowDis', shadowDis);

        var self = this;
        // 注册监听
        var touchBegan = function (evt : EventTouch) {
            let pos = evt.getUILocation();
            let touchTp = self.getTouchTypeByNode(pos, self._backMaterialNode);
            //如果是边缘范围,把当前点击的坐标赋值给this.touchFirstPos
            if (touchTp == TouchType.InSide) { //如果是点击内部区域
                self.rotateFirstPos = pos;
                self.backAngle = self._backMaterialNode.angle;
            } else if (touchTp == TouchType.InEdge) { //点击边缘区域
                self.touchFirstPos = pos;
            }
        }
        var touchMove = function (evt : EventTouch) {
            let pos = evt.getUILocation();
            //只有在第一点存在的情况下，也就是已经触摸过牌的边缘的情况下才处理搓牌动画
            if (self.touchFirstPos) {
                self.runActionCard(self.touchFirstPos, pos);
            } else if (self.rotateFirstPos) {
                self.runRatationAction(self.rotateFirstPos, pos);
            } else {
                let touchTp = self.getTouchTypeByNode(pos, self._backMaterialNode);
                //如果是边缘范围,把当前点击的坐标赋值给this.touchFirstPos
                if (touchTp == TouchType.InEdge) {
                    self.touchFirstPos = pos;
                }
            }
        }
        var touchEnded = function(evt : EventTouch){
            self.touchFirstPos = null;
            self.rotateFirstPos = null;
            self.resetPos();
        }
        var touchCancel = function(evt : EventTouch){
            self.touchFirstPos = null;
            self.rotateFirstPos = null;
            self.resetPos();
        }
        this._touchLayer.on(Node.EventType.TOUCH_START, touchBegan, this);
        this._touchLayer.on(Node.EventType.TOUCH_MOVE, touchMove, this);
        this._touchLayer.on(Node.EventType.TOUCH_END, touchEnded, this);
        this._touchLayer.on(Node.EventType.TOUCH_CANCEL, touchCancel, this);
    }

    /**
     * 获取旋转后的坐标点
     * @param originPos 原点坐标(可以看成图片坐标)
     * @param tagerPos 需要转换的坐标点
     * @param angle 旋转角度
     */
    getRotatePos (originPos: any, tagerPos: any, angle: number) {
        let val = angle / (180 / Math.PI); //这里要把角度转弧度,代码Math.sin等三角函数的参数都是弧度;
        let disPos = new Vec2(tagerPos.x-originPos.x, tagerPos.y-originPos.y);
        let rPos = new Vec2();
        rPos.x = disPos.x * Math.cos(val) - disPos.y * Math.sin(val);
        rPos.y = disPos.x * Math.sin(val) + disPos.y * Math.cos(val);
        rPos.x = rPos.x + originPos.x;
        rPos.y = rPos.y + originPos.y;
        return rPos
    }

    /**
     * 判断一个点是否在多边形内
     * @param posCount 多边形的顶点数量
     * @param xlist 顶点的x坐标列表
     * @param ylist 顶点的y坐标列表
     * @param pos 需要判断的点坐标
     */
    isInside (posCount: number,xlist: number[], ylist: number[], pos: any) {
        let rbool = false;
        let j = posCount - 1;
        for (let i = 0 ; i < posCount; j = i++) {
            let ybool = (ylist[i] > pos.y) != (ylist[j] > pos.y);
            let xbool = pos.x < (xlist[j] - xlist[i]) * (pos.y - ylist[i]) / (ylist[j] - ylist[i]) + xlist[i];
            if (ybool && xbool ){
                rbool = !rbool
            }
        }
        return rbool;
    }

    /**
     * 判断一个点是否在扑克的边缘范围内(这里要考虑扑克旋转任意角度)
     * 这个功能其实可以使用cocos的PolygonCollider组件实现多边形点击判断
     * 但是考虑用的扑克大小可能不一样，一个一个点编辑太麻烦了，用代码实现兼容性更好点
     */
    getTouchTypeByNode (pos: any, node: Node){
        // 这里要把扑克的坐标转换成世界坐标，方便判断触摸点是否在扑克内
        let nodePos = node.getComponent(UITransform)!.convertToWorldSpaceAR(new Vec3());
        let anchorX = node.getComponent(UITransform)!.anchorX;
        let anchorY = node.getComponent(UITransform)!.anchorY;
        let angle = node.angle;
        // 图片的宽
        let pWidth = node.getComponent(UITransform)!.contentSize!.width * node.getScale().x;
        // 图片的高
        let pHeight = node.getComponent(UITransform)!.contentSize!.height * node.getScale().y;
        // 获取边缘的宽度
        let disWidth = Math.max(10,pWidth * this.pukeDisRatio);    //最小10像素
        // 获取边缘的高度
        let disHeight = Math.max(10,pHeight * this.pukeDisRatio);  //最小10像素
        // 获取扑克整体的四个顶点坐标(逆时针获取)
        //----左上角
        let left_up = new Vec2(-pWidth * anchorX + nodePos.x, pHeight * (1-anchorY) + nodePos.y);
        //----左下角
        let left_bottom = new Vec2(-pWidth * anchorX + nodePos.x, -pHeight * anchorY + nodePos.y);
        //----右下角
        let right_bottom = new Vec2(pWidth * (1-anchorX) + nodePos.x, -pHeight * anchorY + nodePos.y);
        //----右上角
        let right_up = new Vec2(pWidth * (1-anchorX) + nodePos.x, pHeight * (1-anchorY) + nodePos.y);

        //获取扑克去掉边缘的内部四个顶点坐标(逆时针获取)
        //----内部左上角
        let inside_left_up = new Vec2(left_up.x + disWidth, left_up.y - disHeight);
        //----内部左下角
        let inside_left_bottom = new Vec2(left_bottom.x + disWidth, left_bottom.y + disHeight);
        //----内部右下角
        let inside_right_bottom = new Vec2(right_bottom.x - disWidth, right_bottom.y + disHeight);
        //----内部右上角
        let inside_right_up = new Vec2(right_up.x - disWidth, right_up.y - disHeight);

        //获取旋转后的坐标
        left_up = this.getRotatePos(nodePos, left_up, angle);
        left_bottom = this.getRotatePos(nodePos, left_bottom, angle);
        right_bottom = this.getRotatePos(nodePos, right_bottom, angle);
        right_up = this.getRotatePos(nodePos, right_up, angle);

        inside_left_up = this.getRotatePos(nodePos, inside_left_up, angle);
        inside_left_bottom = this.getRotatePos(nodePos, inside_left_bottom, angle);
        inside_right_bottom = this.getRotatePos(nodePos, inside_right_bottom, angle);
        inside_right_up = this.getRotatePos(nodePos, inside_right_up, angle);

        //外部的x和y坐标列表
        let xlist = [left_up.x, left_bottom.x, right_bottom.x, right_up.x];
        let ylist = [left_up.y, left_bottom.y, right_bottom.y, right_up.y];
        //内部的x和y坐标列表
        let xlistInside = [inside_left_up.x, inside_left_bottom.x, inside_right_bottom.x, inside_right_up.x];
        let ylistInside = [inside_left_up.y, inside_left_bottom.y, inside_right_bottom.y, inside_right_up.y];
        //如果点在扑克范围 并且 不在内部范围 就是边缘范围
        if (this.isInside(4, xlist, ylist, pos) && !this.isInside(4, xlistInside, ylistInside, pos)) {
            return TouchType.InEdge;
        } else if (this.isInside(4,xlistInside,ylistInside,pos)) {
            return TouchType.InSide;
        }
        return TouchType.OutSide;
    }

    initData () {
        this.touchFirstPos = null;
        this.rotateFirstPos = null;
        this.pukeDisRatio = 0.1;
    }

    // 重置坐标
    resetPos () {
        let initPos = new Vec2();
        this._backMaterial.setProperty('firstPos', initPos);
        this._backMaterial.setProperty('secondPos', initPos);
        this._frontMaterial.setProperty('firstPos', initPos);
        this._frontMaterial.setProperty('secondPos', initPos);
    }

    // 传入两个点
    runActionCard (firstPos: Vec2, secondPos: Vec2) {
        this._backMaterial.setProperty('firstPos', firstPos);
        this._backMaterial.setProperty('secondPos', secondPos);
        this._frontMaterial.setProperty('firstPos', firstPos);
        this._frontMaterial.setProperty('secondPos', secondPos);
    }

    // 获取角度
    getAngleByPos (pos1: Vec2, pos2: Vec2) {
        var disX = pos2.x - pos1.x;
        var disY = pos2.y - pos1.y;
        if (disX == 0) {
            if (disY > 0) {
                return 90;
            } else {
                return 180;
            }
        }
        //获取正切值
        var tanValue = Math.atan(disY / disX);
        var rotation = 180 / Math.PI * tanValue;
        return rotation;
    }

    // 设置旋转角度
    runRatationAction (firstPos: Vec2, secondPos: Vec2) {
        let originPos = this._backMaterialNode.getComponent(UITransform)!.convertToWorldSpaceAR(new Vec3());
        let newOriginPos = new Vec2(originPos.x, originPos.y);
        let angle_1 = this.getAngleByPos(newOriginPos, firstPos);
        let angle_2 = this.getAngleByPos(newOriginPos, secondPos);
        this._backMaterialNode.angle = this.backAngle + (angle_2 - angle_1);
        this._angleLabel.string = this._backMaterialNode.angle.toFixed(3);
    }
}

