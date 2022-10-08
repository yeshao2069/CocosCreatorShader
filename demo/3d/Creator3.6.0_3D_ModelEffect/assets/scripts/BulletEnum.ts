import { color } from "cc"

const eleColor = ({
    /* prop：修改的材质属性，可以增加自定义的，color：修改的颜色，dura：持续事件 */
    Normal: {name:"边缘光",prop:"rimLightColor",color:color(255, 122, 0, 160),dura:0.4},
    Fire:  {name:"火焰元素",prop:"rimLightColor",color:color(255, 0, 0, 255),dura:0.35},
    Veno:  {name:"剧毒元素",prop:"rimLightColor",color:color(59, 22, 255, 255),dura:0.3},
    Ice: {name:"寒冰元素",prop:"rimLightColor",color:color(97, 68, 255, 255),dura:0.35},
    Outline: {name:"描边高亮",prop:"baseColor",color:color(255, 255, 0, 255),dura:0.5},
    Gray: {name:"死亡元素",prop:"grayColor",color:color(255, 111, 0, 160),dura:2},
    Red: {name:"发怒红色",prop:"mainColor",color:color(255, 0, 0, 255),dura:0.5},
    WhiteAdd: {name:"闪白叠加",prop:"emissive",color:color(125, 125, 125, 0),dura:0.25},
    BlueAdd: {name:"冰蓝叠加",prop:"emissive",color:color(125, 0, 255, 0),dura:0.35},
    GreenAdd: {name:"原谅叠加",prop:"emissive",color:color(0, 99, 0, 0),dura:0},
})

export {
    eleColor
}







