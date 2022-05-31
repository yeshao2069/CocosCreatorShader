## Cocos Creator Shader

### 简介
基于 CocosCreator 3.0.0 版本创建的 2D 灯光 工程

### 演示
![image](../../gif/202202/2022022415.gif)

### 相关链接
https://mp.weixin.qq.com/s/RtARzTb9KahZ70Ct5r8GRw    
https://github.com/baiyuwubing/cocos-creator-examples/tree/master/2.4.x/assets/

### 实现思路

本文介绍最基础的光照模型(冯氏光照模型(Phong Lighting Model))，是一种光照的简化模型。请务必记住以下几个英文单词，对学习研究非常有帮助    

环境(Ambient)、漫反射(Diffuse)、镜面高光(Specular)    

向量（加法/点乘/叉乘）    

着色器（顶点着色器/片元着色器）    

计算机图形学第一定律：如果它看起是对的，那么它就是对的    

影响一个物体的外观颜色一般有以下几个因素：    

物体表面的特质，即材质属性。（这次实现忽略材质，默认统一材质）    

表面的方位与朝向，朝向常用单位法向量表示。（这次在2d中默认使用朝向屏幕(0,0,1)作为所有法向量）    

照射光的各光源性质。（这次简化为只有光源位置）    

观察者位置。（这次使用相机的位置）