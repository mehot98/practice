import{
    Ball
  } from './ball_ball-bounce.js';

  import{
    Block
  } from './block_ball-bounce.js';

class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.i = 0;

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();


        this.ball = new Ball(this.stageWidth, this.stageHeight, 50, 20);
        this.block = new Block(this.canvas, 200, 30, this.stageWidth, this.stageHeight);

        window.requestAnimationFrame(this.animate.bind(this));

        
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
        
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));
        //console.log(this.i);
       
        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.block.draw(this.ctx);

        //  this.canvas.addEventListener('click', e => {
        //   console.log("dd");
        //   this.block.draw(this.ctx, e.layerX, e.layerY);
        // })
      }


      
}

window.onload = () =>{
    new App();
  }

  

