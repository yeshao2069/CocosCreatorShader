## Cocos Creator Shader

# 简介
基于 CocosCreator 3.5.0 版本创建的 **波浪** 工程。

### 效果预览
![image](../../../gif/202202/2022022504.gif)

### Mark
Sprite 的 TIELD 模式，从 3.4.1 版本开始，对顶点数量做了限制。大概 3600+ 个顶点数，超过后，会提示 "vb of null" 的提示。修改方式是，将图片的尺寸放大。(尺寸需要使用 2 次幂)