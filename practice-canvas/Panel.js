class Panel{
    constructor(){
        this.scale = 0;
        this.angle = 0;
    }

    draw(){
        context.fillStyle = 'rgba(255,255,0,0.7)';
         context.resetTransform(); //변환 초기화
         context.translate(oX, oY);
         context.scale(this.scale, this.scale);
         context.rotate(this.angle * Math.PI/180);
         context.translate(-oX, -oY);
        context.fillRect(oX - 150,oY - 150, 300, 300);
        context.resetTransform();
        
    }

    showContent(){
        context.fillStyle = '#fff';
        context.fillText(selectedBox.index, oX, oY);
        
    }
}