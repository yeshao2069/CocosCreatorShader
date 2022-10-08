### 简介
基于 CocosCreator 3.0.0 版本创建的 动态光影 工程

### 演示
![image](../../gif/202202/2022022432.gif)

### 相关链接
https://forum.cocos.org/t/topic/119090

### 实现思路

创建项目后，新建材质、Effect    

默认创建一个白色底图    
```ts
CCProgram sprite-fs %{
  precision highp float;
  #include <embedded-alpha>
  #include <alpha-test>
  #include <cc-global>

  in vec4 v_color;

  #if USE_TEXTURE
    in vec2 v_uv0;
    #pragma builtin(local)
    layout(set = 2, binding = 10) uniform sampler2D cc_spriteTexture;
  #endif

  float drawLayer(float scale, vec2 uv) {
    return 1.
  }

  vec4 frag() {
		vec4 o = vec4(0.);
    o.xyz += drawLayer(10.,v_uv0);
    o.a = 1.;
    return o;
  }
}%
```
##### 接下来加个随机数，原理可以参考 https://thebookofshaders.com/10/?lan=ch
```ts
float hashOld12(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float drawLayer(float scale, vec2 uv) {
  return 1.
}

vec4 frag() {
  vec4 o = vec4(0.);
  o.xyz = vec3(hashOld12(v_uv0));
  o.a = 1.;
  return o;
}
```

屏幕分格    
```ts
float  drawLayer(float scale,vec2 uv) {
  // 注释设 scale为10的情况
  // 输出值
  float co = 0.;

  // 拷贝一份uv用，不修改原uv
  vec2 uv1 = uv;

  // uv值范围从 0-1变为 0-scale scale值为10就是0-10范围
  uv1 *= scale;

  // floor向下取整，计算出格子所在下标，
  // 10*10的格子，如果uv是 0.2345,0.2345,uv1就是2.345,2.345
  // 取整后 即为该uv所在格子下表，2,2
  // 0.2 <= uv < 0.3 该范围内所有uv坐标，处理后hv均为 2,2
  vec2 hv = floor(uv1);

  // fr是 fract对数字取小数部分， 0.2345,0.2345 -> uv1 2.345,2.345 -> 0.345,0.345    
  // 如 0.2 <= uv < 0.3 处理后就是一个范围 0-1的范围
  vec2 fr = fract(uv1);

  // 用fr.x+fr.y作为输出看一下结果
  co += fr.x + fr.y;
  return co;
}

vec4 frag() {
  vec4 o = vec4(0.);
  o.xyz += drawLayer(10.,v_uv0);
  o.a = 1.;
  return o;
}
```

每个格子内画圆    
```ts
float drawGird(vec2 p) {
  if (p.x > 0. && p.x < 0.01) {
    return 1.;
  }
  if (p.x > 0.99 && p.x < 1.) {
    return 1.;
  }
  if (p.y > 0. && p.y < 0.01) {
    return 1.;
  }
  if (p.y > 0.99 && p.y < 1.) {
    return 1.;
  }
  return 0.;
}

float  drawLayer(float scale,vec2 uv) {
  float co = 0.;
  vec2 uv1 = uv;
  uv1 *= scale;

  vec2 hv = floor(uv1);
  vec2 fr = fract(uv1);

  // 画圆，用fr（即格内坐标）和 0.5,0.5的点的距离作为颜色值,circle范围0-0.5
  float circle = distance(fr,vec2(.5));
  
  // 上面的结果是距离值计算出来的，有明暗变化，用step把圆内都变成纯白色
  float radius = 0.4; // 半径
  circle = step(radius,circle);
  
  // 1. - circle 翻转色值，使距离圆心越近颜色越亮
  circle = 1. - circle;
  
  co += circle;
  co += drawGird(fr);
  return co;
}

vec4 frag() {
  vec4 o = vec4(0.);
  o.xyz += drawLayer(10.,v_uv0);
  o.a = 1.;
  return o;
}
```

圆太规律了，要加点变化 ，来点随机值    
```ts
// 用hv引入随机的半径 因为一格内hv相同，随机值结果也就是半径值相等
float radius = hashOld12(hv);
```
##### 大小差异太大，修改下
```ts
// radius 0-1 映射到 0.1-0.4的范围
radius = radius * 0.3 + 0.1;
```
##### 每个格里都有，太规整了，去掉一半圆
```ts
// 半径*10取整，对2取余，舍弃一半的圆
float f1 = mod(floor(radius * 10.),2.);
radius *= f1;
```
##### 还是太整齐了，对hv.y做个随机值，给该行的uv1.x做个差值
```ts
vec2 hvtemp = floor(uv1);
    
float n = hashOld12(vec2(hvtemp.y));
uv1.x += n;

// floor向下取整，计算出格子所在下标，
// 10*10的格子，如果uv是 0.2345,0.2345,uv1就是2.345,2.345
// 取整后 即为该uv所在格子下表，2,2
// 0.2 <= uv < 0.3 该范围内所有uv坐标，处理后hv均为 2,2
vec2 hv = floor(uv1);

// fr是 fract对数字取小数部分， 0.2345,0.2345 -> uv1 2.345,2.345 -> 0.345,0.345    
// 如 0.2 <= uv < 0.3 处理后就是一个范围 0-1的范围
vec2 fr = fract(uv1);
```

在加个多个随机亮度    
```ts
float radius = hashOld12(hv);
// 亮度 用这个初始随机值做亮度用
float strength = radius;
// ....
circle = 1. - circle;
circle *= strength;
```

从脚本里面传入参数    
```ts
colorLeft: {  value: [1.,1.,1.,1.],editor: { type: "color"}}
colorRight: { value: [1.,1.,1.,1.],editor: { type: "color"}}
color1: { value: [1.,1.,1.,1.],editor: { type: "color"}}
color2: { value: [1.,1.,1.,1.],editor: { type: "color"}}
color3: { value: [1.,1.,1.,1.],editor: { type: "color"}}

vec4 frag() {
  vec2 uv = vec2(v_uv0.x, v_uv0.y);
  vec3 co = vec3(0.);
  vec4 o = vec4(0.);

  // 加个背景色
  co += mix(colorLeft, colorRight, uv.y).xyz;

  vec4 colors[3];
  colors[0] = color1;
  colors[1] = color2;
  colors[2] = color3;

  for (int i = 0; i < 3; i++) {
    float idx = float(i);
    // 用循环下表做一个递增的层半径
    float p1 = idx * 5. + 3.;

    // 给每一层做一个随机运动方向 也就是一个速度向量
    vec2 uvoff = vec2(hashOld12(vec2(p1)), hashOld12(vec2(p1 * 10.0)));
    // 速度*时间 = 偏移距离 让该层随时间运动
    uvoff = uvoff * u_time * .1;
    
    vec2 p2 = vec2(uv.x,uv.y) + uvoff;

    // p1 半径， p2 供计算的uv值
    float layer = drawLayer1(p1, p2);
    
    co += layer * colors[i].xyz;
  }

  o = vec4(co, 1.);
  
  return o;
}
```

每一层都很亮，要做出远暗进亮怎么办？让层亮度和格子大小成正比比例    
```ts
// 让层亮度和格子大小成正比比例 （scale是uv的缩放数，越大 格子就越小）
// * 9 是因为有些暗，变亮点，这个值可以随便调调
strength *= 1. / scale * 9.;
circle *= strength;
```

动态给shader传入参数 u_time    
```ts
start () {
    this._material = this.testSpr.getMaterial(0)!;
}

update (dt: number) {
    this._time += 0.01;

    if (this._material) {
        this._material.setProperty('u_time', this._time);
    }
}
```

圆圈优化    
```ts
//circle = step(radius,circle); 这一行注释掉，用下一行。这时模糊圆圈边缘的函数，0.02*scale就是模糊的宽度，这个系数也可以自己调整到喜欢的数值，
    // 这个系数和strength乘的系数调整个不同的值，组合起来效果也大不一样。
circle = smoothstep(radius - .02 * scale,radius,circle);
```