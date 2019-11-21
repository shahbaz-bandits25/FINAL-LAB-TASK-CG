class Point
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
drawPixel() 
    {
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,1,1);
        ctx.closePath();
        
    }
}