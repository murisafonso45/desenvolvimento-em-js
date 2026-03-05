// var fundo = createSprite(200,200,400,400);
// fundo.setAnimation("fundo");
var personagem_1 = createSprite(370,200,20,20);
var personagem_2_pc = createSprite(35,200,20,20);
var rede =  createSprite(200,200,2,2);
var bola = createSprite(200,200,10,10);



bola.setAnimation("bola");
bola.scale = 0.07;
personagem_2_pc.scale = 0.5;
personagem_1.scale = 0.5;

var p1 = 0;
var p2 = 0;


personagem_1.setAnimation('img1');
personagem_2_pc.setAnimation('img2');


function draw() {
   background("yellow");
   textSize(40) ; 

 textFont('arial');
 text.shapeColor = 'Red';
 text(p1, 30,40);
 text(p2, 360,40);
 text.de = 1;
 
   
  if(bola.isTouching(personagem_1) || (bola.isTouching(personagem_2_pc))){
    
    playSound('hit.mp3');
    
    
  }
  
  
  
  if (keyDown('UP_ARROW')){
    personagem_1.velocityY = -4;
    
    
  }else if (keyDown("down")){
    
    personagem_1.velocityY = 4;
    
  }
  
  if (keyDown("space")){
    
    bola.velocityX = 2; 
    bola.velocityY = 2;
    
  }
  
  // placar_linha()
  
  createEdgeSprites();
  
  if(bola.isTouching(topEdge) || (bola.isTouching(bottomEdge))){
    
  playSound("sound://category_alerts/vibrant_game_negative_affirmation.mp3");
    
  }
  
  

  

  
    if (bola.isTouching(rightEdge) ){
    
    p2 = p2 + 1;
     bola.x =  200;
    bola.y = 200;
    
  }
  
  if (bola.isTouching(leftEdge)){
    
    p1  =  p1  + 1;
    bola.x =  200;
    bola.y = 200;
    
  }
  
  
  if (p1 == 3 ){
    
  text('PARABÉNS VOCÊ GANHOU O JOGO', 200,110)  ;
  text('GAME ', 200,200);
    
  }
  
  if (p2 == 3){
    
  text('A MAQUINA GANHOU O JOGO ', 80 ,110)  
  textFont('arial');
  text('GAME ', 200,200);
  p1 = 0;
  p2 = 0;
  
  bola.y  = 0;
  
    
    
  }
  
  
  personagem_2_pc.y=bola.y;
  
  
  
  bola.bounceOff(topEdge);
  bola.bounceOff(bottomEdge);
  bola.bounceOff(personagem_2_pc);
  bola.bounceOff(personagem_1);
  personagem_1.bounceOff(topEdge);
  personagem_1.bounceOff(bottomEdge);
  personagem_2_pc.bounceOff(bottomEdge);
  personagem_2_pc.bounceOff(topEdge);
  
  drawSprites();
  
 
}










