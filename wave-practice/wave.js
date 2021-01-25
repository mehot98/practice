import{
    Point
} from "./point.js";

export class Wave{
    constructor(){
        this.totalPoint = 5;


    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = this.stageWidth / 2;
        this.centerY = this.stageHeight / 2;
        this.pointGap = this.stageWidth / (this.totalPoint - 1);

        this.init();
    }

    init(){
        this.point = [];

        for(let i = 0; i < this.totalPoint; i++){
            const point = new Point(
                this.pointGap * i,
                this.centerY,
                i,

            )

            this.point[i] = point;
        }
    }

    draw(ctx){
        ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
        
        ctx.beginPath();
        ctx.moveTo(this.point[0].x, this.centerY);

        let prevX = this.point[0].x;
        let prevY = this.point[0].y;
        
        for(let i = 0; i < this.totalPoint;  i++){
            if(i > 0 && i < this.totalPoint - 1){
                this.point[i].update();
                
            }

            const cx = (prevX + this.point[i].x) / 2;
            const cy = (prevY + this.point[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            //ctx.lineTo(cx, cy);

            prevX = this.point[i].x;
            prevY = this.point[i].y;

            // ctx.beginPath();
            // ctx.arc(this.point[i].x, this.point[i].y, 20, 0, Math.PI*2);
            // ctx.fill();
        }
        
        ctx.lineTo(this.stageWidth, this.centerY);
        //ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(0, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }


}