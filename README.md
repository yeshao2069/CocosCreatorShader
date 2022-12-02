## CocosCreatorShader
### Purpose
CocosCreatorShader intends to help users who do not know Shader quickly understand how to use Cocos Effect.
### Version
Cocos Creator v3.6.x


### 2D
| NO1 | Proj1 | NO2 | Proj2 | NO3 | Proj3 | NO4 | Proj4 |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| 1 | [图片闪光](#flashlight) | 2 | [受击闪白](#hitwhite) | 3 | [UI内发光](#glowinner) | 4 | [高斯模糊](#gaussianblur) |
| 5 | [圆形头像](#circleavatar) | 6 | [图片溶解](#spritedissolve) | 7 | [图片特效合集](#spritefilter) | 8 | [渐变过渡的相册](#gradualtransitionalalbum) |
| 9 | [马赛克](#spritemosaic) | 10 | [镜面光泽](#spritestreamer) | 11 | [水面波纹](#waterspread) | 12 | [灯光跟随](#followspot) |
| 13 | [融球](#metaball) | 14 | [图片消融](#spriteablation) | 15 | [2D灯光](#sprite2dlight) | 16 | [摸牌](#drawcard) |
| 17 | [按钮流光](#buttonambilight) | 18 | [彩虹](#spritedrawrainbow) | 19 | [动态光影](#spritedynamiclightandshadow) | 20 | [图片高亮](#spritehighlight) |
| 21 | [大风吹](#windblowingthrough2d) | 22 | [自定义头像](#spriteradiusshader) | 23 | [加载](#spriteloading) | 24 | [波浪](#spritewave) |
| 25 | [曲线波浪](#spritesinewave) | 26 | [UI内发光2](#glowinnerv2) | 27 | [加载2](#loadingstyle) | 28 | [UI外发光](#glowoutter) |
| 29 | [2D火焰描边](#firestroke) | 30 | [循环隧道](#looptunnel) | 31 | [转场动画](#transition) | 32 | [满月与星光](#moonstar) |
| 33 | [箭头引导线](#arrowguideline) | 34 | [无限滚动背景](#movingbackground) | 35 | [方形进度加载](#rectdraw) | 36 | [河面](#river) |
| 37 | [卡牌透视](#cardperspective) | 38 | [情人节](#valentineday) | 39 | [迷人的色彩](#amazingcolor) | 40 | [迷恋](#obsession) |
| 41 | [光圈](#lightcircle) | 42 | [网状光圈](#lightnet) | 43 | [光行](#lightrun) | 44 | [心跳](#heartbeat) |
| 45 | [超级马里奥](#supermario) | 46 | [旋转的圆点](#swirlingdots) | 47 | [变形花](#deformflower) | 48 | [星空](#starbackground) |
| 49 | [草地](#grassy) | 50 | [空间传送门](#glowcircle) | 51 | [形状调整](#tweaked) | 52 | [ShaderBook特效](#shaderbook) |
| 53 | [下雨](#rain) | 54 | [蓝天白云](#cloud) | 55 | [微笑](#smile) | 56 | [Emoji风格微笑](#emojismile) |
| 57 | [三叶草](#clover) | 58 | [色环](#colorcircle) | 59 | [头像边缘流光](#headframe) | 60 | [文字边缘](#outeredgeoftext) |
| 61 | [八角形](#octagrams) | 62 | [分形树](#fractaltrees) | 63 | [等离子球](#plasmaglobe) | 64 | [星巢](#starnest) |
| 65 | [风格化fuji](#cyberfuji) | 66 | [复古的太阳](#retrosun) | 67 | [流失](#downthedrain) | 68 | [寰宇之内](#universewithin) |
| 69 | [图片渐变](#spritegradient) | 70 | [图片阴影](#spriteshadow) | 71 | [卷轴展开和收拢](#reelunfoldingandclosing) | 72 | [图片边缘发光](#edgehighlight) |
| 73 | [阴间披风](#cloakoftheunderworld) | 74 | [2D雾效](#fog2d) | 75 | [Cocos启动页文字](#labelcocos) | 76 | [果冻Q弹效果](#jelly) |
| 77 | [光射线](#lightrays2d) | 78 | [局部模糊](#blur2d) | 79 | [蓝色大海](#bluesea) | 80 | [光和影](#lightandshadow) |

### 3D
| NO1 | Proj1 | NO2 | Proj2 | NO3 | Proj3 | NO4 | Proj4 |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| 1 | [人物护盾](#roleshield) | 2 | [模型高亮](#rolehighlight) | 3 | [模型遮挡透视](#occlusionperspective) | 4 | [LowPoly风格水面](#lowpolywater) |
| 5 | [噪声水面](#noisewater) | 6 | [模型内发光](#modelinnerglow) | 7 | [模型描边](#modeloutline) | 8 | [模型消融](#modeldissolve) |
| 9 | [云海](#seaofclouds) | 10 | [模型擦除](#modelerase) | 11 | [UV动画](#uvanimation) | 12 | [UV动画混合](#uvanimationblend) |
| 13 | [UV动画扰动](#uvanimationdistortion) | 14 | [UV动画移动扰动](#uvanimationmovedistortion) | 15 | [模型扰动](#modeldistortion) | 16 | [模型特效](#modeleffect) |
| 17 | [3D导航线](#guideline) | 18 | [模型透视](#modelperspective) | 19 | [屏幕后处理特效](#snapshot) | 20 | [模型边缘光](#modelrimlight) |
| 21 | [武器发光](#weaponglow) | 22 | [模型辉光](#modelbloom) | 23 | [雨滴滑落](#raindrop) | 24 | [模型贴花](#graffiti) |
| 25 | [模型拖尾](#rolemotionvertex) | 26 | [后效-SSAO](#ssao) | 27 | [后效-SSR](#ssr) | 28 | [声呐特效](#sonar) |
| 29 | [卡通风格水面渲染](#cartoonwater) | 30 | [高级卡通风格水面渲染](#cartoonwaterhigh) | 31 | [3DUI圆形头像](#circleavatar3d) | 32 | [全息投影](#hologram) |

## Examples
### FlashLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.1 | 2D | [图片流光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_FlashLight)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022402.gif" width="400" height="300" /></div>

### HitWhite
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.2 | 2D | [受击闪白](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_HitWhite)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022404.gif" width="400" height="300" /></div>

### GlowInner
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.3 | 2D | [UI内发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_GlowInner) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022405.gif" width="400" height="300" /></div>

### GaussianBlur
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.4 | 2D | [高斯模糊](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_GaussianBlur)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022406.gif" width="400" height="300" /></div>

### CircleAvatar
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.5 | 2D | [圆形头像](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_CircleAvatar)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202202/2022022401.png" width="400" height="300" /></div>

### SpriteDissolve
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.6 | 2D | [图片溶解](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Dissolve)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022407.gif" width="400" height="300" /></div>

### SpriteFilter
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.7 | 2D | [图片特效合集](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Filter)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202202/2022022402.png" width="400" height="300" /></div>

### GradualTransitionalAlbum
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.8 | 2D | [渐变过渡的相册](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_GradualTransitionalAlbum)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022408.gif" width="400" height="300" /></div>

### SpriteMosaic
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.9 | 2D | [马赛克](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Mosaic)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022409.gif" width="400" height="300" /></div>

### SpriteStreamer
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.10 | 2D | [镜面光泽](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Streamer)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022410.gif" width="400" height="300" /></div>

### WaterSpread
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.11 | 2D | [水面波纹](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_WaterSpread)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022411.gif" width="400" height="300" /></div>

### FollowSpot
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.12 | 2D | [灯光跟随](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_FollowSpot)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022412.gif" width="400" height="300" /></div>

### Metaball
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.13 | 2D | [融球](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Metaball)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022413.gif" width="400" height="300" /></div>

### SpriteAblation
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.14 | 2D | [图片消融](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Ablation)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022414.gif" width="400" height="300" /></div>

### Sprite2DLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.15 | 2D | [2D灯光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Light)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022415.gif" width="400" height="300" /></div>

### DrawCard
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.16 | 2D | [摸牌](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_DrawCard)  | 3.6.0 | [返回顶部](#2d) | 中 | 无 |
<div align=center><img src="./gif/202202/2022022422.gif" width="400" height="300" /></div>

### ButtonAmbilight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.17 | 2D | [按钮流光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_ButtonAmbilight)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022431.gif" width="400" height="300" /></div>

### SpriteDrawRainbow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.18 | 2D | [彩虹](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_DrawRainbow)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202202/2022022411.png" width="400" height="300" /></div>

### SpriteDynamicLightAndShadow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.19 | 2D | [动态光影](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_DynamicLightAndShadow)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022432.gif" width="400" height="300" /></div>

### SpriteHighLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.20 | 2D | [图片高亮](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_HighLight)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022501.gif" width="400" height="300" /></div>

### WindBlowingThrough2D
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.21 | 2D | [植物受风摆动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_WindBlowing)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022503.gif" width="400" height="300" /></div>

### SpriteRadiusShader
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.22 | 2D | [自定义头像](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_CustomizedAvatar)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202202/2022022501.jpeg" width="400" height="300" /></div>

### SpriteLoading
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.23 | 2D | [加载](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Loading)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022401.gif" width="400" height="300" /></div>

### SpriteWave
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.24 | 2D | [波浪](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_Sprite_Wave)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022504.gif" width="400" height="300" /></div>

### SpriteSineWave
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.25 | 2D | [曲线波浪](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_SineWave)  | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022505.gif" width="400" height="300" /></div>

### GlowInnerV2
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.26 | 2D | [UI内发光2](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_GlowInnerv2) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202204/2022043001.gif" width="400" height="300" /></div>

### LoadingStyle
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.27 | 2D | [加载2](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_LoadingStyle) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202204/2022043002.gif" width="400" height="300" /></div>

### GlowOutter
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.28 | 2D | [UI外发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_GlowOutter) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202205/2022050101.gif" width="400" height="300" /></div>

### FireStroke
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.29 | 2D | [2D人物火焰描边](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_FireStroke) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022060201.gif" width="400" height="300" /></div>

### LoopTunnel
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1.30 | 2D | [循环隧道](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2d/Creator3.6.0_2D_LoopTunnel) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022060203.gif" width="400" height="300" /></div>

### RoleShield
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.1 | 3D | [人物护盾](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_RoleShield)  | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022403.gif" width="400" height="300" /></div>

### RoleHighLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.2 | 3D | [模型高亮](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_HighLight)  | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202202/2022022502.gif" width="400" height="300" /></div>

### OcclusionPerspective
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.3 | 3D | [模型遮挡透视](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_OcclusionPerspective)  | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202203/2022030301.gif" width="400" height="300" /></div>

### LowPolyWater
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.4 | 3D | [LowPoly风格水面](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_LowPolyStyleWater) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022060202.gif" width="400" height="300" /></div>

### NoiseWater
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.5 | 3D | [噪声水面](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_NoiseWater) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022061601.gif" width="400" height="300" /></div>

### ModelInnerGlow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.6 | 3D | [模型内发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelInnerGlow) | 3.6.0 | [返回顶部](#3d) | 低 | 需为胶囊体 |
<div align=center><img src="./image/202206/2022062001.png" width="300" height="360" /></div>

### ModelOutline
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.7 | 3D | [模型描边](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelOutline) | 3.6.0 | [返回顶部](#3d) | 低 | 需为胶囊体 |
<div align=center><img src="./image/202206/2022062002.png" width="300" height="360" /></div>

### ModelDissolve
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.8 | 3D | [模型消融](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelDissolve) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022062101.gif" width="400" height="300" /></div>

### SeaOfClouds
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.9 | 3D | [云海](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_SeaOfClouds) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022062102.gif" width="400" height="300" /></div>

### ModelErase
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.10 | 3D | [模型擦除](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelErase) | 3.6.0 | [返回顶部](#3d) | 中 | 无 |
<div align=center><img src="./gif/202207/2022070701.gif" width="400" height="300" /></div>

### UVAnimation
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.11 | 3D | [UV动画](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_uvAnimation) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072101.gif" width="400" height="300" /></div>

### UVAnimationBlend
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.12 | 3D | [UV动画混合](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_uvAnimationBlend) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072102.gif" width="400" height="300" /></div>

### UVAnimationDistortion
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.13 | 3D | [UV动画扰动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_uvAnimationDistortion) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072103.gif" width="400" height="300" /></div>

### UVAnimationMoveDistortion
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.14 | 3D | [UV动画移动扰动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_uvAnimationMoveDistortion) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072104.gif" width="400" height="300" /></div>

### ModelDistortion
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.15 | 3D | [模型扰动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelDistortion) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072105.gif" width="400" height="300" /></div>

### ModelEffect
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.16 | 3D | [模型特效](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelEffect) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072201.gif" width="400" height="300" /></div>

### GuideLine
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.17 | 3D | [3D导航线](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_GuideLine) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072601.gif" width="400" height="300" /></div>

### ModelPerspective
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.18 | 3D | [模型透视](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelPerspective) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202208/2022080501.gif" width="400" height="300" /></div>

### Snapshot
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.19 | 3D | [屏幕后处理特效](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.1_3D_Snapshot) | 3.6.1 | [返回顶部](#3d) | 中 | 无 |
<div align=center><img src="./gif/202210/2022101001.gif" width="400" height="300" /></div>

### ModelRimLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.20 | 3D | [模型边缘光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelRimLight) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202210/2022101002.gif" width="400" height="300" /></div>

### WeaponGlow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.21 | 3D | [武器发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_WeaponGlow) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202210/2022101003.gif" width="400" height="300" /></div>

### ModelBloom
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.22 | 3D | [模型辉光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_ModelBloom) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202210/2022101012.gif" width="400" height="300" /></div>

### RainDrop
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.23 | 3D | [雨滴滑落](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_RainDrop) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202210/2022101004.gif" width="400" height="300" /></div>

### Graffiti
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.24 | 3D | [模型贴花](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_Graffiti) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202210/2022101005.gif" width="400" height="300" /></div>

### RoleMotionVertex
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.25 | 3D | [模型拖尾](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.0_3D_RoleMotionVertex) | 3.6.0 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202210/2022101006.gif" width="400" height="300" /></div>

### SSAO
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.26 | 3D | [后处理效果-SSAO](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.2_3D_DeferredPipeline_SSAO) | 3.6.2 | [返回顶部](#3d) | 中 | 自定义渲染管线 |
<div align=center><img src="./image/202210/2022101701.jpg" width="400" height="300" /></div>

### SSR
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.27 | 3D | [后处理效果-SSR](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.2_3D_DeferredPipeline_SSR) | 3.6.2 | [返回顶部](#3d) | 中 | 自定义渲染管线 |
<div align=center><img src="./gif/202211/2022110801.gif" width="400" height="300" /></div>

### Sonar
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.28 | 3D | [声呐特效](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.2_3D_Sonar) | 3.6.2 | [返回顶部](#3d) | 中 | 无 |
<div align=center><img src="./gif/202211/2022110802.gif" width="400" height="300" /></div>

### CartoonWater
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.29 | 3D | [卡通风格水面渲染](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.2_3D_CartoonWater) | 3.6.2 | [返回顶部](#3d) | 中 | 无 |
<div align=center><img src="./gif/202211/2022110811.gif" width="400" height="300" /><img src="./gif/202211/2022110812.gif" width="400" height="300" /></div>

### CartoonWaterHigh
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 2.30 | 3D | [高级卡通风格水面渲染](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3d/Creator3.6.2_3D_CartoonWaterHigh) | 3.6.2 | [返回顶部](#3d) | 中 | 无 |
<div align=center><img src="./gif/202211/2022110813.gif" width="400" height="300" /></div>

### Transition
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.1 | 2D | [转场动画](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Transition) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022061301.gif" width="400" height="300" /></div>

### MoonStar
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.2 | 2D | [满月与星光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Moon) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202206/2022061601.png" width="400" height="300" /></div>

### ArrowGuideLine
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.3 | 2D | [箭头引导线](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_ArrowGuideLine) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022062001.gif" width="400" height="300" /></div>

### MovingBackground
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.4 | 2D | [无限滚动背景](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_MovingBackground) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022062701.gif" width="400" height="300" /></div>

### RectDraw
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.5 | 2D | [方形进度加载](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_RectDraw) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022063001.gif" width="300" height="300" /></div>

### River
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.6 | 2D | [河面](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_River) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022063002.gif" width="450" height="300" /></div>

### CardPerspective
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.7 | 2D | [卡牌透视](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_CardPerspective) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202206/2022063003.gif" width="400" height="300" /></div>

### ValentineDay
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.8 | 2D | [情人节](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_ValentineDay) | 3.6.0 | [返回顶部](#2d) | 高 | mac 12.4 Chrome FPS: 4 |
<div align=center><img src="./image/202207/2022070101.png" width="400" height="300" /></div>

### AmazingColor
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.9 | 2D | [迷人的色彩](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_AmazingColor) | 3.6.0 | [返回顶部](#2d) | 中 | 无 |
<div align=center><img src="./gif/202207/2022070301.gif" width="400" height="300" /></div>

### Obsession
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.10 | 2D | [迷恋](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Obsession) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202207/2022070401.png" width="400" height="300" /></div>

### LightCircle
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.11 | 2D | [光圈](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_LightCircle) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022070401.gif" width="400" height="300" /></div>

### LightNet
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.12 | 2D | [网状光圈](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_LightNet) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022070402.gif" width="400" height="300" /></div>

### LightRun
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.13 | 2D | [光行](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_LightRun) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022070403.gif" width="400" height="300" /></div>

### HeartBeat
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.14 | 2D | [心跳](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_HeartBeat) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022070404.gif" width="400" height="300" /></div>

### SuperMario
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.15 | 2D | [超级马里奥](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_SuperMario) | 3.6.0 | [返回顶部](#2d) | 高 | 无 |
<div align=center><img src="./gif/202207/2022070405.gif" width="450" height="200" /></div>

### SwirlingDots
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.16 | 2D | [旋转的圆点](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_SwirlingDots) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022070406.gif" width="400" height="300" /></div>

### DeformFlower
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.17 | 2D | [变形花](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_DeformFlower) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022070407.gif" width="400" height="300" /></div>

### StarBackground
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.18 | 2D | [星空](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_StarBackground) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202207/2022070402.png" width="400" height="300" /></div>

### Grassy
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.19 | 2D | [草地](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Grassy) | 3.6.0 | [返回顶部](#2d) | 中 | 无 |
<div align=center><img src="./gif/202207/2022070408.gif" width="400" height="300" /></div>

### GlowCircle
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.20 | 2D | [空间传送门](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_GlowCircle) | 3.6.0 | [返回顶部](#2d) | 中 | 无 |
<div align=center><img src="./gif/202207/2022070409.gif" width="400" height="300" /></div>

### Tweaked
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.21 | 2D | [形状调整](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Tweaked) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022070410.gif" width="400" height="300" /></div>

### ShaderBook
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.22 | 2D | [ShaderBook特效](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_TheBookOfShaders) | 3.6.0 | [返回顶部](#2d) | 低 | 包含 26 种基础特效 |
<div align=center><img src="./image/202207/2022070801.png" width="300" height="300" /></div>

### Rain
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.23 | 2D | [下雨](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Rain) | 3.6.0 | [返回顶部](#2d) | 中 | 无 |
<div align=center><img src="./image/202207/2022071901.png" width="400" height="300" /></div>

### Cloud
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.24 | 2D | [蓝天白云](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Clouds) | 3.6.0 | [返回顶部](#2d) | 中 | 无 |
<div align=center><img src="./gif/202207/2022072301.gif" width="400" height="300" /></div>

### Smile
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.25 | 2D | [微笑](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Smile) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202207/2022072301.png" width="400" height="300" /></div>

### EmojiSmile
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.26 | 2D | [Emoji风格微笑](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_EmojiSmile) | 3.6.0 | [返回顶部](#2d) | 中 | 无 |
<div align=center><img src="./image/202207/2022072302.png" width="300" height="300" /></div>

### Clover
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.27 | 2D | [三叶草](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_Clover) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072401.gif" width="400" height="300" /></div>

### ColorCircle
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.28 | 2D | [色环](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_ColorCircle) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072402.gif" width="400" height="300" /></div>

### HeadFrame
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.29 | 2D | [头像边缘流光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_HeadFrame) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202207/2022072501.gif" width="400" height="300" /></div>

### OuterEdgeOfText
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 3.30 | 2D | [文字边缘](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP1/Creator3.6.0_2D_OuterEdgeOfText) | 3.6.0 | [返回顶部](#2d) | 高 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080502.gif" width="400" height="300" /></div>

### Octagrams
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.1 | 2D | [八角形](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_Octagrams) | 3.6.0 | [返回顶部](#2d) | 低 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080801.gif" width="400" height="300" /></div>

### FractalTrees
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.2 | 2D | [分形树](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_FractalTrees) | 3.6.0 | [返回顶部](#2d) | 高 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080802.gif" width="400" height="300" /></div>

### PlasmaGlobe
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.3 | 2D | [等离子球](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_PlasmaGlobe) | 3.6.0 | [返回顶部](#2d) | 高 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080901.gif" width="400" height="300" /></div>

### StarNest
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.4 | 2D | [星巢](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_StarNest) | 3.6.0 | [返回顶部](#2d) | 低 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080902.gif" width="400" height="300" /></div>

### CyberFuji
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.5 | 2D | [风格化fuji](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_CyberFuji) | 3.6.0 | [返回顶部](#2d) | 中 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022081501.gif" width="400" height="300" /></div>

### RetroSun
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.6 | 2D | [复古的太阳](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_RetroSun) | 3.6.0 | [返回顶部](#2d) | 低 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022081502.gif" width="400" height="300" /></div>

### DownTheDrain
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.7 | 2D | [流失](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_DownTheDrain) | 3.6.0 | [返回顶部](#2d) | 低 | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022081601.gif" width="400" height="300" /></div>

### UniverseWithin
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.8 | 2D | [寰宇之内](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_TheUniverseWithin) | 3.6.0 | [返回顶部](#2d) | 低 | 来源：shadertoy.com |
<div align=center><img src="./gif/202209/2022091301.gif" width="400" height="300" /></div>

### SpriteGradient
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.9 | 2D | [图片渐变](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_SpriteGradient) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202209/2022091901.gif" width="400" height="300" /></div>

### SpriteShadow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.10 | 2D | [图片阴影](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_SpriteShadow) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202209/2022091901.jpg" width="300" height="300" /></div>

### ReelUnfoldingAndClosing
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.11 | 2D | [卷轴展开和收拢](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_ReelUnfoldingAndClosing) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202209/2022092201.gif" width="400" height="300" /></div>

### EdgeHighLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.12 | 2D | [图片边缘发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_EdgeHighLight) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./image/202209/2022092301.jpg" width="300" height="400" /></div>

### CloakOfTheUnderworld
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.13 | 2D | [阴间披风](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.0_2D_CloakOfTheUnderworld) | 3.6.0 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202209/2022092301.gif" width="400" height="300" /></div>

### Fog2D
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.14 | 2D | [*2D雾效](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.2_2D_Fog) | 3.6.2 | [返回顶部](#2d) | 低 | 在 macOS Chrome 有渲染问题，Windows 正常 |
<div align=center><img src="./gif/202211/2022110803.gif" width="400" height="300" /></div>

### LabelCocos
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.15 | 2D | [Cocos启动页](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.2_2D_Label_Cocos) | 3.6.2 | [返回顶部](#2d) | 中 | 来源：shadertoy.com |
<div align=center><img src="./image/202211/2022110801.jpeg" width="400" height="300" /></div>

### Jelly
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.16 | 2D | [果冻Q弹效果](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.2_2D_Jelly) | 3.6.2 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202211/2022111301.gif" width="400" height="300" /></div>

### LightRays2D
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.17 | 2D | [光射线](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.2_2D_LightRays2D) | 3.6.2 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202211/2022111601.gif" width="400" height="300" /></div>

### Blur2D
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.18 | 2D | [局部模糊](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.2_2D_Blur) | 3.6.2 | [返回顶部](#2d) | 低 | 无 |
<div align=center><img src="./gif/202212/2022120201.gif" width="400" height="300" /></div>

### BlueSea
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.19 | 2D | [蓝色大海](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.2_2D_BlueSea) | 3.6.2 | [返回顶部](#2d) | 低 | 来源：shadertoy.com |
<div align=center><img src="./gif/202212/2022120202.gif" width="400" height="300" /></div>

### LightAndShadow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 4.20 | 2D | [光和影](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/2dP2/Creator3.6.2_2D_LightAndShadow) | 3.6.2 | [返回顶部](#2d) | 中 | 来源：shadertoy.com |
<div align=center><img src="./gif/202212/2022120203.gif" width="400" height="300" /></div>

### CircleAvatar3D
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 5.1 | 3D | [3DUI圆形头像](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3dP1/Creator3.6.2_3D_CircleAvatar) | 3.6.2 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./image/202211/2022111401.png" width="400" height="300" /></div>

### Hologram
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 模式 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 5.2 | 3D | [全息投影](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.6.x/demo/3dP1/Creator3.6.2_3D_Hologram) | 3.6.2 | [返回顶部](#3d) | 低 | 无 |
<div align=center><img src="./gif/202211/2022112301.gif" width="400" height="300" /></div>