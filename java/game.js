let sliderG, sliderR, sliderB, sliderRad, sliderS
function setup() {
  colorMode(RGB);
  createCanvas(500, 400);
  
  sliderR = createSlider(0, 255, 100);
  sliderR.position(260,200);
  sliderR.style('width', '80px');
  
  sliderG = createSlider(0, 255, 100);
  sliderG.position(260, 240);
  sliderG.style('width', '80px');
  
  sliderB = createSlider(0, 255, 100);
  sliderB.position(260, 320);
  sliderB.style('width', '80px');
  
  sliderRad = createSlider(0, 200, 100);
  sliderRad.position(260, 280);
  sliderRad.style('width', '80px');
  
   sliderS = createSlider(0, 25, 100);
  sliderS.position(260, 360);
  sliderS.style('width', '80px');
}

function draw() {
  background(260);
  
  let val1 = sliderR.value()
  let val2 = sliderG.value()
  let val3 = sliderB.value()
  let val4 = sliderRad.value()
  let val5 = sliderS.value()
  circle(150,260,val4);
  strokeWeight(val5)
  fill(val1,val2,val3);
  

}