### 简介
基于 CocosCreator 3.0.0 版本创建的 灯光跟随 工程

### 演示
![image](../../gif/202202/2022022412.gif)

### 相关链接
https://github.com/ifengzp/cocos-awesome/tree/master/assets/Scene/Follow_spot

### 实现思路

根据实际效果可以提炼出3个功能点：光圈的形状和大小可控，光圈的边缘虚化，光圈可操控移动。光圈是一个圆，假设圆心在纹理的中间，它的坐标是vec2(0.5,0.5)，我们只需让到圆心的距离大于半径的像素丢弃或者透明度为0
```ts
void main () {
  vec4 color = vec4(1, 1, 1, 1);
  color *= texture(texture, v_uv0);
  color *= v_color;

  color.a = step(length(v_uv0 - vec2(0.5,0.5)), 0.1);
  gl_FragColor = color;
}
```    

其中step 是内置的规整函数 step(a, x) = x >= a? 1 : 0，length是取模。上面的代码段应用在可以在正方形的纹理中可以得出一个正圆，但是如果纹理不是正方形，上面出来的效果会是一个椭圆，因为在shader无论纹理的真实宽高是多少，它的x,y变化范围都是0~1，是比例的变化。如果需要产生一个正圆，还是得通过获取纹理的真实宽高，来计算真实的宽高比例，选择在组件初始化的时候，输入一个wh_ratio比例来获取，圆的真实半径通过勾股定理来计算，没有开方直接通过半径平方的比较来舍去圆外的点
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

onload() {
  this.material.setProperty('wh_ratio', this.bg.width / this.bg.height);
}
```    

这样子就能在一个不同宽高比的纹理中都能够画出一个正圆

这样的圆的边缘是有锯齿的，而且追光需要光圈的边缘虚化，所以我们需要借助另外一个内置插值函数smoothstep(min, max, x)，它能够返回一个在输入值之间平稳变化的插值，以此来达到边缘羽化的效果
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

接下来的让光圈随着动作的移动就很简单了，在touch的时候去更改光圈的圆心位置就行，因为我们的shader中是比例的变化，所以我们传进去的时候也要转化成比例，同时别忘了坐标的转化
```ts
touchEvent(evt: cc.Event.EventTouch) {
  let pos = evt.getLocation();
  this.material.setProperty('center', [pos.x / this.bg.width, (this.bg.height - pos.y) / this.bg.height]);
}
```    

这样子我们就把追光的功能实现了，剩下的就是根据业务的需要，生成追光的路径，这个就是把圆心的位置传进来即可。除了应用到舞台追光的那种场景中，还可以有更多的想象空间，比如在黑暗的博物馆里，在手电筒的灯光照射下，蒙娜丽莎的微笑就更加神秘了....