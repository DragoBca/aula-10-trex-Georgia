//declarando as variáveis
var trex,trex_running;
var edges;

//preload carrega as mídias do jogo
function preload(){
  //carregando a animação do trex correndo
  trex_running = loadAnimation("images/trex3.png","images/trex4.png");

  //carregando a imagem do solo
}


//setup faz a configuração
function setup(){
  createCanvas(windowWidth*2, windowHeight*2);

  //sprite trex
  trex = createSprite(50,160,20,40);
  trex.addAnimation('running',trex_running);
  trex.scale = 0.5;

  //sprite Solo
  
  
  //criando bordas
  edges = createEdgeSprites()
  
}

//draw faz o movimento, a ação do jogo
function draw(){
  background("green");

  //pulo do trex
 // if (keyDown("space")) {
   // trex.velocityY = -10;
  //}
  gravity();
  houses();
  //colisão do trex
  trex.collide(edges)


  //movimento do solo



 
  //coordenadas do mouse na tela
  fill("black");
  text("X: "+mouseX+" / Y: "+mouseY,mouseX,mouseY)
  drawSprites();
}

function gravity(){
  trex.velocityY += 0.5;
}

function obstacles() {
  if (frameCount%60 == 0) {
    var obstacle = createSprite()
  }
}

function houses() {
  house1 = createSprite(random(400, 500), random(200, 300));
  house2 = createSprite(random(1500, 1800), random(700, 1000));
  house3 = createSprite(random(1200, 2200), random(200, 400));
}
