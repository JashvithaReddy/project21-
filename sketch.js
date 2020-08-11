var bullet,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 
bullet = createSprite(50,200,50,50);

wall = createSprite(1200,200,60,thickness/2);
wall.shapeColor=(80,80,80);
}

function draw() {
  background(0);  

  bullet.veloctiyX=speed;
  

  if(wall.x - bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.veloctiyX=0;
    var deformation=0.5*weight*speed*speed/22500;

    if(deformation<180)
    {
        bullet.shapeColor=(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
         bullet.shapeColor=(230,230,0);

    if(deformation<100)
    {
        bullet.shapeColor=(0,255,0);
    }
    }

  }
 hasCollided();
  drawSprites();
}
function hasCollied(lbullet,lwall){

    bulletRightEdge=lbullet.x=lbullet.width;
    wallLeftEdge=lwall.x;
    {
      return true;
    }
      return false;

      if (hascollided(bullet,wall)){

        bullet.velocityX=0;
        var damage=0.5 * weight* speed* speed/(thickness * thickness* thickness)

        if(damage>10){
      wall.shapeColor=(255,0,0);
        }


        if(damge<10){
      wall.shapeColor(0,255,0);
        }
      }
}