
import { _decorator, Component, Node, Texture2D, ImageAsset, MeshRenderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TexturePaint')
export class TexturePaint extends Component {
    @property(Texture2D)
    texture: Texture2D = null!;

    @property(MeshRenderer)
    meshRenderer: MeshRenderer = null!;

    context : any;
    canvas: any;
    canvasTex : any;

    onLoad () {

        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 512;
        canvas.style.backgroundColor = "transparent"
        this.canvas = canvas;

        document.body.appendChild(canvas)

        const context = canvas.getContext('2d')!;
        this.context = context;
    }

    start () {
        const image = new Image();
        image.src = this.texture.image?.url!;

        image.onload = () =>{
            this.context.drawImage(image,0,0);
            this.setTextureFromCanvas();
        }
    }

    setTextureFromCanvas(){
        const material = this.meshRenderer.getMaterial(0);
        const texture = new Texture2D();
        texture.image = new ImageAsset(this.canvas);
        material?.setProperty('mainTexture', texture);
    }
}
