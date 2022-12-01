function setup() {
    createCanvas(400, 400);
   background("white");
 }
 
 function draw() {
  
   if(mouseX>200)
     {
       fill("#CCD66C")
     }
   else{
     fill("#FFEB3B")
   }
   rect(mouseX,mouseY,50,50)
 }