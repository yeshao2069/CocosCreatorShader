### 简介
基于 CocosCreator 3.0.0 版本创建的 人物护盾 工程

### 演示
![image](../../gif/202202/2022022403.gif)

### 相关链接
https://gitee.com/carlosyzy/Creator3D_Shield    
https://forum.cocos.org/t/creator3d-shader/100123

### 实现思路

护罩    

护罩的实现原理，创建sphere 作为护罩的基础模型，自定义材质    

1. 顶点着色器，获取sphere自身坐标系下的坐标;     

2. 片元着色器，拿到sphere自身坐标系下的坐标，通过判断对sphere 底部进行裁剪（采用 透明度为0;     

3. 片元着色器，结合噪声图，实现整体的透明度设置，以及使用uv偏移实现动态的旋转)
```ts
vec4 frag () {
  vec2 uv=v_uv;
  vec4 color=mainColor;
  uv.x-=cc_time.x/5.0;
  uv.y-=cc_time.x/5.0;
  vec4 noiseCol=texture(noiseTexture, uv);
  color.a=noiseCol.r*0.3;
  if(position.y < - 0.35){
    color.a=0.0;
  }

  vec4 col=color * texture(mainTexture, uv);

  col = CC_APPLY_FOG(col, factor_fog);
  return CCFragOutput(col);
}
```    

地盘    

地盘的实现原理，创建plane 作为基础模型，自定义材质    

1. 片元着色器：设置上图为plane的贴图，通过采样后数据的处理将黑色的区域的透明度设置为0    

2. 为了效果更加的完美，同时再给他加一个自身的旋转效果，通过uv来实现旋转的效果
```ts
vec4 frag () {
    vec2 uv=v_uv;
    float speed=0.5;
    uv-=vec2(0.5, 0.5);  
    //旋转矩阵公式  
    uv = vec2(uv.x * cos(speed * cc_time.x) - uv.y * sin(speed * cc_time.x),  uv.x * sin(speed * cc_time.x) + uv.y * cos(speed * cc_time.x));  
    if(abs(uv.x)>0.5 || abs(uv.y)>0.5){
      uv = vec2(0.0, 0.0);  
    }
    //恢复纹理位置  
    uv += vec2(0.5, 0.5);  

    vec4 color=mainColor;
    vec4 col=texture(mainTexture, uv);
    if(col.r>0.3){
      col*=color;
    }else{
      color.a=0.0;
      col*=color;
    }
    col = CC_APPLY_FOG(col, factor_fog);
    return CCFragOutput(col);
}
```    

星星    

星星的实现主要是用粒子系统来，具体的设置参数    

1. 粒子的StartLifetime设置区间值，实现随机感    

2. 粒子的ShapeModule的形状设置为Sphere    

3. 设置SizeOvertimerModule 为从大到小的一个过程