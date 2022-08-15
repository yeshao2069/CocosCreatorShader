## CocosCreatorShader
### Purpose
CocosCreatorShader intends to help users who do not know Shader quickly understand how to use Cocos Effect.
### Version
Cocos Creator v3.5.x


### 2D
| NO1 | Type1 | Proj1 | NO2 | Type2 | Proj2 | NO3 | Type3 | Proj3 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 2D | [图片闪光](#spriteflashlight) | 2 | 2D | [受击闪白](#hitwhite) | 3 | 2D | [UI内发光](#glowinner) |
| 4 | 2D | [高斯模糊](#gaussianblur) | 5 | 2D | [圆形头像](#circleavatar) | 6 | 2D | [图片溶解](#spritedissolve) |
| 7 | 2D | [图片特效合集](#spritefilter) | 8 | 2D | [渐变过渡的相册](#gradualtransitionalalbum) | 9 | 2D | [马赛克](#spritemosaic) |
| 10 | 2D | [镜面光泽](#spritestreamer) | 11 | 2D | [水面波纹](#waterspread) | 12 | 2D | [灯光跟随](#followspot) |
| 13 | 2D | [融球](#metaball) | 14 | 2D | [图片消融](#spriteablation) | 15 | 2D | [2D灯光](#sprite2dlight) |
| 16 | 2D | [摸牌](#drawcard) | 17 | 2D | [按钮流光](#buttonambilight) | 18 | 2D | [彩虹](#spritedrawrainbow) |
| 19 | 2D | [动态光影](#spritedynamiclightandshadow) | 20 | 2D | [图片高亮](#spritehighlight) | 21 | 2D | [大风吹](#windblowingthrough2d) |
| 22 | 2D | [自定义头像](#spriteradiusshader) | 23 | 2D | [加载](#spriteloading) | 24 | 2D | [波浪](#spritewave) |
| 25 | 2D | [曲线波浪](#spritesinewave) | 26 | 2D | [UI内发光2](#glowinnerv2) | 27 | 2D | [加载2](#spriteloadingv2) |
| 28 | 2D | [UI外发光](#glowoutter) | 29 | 2D | [2D火焰描边](#firestroke) | 30 | 2D | [循环隧道](#looptunnel) |
| 31 | 2D | [转场动画](#transition) | 32 | 2D | [满月与星光](#moonstar) | 33 | 2D | [箭头引导线](#arrowguideline) |
| 34 | 2D | [无限滚动背景](#movingbackground) | 35 | 2D | [方形进度加载](#rectdraw) | 36 | 2D | [河面](#river) |
| 37 | 2D | [卡牌透视](#cardperspective) | 38 | 2D | [情人节](#valentineday) | 39 | 2D | [迷人的色彩](#amazingcolor) |
| 40 | 2D | [迷恋](#obsession) | 41 | 2D | [光圈](#lightcircle) | 42 | 2D | [网状光圈](#lightnet) |
| 43 | 2D | [光行](#lightrun) | 44 | 2D | [心跳](#heartbeat) | 45 | 2D | [超级马里奥](#supermario) |
| 46 | 2D | [旋转的圆点](#swirlingdots) | 47 | 2D | [变形花](#deformflower) | 48 | 2D | [星空](#starbackground) |
| 49 | 2D | [草地](#grassy) | 50 | 2D | [空间传送门](#glowcircle) | 51 | 2D | [形状调整](#tweaked) |
| 52 | 2D | [ShaderBook特效](#shaderbook) | 53 | 2D | [下雨](#rain) | 54 | 2D | [蓝天白云](#cloud) |
| 55 | 2D | [微笑](#smile) | 56 | 2D | [Emoji风格微笑](#emojismile) | 57 | 2D | [三叶草](#clover) |
| 58 | 2D | [色环](#colorcircle) | 59 | 2D | [头像边缘流光](#headframe) | 60 | 2D | [文字边缘](#outeredgeoftext) |
| 61 | 2D | [八角形](#octagrams) | 62 | 2D | [分形树](#fractaltrees) | 63 | 2D | [等离子球](#plasmaglobe) |
| 64 | 2D | [星巢](#starnest) | 65 | 2D | [风格化fuji](#cyberfuji) | 66 | 2D | [复古的太阳](#retrosun) |

### 3D
| NO1 | Type1 | Proj1 | NO2 | Type2 | Proj2 | NO3 | Type3 | Proj3 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 3D | [人物护盾](#roleshield) | 2 | 3D | [模型高亮](#rolehighlight) | 3 | 3D | [模型遮挡透视](#occlusionperspective) |
| 4 | 3D | [LowPoly风格水面](#lowpolywater) | 5 | 3D | [噪声水面](#noisewater) | 6 | 3D | [模型内发光](#modelinnerglow) |
| 7 | 3D | [模型描边](#modeloutline) | 8 | 3D | [模型消融](#modeldissolve) | 9 | 3D | [云海](#seaofclouds) |
| 10 | 3D | [模型擦除](#modelerase) | 11 | 3D | [UV动画](#uvanimation) | 12 | 3D | [UV动画混合](#uvanimationblend) |
| 13 | 3D | [UV动画扰动](#uvanimationdistortion) | 14 | 3D | [UV动画移动扰动](#uvanimationmovedistortion) | 15 | 3D | [模型扰动](#modeldistortion) |
| 16 | 3D | [模型特效](#modeleffect) | 17 | 3D | [3D导航线](#guideline) | 18 | 3D | [模型透视](#modelperspective) |

## Examples
### SpriteFlashLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.1 | 2D | [图片流光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_FlashLight)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022402.gif" width="400" height="300" /></div>

### HitWhite
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.2 | 2D | [受击闪白](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_HitWhite)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022404.gif" width="400" height="300" /></div>

### GlowInner
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.3 | 2D | [UI内发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_GlowInner) | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022405.gif" width="400" height="300" /></div>

### GaussianBlur
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.4 | 2D | [高斯模糊](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_GaussianBlur)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022406.gif" width="400" height="300" /></div>

### CircleAvatar
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.5 | 2D | [圆形头像](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.2_2D_Sprite_CircleAvatar)  | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202202/2022022401.png" width="400" height="300" /></div>

### SpriteDissolve
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.6 | 2D | [图片溶解](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.2_2D_Sprite_Dissolve)  | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022407.gif" width="400" height="300" /></div>

### SpriteFilter
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.7 | 2D | [图片特效合集](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.2_2D_Sprite_Filter)  | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202202/2022022402.png" width="400" height="300" /></div>

### GradualTransitionalAlbum
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.8 | 2D | [渐变过渡的相册](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_GradualTransitionalAlbum)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022408.gif" width="400" height="300" /></div>

### SpriteMosaic
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.9 | 2D | [马赛克](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_Mosaic)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022409.gif" width="400" height="300" /></div>

### SpriteStreamer
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.10 | 2D | [镜面光泽](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_Streamer)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022410.gif" width="400" height="300" /></div>

### WaterSpread
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.11 | 2D | [水面波纹](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_WaterSpread)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022411.gif" width="400" height="300" /></div>

### FollowSpot
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.12 | 2D | [灯光跟随](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_FollowSpot)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022412.gif" width="400" height="300" /></div>

### Metaball
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.13 | 2D | [融球](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_Metaball)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022413.gif" width="400" height="300" /></div>

### SpriteAblation
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.14 | 2D | [图片消融](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.2_2D_Sprite_Ablation)  | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022414.gif" width="400" height="300" /></div>

### Sprite2DLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.15 | 2D | [2D灯光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_Light)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022415.gif" width="400" height="300" /></div>

### DrawCard
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.16 | 2D | [摸牌](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_DrawCard)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022422.gif" width="400" height="300" /></div>

### ButtonAmbilight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.17 | 2D | [按钮流光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_ButtonAmbilight)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022431.gif" width="400" height="300" /></div>

### SpriteDrawRainbow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.18 | 2D | [彩虹](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_DrawRainbow)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202202/2022022411.png" width="400" height="300" /></div>

### SpriteDynamicLightAndShadow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.19 | 2D | [动态光影](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_DynamicLightAndShadow)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022432.gif" width="400" height="300" /></div>

### SpriteHighLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.20 | 2D | [图片高亮](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_HighLight)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022501.gif" width="400" height="300" /></div>

### WindBlowingThrough2D
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.21 | 2D | [植物受风摆动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_WindBlowing)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022503.gif" width="400" height="300" /></div>

### SpriteRadiusShader
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.22 | 2D | [自定义头像](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_CustomizedAvatar)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202202/2022022501.jpeg" width="400" height="300" /></div>

### SpriteLoading
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.23 | 2D | [加载](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_Loading)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022401.gif" width="400" height="300" /></div>

### SpriteWave
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.24 | 2D | [波浪](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_Wave)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022504.gif" width="400" height="300" /></div>

### SpriteSineWave
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.25 | 2D | [曲线波浪](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_SineWave)  | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202202/2022022505.gif" width="400" height="300" /></div>

### GlowInnerV2
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.26 | 2D | [UI内发光2](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_GlowInnerv2) | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202204/2022043001.gif" width="400" height="300" /></div>

### SpriteLoadingV2
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.27 | 2D | [加载2](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_LoadingStyle) | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202204/2022043002.gif" width="400" height="300" /></div>

### GlowOutter
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.28 | 2D | [UI外发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.0_2D_Sprite_GlowOutter) | 3.5.0 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202205/2022050101.gif" width="400" height="300" /></div>

### FireStroke
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.29 | 2D | [2D人物火焰描边](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.1_2D_SpriteFireStroke) | 3.5.1 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022060201.gif" width="400" height="300" /></div>

### LoopTunnel
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1.30 | 2D | [循环隧道](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2d/Creator3.5.1_2D_LoopTunnel) | 3.5.1 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022060203.gif" width="400" height="300" /></div>

### RoleShield
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.1 | 3D | [人物护盾](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.0_3D_RoleShield)  | 3.5.0 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202202/2022022403.gif" width="400" height="300" /></div>

### RoleHighLight
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.2 | 3D | [模型高亮](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_ModelHighLight)  | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202202/2022022502.gif" width="400" height="300" /></div>

### OcclusionPerspective
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.3 | 3D | [模型遮挡透视](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.0_3D_ModelOcclusionPerspective)  | 3.5.0 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202203/2022030301.gif" width="400" height="300" /></div>

### LowPolyWater
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.4 | 3D | [LowPoly风格水面](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_LowPolyStyleWater) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202206/2022060202.gif" width="400" height="300" /></div>

### NoiseWater
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.5 | 3D | [噪声水面](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_NoiseWater) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202206/2022061601.gif" width="400" height="300" /></div>

### ModelInnerGlow
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.6 | 3D | [模型内发光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.1_3D_ModelInnerGlow) | 3.5.1 | [返回顶部](#3d) | 需为胶囊体 |
<div align=center><img src="./image/202206/2022062001.png" width="300" height="360" /></div>

### ModelOutline
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.7 | 3D | [模型描边](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.1_3D_ModelOutline) | 3.5.1 | [返回顶部](#3d) | 需为胶囊体 |
<div align=center><img src="./image/202206/2022062002.png" width="300" height="360" /></div>

### ModelDissolve
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.8 | 3D | [模型消融](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_ModelDissolve) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202206/2022062101.gif" width="400" height="300" /></div>

### SeaOfClouds
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.9 | 3D | [云海](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.1_3D_SeaOfClouds) | 3.5.1 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202206/2022062102.gif" width="400" height="300" /></div>

### ModelErase
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.10 | 3D | [模型擦除](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_ModelErase) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022070701.gif" width="400" height="300" /></div>

### UVAnimation
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.11 | 3D | [UV动画](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_uvAnimation) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022072101.gif" width="400" height="300" /></div>

### UVAnimationBlend
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.12 | 3D | [UV动画混合](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_uvAnimationBlend) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022072102.gif" width="400" height="300" /></div>

### UVAnimationDistortion
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.13 | 3D | [UV动画扰动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_uvAnimationDistortion) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022072103.gif" width="400" height="300" /></div>

### UVAnimationMoveDistortion
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.14 | 3D | [UV动画移动扰动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_uvAnimationMoveDistortion) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022072104.gif" width="400" height="300" /></div>

### ModelDistortion
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.15 | 3D | [模型扰动](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_ModelDistortion) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022072105.gif" width="400" height="300" /></div>

### ModelEffect
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.16 | 3D | [模型特效](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_ModelEffect) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022072201.gif" width="400" height="300" /></div>

### GuideLine
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.17 | 3D | [3D导航线](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_GuideLine) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202207/2022072601.gif" width="400" height="300" /></div>

### ModelPerspective
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 2.18 | 3D | [模型透视](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/3d/Creator3.5.2_3D_ModelPerspective) | 3.5.2 | [返回顶部](#3d) | 无 |
<div align=center><img src="./gif/202208/2022080501.gif" width="400" height="300" /></div>

### Transition
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.1 | 2D | [转场动画](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Transition) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022061301.gif" width="400" height="300" /></div>

### MoonStar
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.2 | 2D | [满月与星光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.1_2D_Moon) | 3.5.1 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202206/2022061601.png" width="400" height="300" /></div>

### ArrowGuideLine
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.3 | 2D | [箭头引导线](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.1_2D_ArrowGuideLine) | 3.5.1 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022062001.gif" width="400" height="300" /></div>

### MovingBackground
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.4 | 2D | [无限滚动背景](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_MovingBackground) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022062701.gif" width="400" height="300" /></div>

### RectDraw
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.5 | 2D | [方形进度加载](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_RectDraw) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022063001.gif" width="300" height="300" /></div>

### River
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.6 | 2D | [河面](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_River) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022063002.gif" width="450" height="300" /></div>

### CardPerspective
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.7 | 2D | [卡牌透视](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_CardPerspective) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202206/2022063003.gif" width="400" height="300" /></div>

### ValentineDay
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.8 | 2D | [情人节](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_ValentineDay) | 3.5.2 | [返回顶部](#2d) | mac 12.4 Chrome FPS: 4 |
<div align=center><img src="./image/202207/2022070101.png" width="400" height="300" /></div>

### AmazingColor
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.9 | 2D | [迷人的色彩](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_AmazingColor) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070301.gif" width="400" height="300" /></div>

### Obsession
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.10 | 2D | [迷恋](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Obsession) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202207/2022070401.png" width="400" height="300" /></div>

### LightCircle
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.11 | 2D | [光圈](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_LightCircle) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070401.gif" width="400" height="300" /></div>

### LightNet
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.12 | 2D | [网状光圈](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_LightNet) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070402.gif" width="400" height="300" /></div>

### LightRun
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.13 | 2D | [光行](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_LightRun) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070403.gif" width="400" height="300" /></div>

### HeartBeat
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.14 | 2D | [心跳](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_HeartBeat) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070404.gif" width="400" height="300" /></div>

### SuperMario
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.15 | 2D | [超级马里奥](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_SuperMario) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070405.gif" width="450" height="200" /></div>

### SwirlingDots
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.16 | 2D | [旋转的圆点](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_SwirlingDots) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070406.gif" width="400" height="300" /></div>

### DeformFlower
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.17 | 2D | [变形花](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_DeformFlower) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070407.gif" width="400" height="300" /></div>

### StarBackground
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.18 | 2D | [星空](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_StarBackground) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202207/2022070402.png" width="400" height="300" /></div>

### Grassy
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.19 | 2D | [草地](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Grassy) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070408.gif" width="400" height="300" /></div>

### GlowCircle
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.20 | 2D | [空间传送门](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_GlowCircle) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070409.gif" width="400" height="300" /></div>

### Tweaked
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.21 | 2D | [形状调整](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Tweaked) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022070410.gif" width="400" height="300" /></div>

### ShaderBook
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.22 | 2D | [ShaderBook特效](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_TheBookOfShaders) | 3.5.2 | [返回顶部](#2d) | 包含 26 种基础特效 |
<div align=center><img src="./image/202207/2022070801.png" width="300" height="300" /></div>

### Rain
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.23 | 2D | [下雨](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Rain) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202207/2022071901.png" width="400" height="300" /></div>

### Cloud
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.24 | 2D | [蓝天白云](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Clouds) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022072301.gif" width="400" height="300" /></div>

### Smile
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.25 | 2D | [微笑](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Smile) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202207/2022072301.png" width="400" height="300" /></div>

### EmojiSmile
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.26 | 2D | [Emoji风格微笑](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_EmojiSmile) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./image/202207/2022072302.png" width="300" height="300" /></div>

### Clover
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.27 | 2D | [三叶草](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_Clover) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022072401.gif" width="400" height="300" /></div>

### ColorCircle
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.28 | 2D | [色环](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_ColorCircle) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022072402.gif" width="400" height="300" /></div>

### HeadFrame
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.29 | 2D | [头像边缘流光](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_HeadFrame) | 3.5.2 | [返回顶部](#2d) | 无 |
<div align=center><img src="./gif/202207/2022072501.gif" width="400" height="300" /></div>

### OuterEdgeOfText
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 3.30 | 2D | [文字边缘](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP1/Creator3.5.2_2D_OuterEdgeOfText) | 3.5.2 | [返回顶部](#2d) | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080502.gif" width="400" height="300" /></div>

### Octagrams
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4.1 | 2D | [八角形](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP2/Creator3.5.2_2D_Octagrams) | 3.5.2 | [返回顶部](#2d) | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080801.gif" width="400" height="300" /></div>

### FractalTrees
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4.2 | 2D | [分形树](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP2/Creator3.5.2_2D_FractalTrees) | 3.5.2 | [返回顶部](#2d) | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080802.gif" width="400" height="300" /></div>

### PlasmaGlobe
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4.3 | 2D | [等离子球](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP2/Creator3.5.2_2D_PlasmaGlobe) | 3.5.2 | [返回顶部](#2d) | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080901.gif" width="400" height="300" /></div>

### StarNest
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4.4 | 2D | [星巢](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP2/Creator3.5.2_2D_StarNest) | 3.5.2 | [返回顶部](#2d) | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022080902.gif" width="400" height="300" /></div>

### CyberFuji
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4.5 | 2D | [风格化fuji](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP2/Creator3.5.2_2D_CyberFuji) | 3.5.2 | [返回顶部](#2d) | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022081501.gif" width="400" height="300" /></div>

### RetroSun
| 编号 | 类目 | 项目 | 编辑器版本 | 返回顶部 | 备注 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 4.6 | 2D | [复古的太阳](https://gitee.com/yeshao2069/cocos-creator-shader/tree/v3.5.x/demo/2dP2/Creator3.5.2_2D_RetroSun) | 3.5.2 | [返回顶部](#2d) | 来源：shadertoy.com |
<div align=center><img src="./gif/202208/2022081502.gif" width="400" height="300" /></div>