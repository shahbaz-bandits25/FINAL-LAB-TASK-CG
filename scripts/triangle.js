var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");



function draw_Triangles(ctx, num, pt1, pt2, pt3)
{
    if(num > 0){
        if(num % 2 == 0)
        ctx.fillStyle = "white";
        else
        ctx.fillStyle = "black";
             
        ctx.beginPath();
     
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.lineTo(pt3.x, pt3.y);
         
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1.0;
        ctx.stroke();
     
        var mid_1 = new point( (pt1.x + pt2.x) / 2,
                             (pt1.y + pt2.y) / 2 ); 
        var mid_2 = new point( (pt2.x + pt3.x) / 2,
                             (pt2.y + pt3.y) / 2 );
        var mid_3 = new point( (pt3.x + pt1.x) / 2,
                             (pt3.y + pt1.y) / 2 );
         
    
        draw_Triangles(ctx, num - 1, pt1, mid_1, mid_3);
        draw_Triangles(ctx, num - 1, pt2, mid_2, mid_1);
        draw_Triangles(ctx, num - 1, pt3, mid_3, mid_2);
    }
}
 
var num = 5;
var pt0 = new point(0,400);
var pt1 = new point(200,0);
var pt2  = new point(400,400);
draw_Triangles(ctx, num,pt0,pt1,pt2 ,num)
 