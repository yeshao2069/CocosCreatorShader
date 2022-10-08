### 简介
基于 CocosCreator 3.0.0 版本创建的 圆形头像 工程

### 演示
![image](../../image/202202/2022022401.png)

### 相关链接
https://github.com/ifengzp/cocos-awesome/tree/master/assets/Scene/Circle_avatar

### 实现思路

可以使用一张圆的图片，然后配合mask的反向遮罩来实现，但是这种实现的效果会有锯齿，所以一般会写一个shader。异名上篇文章中追光效果中那个shader刚好直接就可以使用了，这系列的定位是常用功能集锦，圆形头像又是高频应用，因此异名就再单独拿出来再水一篇，方面后面查看使用    

光圈是一个圆，假设圆心在纹理的中间，它的坐标是vec2(0.5,0.5)，我们只需让到圆心的距离大于半径的像素丢弃或者透明度为0
```ts
void main () {
  vec4 color = vec4(1, 1, 1, 1);
  color *= texture(texture, v_uv0);
  color *= v_color;

  color.a = step(length(v_uv0 - vec2(0.5,0.5)), 0.1);
  gl_FragColor = color;
}
```    

其中step 是内置的规整函数 step(a, x) = x >= a? 1 : 0，length是取模。上面的代码段应用在可以在正方形的纹理中可以得出一个正圆，但是如果纹理不是正方形，上面出来的效果会是一个椭圆，因为在shader无论纹理的真实宽高是多少，它的x,y变化范围都是0~1，是比例的变化。如果需要产生一个正圆，还是得通过获取纹理的真实宽高，来计算真实的宽高比例，在组件初始化的时候，输入一个wh_ratio比例来获取，圆的真实半径通过勾股定理来计算，直接通过半径平方的比较来舍去圆外的点
```ts
void main () {
  vec4 o = vec4(1, 1, 1, 1);
  o *= texture(texture, v_uv0);
  o *= v_color;

  float circle = radius * radius;
  float rx = center.x * wh_ratio;
  float ry = center.y;
  float dis = (v_uv0.x * wh_ratio - rx) * (v_uv0.x * wh_ratio - rx) + (v_uv0.y  - ry) * (v_uv0.y - ry);

  o.a = step(dis, 0.1);
  gl_FragColor = o;
}
```    

这样子就能在一个不同宽高比的纹理中都能够画出一个正圆。但是这样的圆的边缘是有锯齿的，所以我们需要借助另外一个内置插值函数smoothstep(min, max, x)，它能够返回一个在输入值之间平稳变化的插值，以此来达到边缘羽化的效果
```ts
void main () {
  vec4 o = vec4(1, 1, 1, 1);
  o *= texture(texture, v_uv0);
  o *= v_color;

  float circle = radius * radius;
  float rx = center.x * wh_ratio;
  float ry = center.y;
  float dis = (v_uv0.x * wh_ratio - rx) * (v_uv0.x * wh_ratio - rx) + (v_uv0.y  - ry) * (v_uv0.y - ry);

  o.a = smoothstep(circle, circle - blur, dis);
  gl_FragColor = o;
}
```