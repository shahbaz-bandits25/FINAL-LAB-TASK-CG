
let cv = document.getElementById("canvas");
let ctx = cv.getContext('2d');
var points = [];
var j = 0;
var rand_points;

myInit();

function myInit(){           

    cv.addEventListener('click',function(evt){
       var mouse_pos = getMousePos(cv, evt);
        
        if(points.length < 3)
              points.push(new Point(mouse_pos.x,mouse_pos.y));
            //points.push(new Point(canvas,300) , new Point(150,0) , new Point(300,300)); // vertices (input points)
        
        if(points.length == 3)
         { 
        rand_points = points[Math.round(Math.random()*2)];
            //for(var i = 0; i < 15000; i++)
            timer = setInterval(call_2 , 1);

           // points = [];
        }
    }, true);
}
function getMousePos(canvas, event){
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}


function call_2()
{
                var Triangle_Points = points[Math.round(Math.random()*2)]; 
                    // console.log(P);
                // console.log(T);
                var mid_point = new Point((rand_points.x+Triangle_Points.x)/2, (rand_points.y+Triangle_Points.y)/2); // mid_point = Mid Point
                mid_point.drawPixel();
                rand_points = mid_point; 
                j++;
       if(j==15000)
       {
           clearInterval(timer);
       }
   
}