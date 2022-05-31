## Cocos Creator Shader

### 简介
基于 CocosCreator 3.0.0 版本创建的 图片消融 工程

### 演示
![image](../../gif/202202/2022022414.gif)

### 相关链接
https://zhuanlan.zhihu.com/p/224815145    
https://github.com/baiyuwubing/cocos-creator-examples/tree/master/2.4.x/assets/demo04

### 实现思路

什么是噪声纹理？噪声纹理的特性是不可预测性的随机。个人理解噪声纹理就是一张图片，每个像素点颜色值（rgba）是按照一定的随机性分布的    

怎么生成噪声纹理？工具生成、代码生成、网上下载（这里用的噪声纹理是网上下载的）、其他    

怎么实现消融？    

根据噪声纹理的颜色值和消融阈值(noiseThreshold)判断，当达到阈值时，丢弃(discard)该片元像素
```ts
vec4 noise = vec4(1, 1, 1, 1);
CCTexture(textureNoise, v_uv0*3.0, noise);
if(noise.r < noiseThreshold){
  discard;
}
```    

加点内描边, 还可以混点颜色，对阈值附近的像素点加一些颜色，就能实现燃烧效果啦
```ts
float t = 1.0 - smoothstep(0.0, colorWidth, noise.r - noiseThreshold);
vec3 burnColor = lerp(burnColorInner.rgb, burnColorOut.rgb, t);
o.rgb = lerp(o.rgb, burnColor.rgb,  t*step(0.0001, noiseThreshold ));
```