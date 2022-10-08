### 简介
基于 CocosCreator 3.0.0 版本创建的 融球 工程

### 演示
![image](../../gif/202202/2022022413.gif)

### 相关链接
https://github.com/ifengzp/cocos-awesome/tree/master/assets/Scene/Metaball

### 实现思路

Metaballs在数学上是一个求等势面的公式，两个球体之间的等势面为 `E = R² / (△x² + △y²)`，
```ts
float energy(float r, vec2 point1, vec2 point2) {
  return (r * r) / ((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y));
}
```    

demo的实现很简单，固定的圆处于中心的位置，加大一下半径，求出它的等势面`energy(u_radius + 0.1, v_uv0.xy, vec2(0.5))`，然后我们在手指的落足点再生成一个等势面`energy(u_radius, v_uv0.xy, u_point)`，然后叠加它们，让处于等势面上的点的色值透明度为1，不在该等势面上的透明度为0就可以达到视觉中的球体融合效果
```ts
void main(){
  vec4 color = texture(texture, v_uv0);

  float fragEnergy = energy(u_radius + 0.1, v_uv0.xy, vec2(0.5)) + energy(u_radius, v_uv0.xy, u_point);
  color.a = smoothstep(0.95, 1.0, fragEnergy);
  gl_FragColor = color;
}
```