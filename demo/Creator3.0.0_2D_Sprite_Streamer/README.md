## Cocos Creator Shader

### 简介
基于 CocosCreator 3.0.0 版本创建的 镜面光泽 工程

### 演示
![image](../../gif/202202/2022022410.gif)

### 相关链接
https://github.com/ifengzp/cocos-awesome/tree/master/assets/Scene/Specular_gloss

### 实现思路

根据这个效果的实际需求，可以提取到两个关键点，一个是光路的生成，一个是光路随着时间进行偏移。直观可以看出光路由两根斜率一样的直线组成，其中一根在x轴上偏移一定的距离，两根斜线就能够组成一个倾斜的区域，这个区域用数学来表达就是：两根斜线形成的不等式组。直线的斜截式方程是 `y = kx + b` ，假设斜率k为1，那光路的区域就可以表示为：`x >= -y` 和 `x <= -y + width` ，其中 `width` 就是我们定义的光路的宽度，有了区域之后我们只需要让符合该区域的像素点色彩叠加点变化就可以实现光路的效果
```ts
void main () {
  vec4 color = vec4(1, 1, 1, 1);
  color *= texture(texture, v_uv0);

  if (v_uv0.x >= -v_uv0.y && v_uv0.x <= -v_uv0.y + width) {
    color *= strength;
  }

  gl_FragColor = color;
}
```    

光路随着时间的偏移效果，其实就是让光路的斜距随着时间的变化增加就可以了。这里可以通过脚本的方式在每帧的回调中把偏移的距离动态传进来，但是这种传递其实挺耗性能的，还有一种方式就是我们可以引入 `cc-global` ，然后通过 `cc_time.x` 拿到累积的时间参数，然后加上我们的偏移限制来实现光路的循环播放。其中我们光路的起点应该是 `0.0 - width` ，光路的偏移长度应该是 `width + 1.0 + width`。
```ts
#include <cc-global>
void main () {
  vec4 color = vec4(1, 1, 1, 1);
  color *= texture(texture, v_uv0);

  float time_step = -width;
  time_step += mod(cc_time.x, 1.0 + 2.0 * width);

  if (v_uv0.x >= -v_uv0.y + time_step && v_uv0.x <= -v_uv0.y + width + time_step) {
    color *= strength;
  }

  gl_FragColor = color;
}
```    

为了让效果呈现更加完美，我们还可以去调整一下光路的斜率，如果需要多条光路的话，也可以多复制几个不等式组加上不同的偏移距离和宽度就可以了。另外引擎是默认启用了动态合图，它会自动将合适的贴图动态合并到一张大图上来减少drawcall，这样子就会导致我们在effect中拿到的uv坐标不准确，我们可以通过 `cc.dynamicAtlasManager.enabled = false` 把合图给关掉，但是这是个全局开关，所以更好的方法是在资源管理面板中把该资源的 `packable` 勾选掉，这样子它就不会被打包到合图中了