let slider1, slider2,  sliderG, sliderR, sliderB, sliderS, sliderZ
function setup() {
  createCanvas(800, 700);
  slider1 = createSlider(1, 10, 4);
  slider1.position(560,200);
  slider1.style('width', '200px');
  
  slider2 = createSlider(1, 10, 4);
  slider2.position(560,240);
  slider2.style('width', '200px');
  
  sliderR = createSlider(0, 255, 100);
  sliderR.position(560,280);
  sliderR.style('width', '200px');
  
  sliderG = createSlider(0, 255, 100);
  sliderG.position(560, 320);
  sliderG.style('width', '200px');
  
  sliderB = createSlider(0, 255, 100);
  sliderB.position(560, 360);
  sliderB.style('width', '200px');
  
  sliderS = createSlider(0, 10, 100);
  sliderS.position(560, 400);
  sliderS.style('width', '200px');
  
  sliderZ = createSlider(0, 255, 100);
  sliderZ.position(560, 440);
  sliderZ.style('width', '200px');
}

function draw() {
  background(260);
  
  let val1 = sliderR.value()
  let val2 = sliderG.value()
  let val3 = sliderB.value()
  let val4 = sliderZ.value()
  let val5 = sliderS.value()
  
  for(j=0; j<slider1.value(); j++ )
    {
  for(i=0; i<slider2.value(); i++)
    {
      rect( (i*45)+10, (j*45)+10, val4, val4)
      fill(val1,val2,val3);
      strokeWeight(val5)
    }
    }
}