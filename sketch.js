var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png")
  boyImg=loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png")
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 
}

function setup(){
  createCanvas(400,400);

  path=createSprite(200,200);
  path.addImage("running",pathImg);
  path.scale=1.2;
  path.velocityY=4;
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.


//crear sprite de boy (niño)
//agregar animación para boy
boy=createSprite(180,340,30,30);
boy.addAnimation("boyRunning",boyImg)
boy.scale=0.5;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background("white");
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

