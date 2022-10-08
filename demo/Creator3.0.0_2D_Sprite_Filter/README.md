### 简介
基于 CocosCreator 3.0.0 版本创建的 图片效果合集(老照片、置灰、冰冻、反相、动画) 工程

### 演示
![image](../../image/202202/2022022402.png)

### 相关链接
https://github.com/ifengzp/cocos-awesome/tree/master/assets/Scene/Filter

### 实现思路

先来看一下比较常用的褐色、老照片效果，它的算法是：
> r = r * 0.393 + g * 0.769 + b * 0.189;
> g = r * 0.349 + g * 0.686 + b * 0.168;
> b = r * 0.272 + g * 0.534 + b * 0.131;
```ts
void main () {
  vec4 color = texture(texture, v_uv0);
  float _r = color.r * 0.393 + color.g * 0.769 + color.b * 0.189;
  float _g = color.r * 0.349 + color.g * 0.686 + color.b * 0.168;
  float _b = color.r * 0.272 + color.g * 0.534 + color.b * 0.131;
  color = vec4(_r, _g, _b, color.a);
  gl_FragColor = color;
}
```    

灰度或者去色的核心是让RGB三种色值相等即可得到不同的灰度，根据需求的不同，我们可以通过取三个色值的平均值，三个色值的最大值，最小值，加权平均值等方式来处理。
```ts
void main () {
  vec4 color = texture(texture, v_uv0);
  float gray = (color.r + color.g + color.b)/3.0;
  color = vec4(gray, gray, gray, color.a);
  gl_FragColor = color;
}
```    

反相的算法是让RGB三种颜色分别取255的差值。
```ts
void main () {
  vec4 color = texture(texture, v_uv0);
  float r = (255.0 - color.r * 256.0) / 256.0;
  float g = (255.0 - color.g * 256.0) / 256.0;
  float b = (255.0 - color.b * 256.0) / 256.0;
  color = vec4(r, g, b, color.a);
  gl_FragColor = color;
}
```    

让图像呈现淡蓝色，也可以形象叫做冰冻。
```ts
void main () {
  vec4 color = texture(texture, v_uv0);
  float _r = (255.0 - color.r * 256.0) / 256.0;
  float _g = (255.0 - color.g * 256.0) / 256.0;
  float _b = (255.0 - color.b * 256.0) / 256.0;
  color = vec4(_r, _g, _b, color.a);
  gl_FragColor = color;
}
```    

卡通、连环画滤镜：
> R = |g – b + g + r| * r;
> G = |b – g + b + r| * r;
> B = |b – g + b + r| * g;
```ts
void main () {
  vec4 color = texture(texture, v_uv0);
  float _r = abs(color.g - color.b + color.g + color.r) * color.r;
  float _g = abs(color.b - color.g + color.b + color.r) * color.r;
  float _b = abs(color.b - color.g + color.b + color.r) * color.g;
  color = vec4(_r, _g, _b, color.a);
  gl_FragColor = color;
}
```    

滤镜是用来实现图片的各种特殊效果的，简单的颜色滤镜我们就通过简单的颜色叠加公式可以得出，但是复杂的滤镜效果就可能需要使用更高阶的数学处理甚至叠加多次处理才能得到，我们在图像处理APP里面看到的各种各样的滤镜其实就是人家专门针对某种效果提炼出来的公式，有兴趣的同学用前端的知识也能够打造一个专门的图像处理App