/* here in this i am not getting the predefined filings like in ellipse9( height, width and many things) maybe due to cdn problem or any extension problem */

//let shahrukh_img;
let capture ;

function setup(){
    createCanvas(800,500);
  //  shahrukh_img = loadImage('images/shahrukh.jpeg')
    capture = createCapture(VIDEO);
    capture.hide();
}

/*function getRandomArbitary(min,max){
    return Math.random() * (max - min) + min;
}*/

function draw() {
    /*basic functionalities*/
   /* background(200)*/
    //1. point
   // Point(200,200);
   //2.line
//line(200,200,300,300);
 //3.triangle
// triangle(100,200,300,400,150,450);
// 4. rectangle
//rect(500,200,200,100);
// 5. circle
//ellipse(500,300,100,100);


// stroke and color
 /*fill(132,100,52) ( to fill color)
stroke(255,0,0,255);
strokeWeight(2);
ellipse(100,200,100,100);
stroke(0,255,0);
ellipse(250,200,100,100);
ellipse(400,200,100,100);
stroke(0,0,255);
ellipse(550,200,100,100);
ellipse(700,200,100,100);*/

//Fill(200);

/*circle drawing 
r=getRandomArbitary(0,255);
g=getRandomArbitary(0,255);
b=getRandomArbitary(0,255);
fill(r,g,b);
ellipse(mouseX, mouseY,50,50);

*/

/*shahrukh image at screen like circle
image(shahrukh_img,mouseX,mouseY,100,100);*/

// images and videos (webCam):
image(capture, 0, 0, 800, 600);



}