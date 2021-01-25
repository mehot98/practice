export class Block{
    constructor(canvas, width, height, stageWidth, stageHeight){
        this.width= width;
        this.height = height;
        this.x = stageWidth * 0.5 - this.width * 0.5;
        this.y = stageHeight - 100;

        canvas.addEventListener('mousemove', e => {
            this.x = e.layerX- (this.width*0.5);
            this.maxX = this.x + this.width;
        })

        this.maxX = this.x + this.width;
        this.maxY = this.y + this.height;
    }

    draw(ctx){
        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}