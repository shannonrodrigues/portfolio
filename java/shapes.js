let sldrHDir, sldrBWColor

let radBW, radRGB

function setup() {
  createCanvas(1000, 800);
 
  sldrHDir = createSlider(0,13,8)
  sldrHDir.position(800, 355)
  sldrHDir.style('width', '150px')
 
  sldrBWColor = createSlider(0,256,150)
  sldrBWColor.position(800, 400)
  sldrBWColor.style('width', '150px')
 
 
  radBW = createRadio()
  radBW.option('Monochrome')
  radBW.option('RGB colors')
  radBW.position(780, 300)
  radBW.selected('RGB colors')
  

 
 
}

function draw() {
 
  background(260);
 
 
  for( j=0; j < sldrHDir.value() ; j++)
    {
      for (i=0; i<10 ; i++)
        {
         
          if( radBW.value() == 'Monochrome' )
          {  
              if ( (i+j)%2 == 0 )
                {
                  fill ('White')
                }
              else
                {
                  fill( sldrBWColor.value() )
                }
          }
          else if( radBW.value() == 'RGB colors' )
          {  
              if ( (i+j)%2 == 0 )
                {
                  fill ('Blue')
                }
              else
                {
                  fill( sldrBWColor.value(), 150, 150 )
                }
          }
         
         /* if(j%2 == 0 && i%2 == 1)
            {
             fill ('blue')
            }
          else if(j%2 == 1 && i%2 == 0)
            {
              fill ('blue')
            }
          else
          {
            fill ('yellow')
          }
         
          */
 
          rect( 60*j,60*i, 50,50 )

        }
    }
   
}