var button,title; 
var logo,logo_img;
var car,car_img;
var back;
var gameState = "intro";
var stage_img
//var ground;
var score = 0;

function preload(){

logo_img = loadImage('Xtreme_only.png');
car_img = loadImage("Car.png");
choose = loadSound("gulf.wav");
back = loadImage("background.jpg");
choose_car = loadImage("cCar.png");
choose_car2 = loadImage("cCar2.png");
stage_img = loadImage("stage.png");
chiron_img = loadImage("chiron.png");
ferrari_img = loadImage("Ferrari.png") ;
bgt = loadImage("bugatitop.png");
track = loadImage("track.jpg")
money_song = loadSound("money.mp3");
faded_song = loadSound("faded.mp3");
staygold_song = loadSound("staygold.mp3")
darkside_song = loadSound("darkside.mp3");

ferrariTop = loadImage("ferraritop.png")

carCrash_sound  = loadSound("Carcrash.mp3");

gameOver  = loadImage("Gameover.jpg");

race_car1 = loadImage("car1.png");
race_car2 = loadImage("Car2.png");
cycle = loadImage("cycle.png");

finish_img = loadImage("finish.png")

 }

 function setup() {

  canvas = createCanvas(1000,600);
carGroup = new Group;

logo = createSprite(500,100);
logo.addImage(logo_img);
logo.scale = 1.5

  button  = createButton("Play")
  button.position(450,490);
  button.size(100,50)
  button.mousePressed(start);

//ground = createSprite(200,300,)
//ground.addImage(track);
//ground.scale = 1;
//ground.visible = false;

car = createSprite(-100,350);
car.velocity.x = 2;
car.addImage(car_img)
car.scale  = 0.2;

choose_button = createButton("Choose Car")
choose_button.position(370,240);
choose_button.size(200,100);
choose_button.hide();
choose_button.mousePressed(play_game);

car1 = createSprite(140,300);
car1.addImage(choose_car) 
car1.scale  = 0.17
car1.visible = false;

car2 = createSprite(820,300);
car2.addImage(choose_car2);
car2.scale = 0.15;
car2.visible = false;

title = createElement("h1")
title.html("Choose your song")
title.position(250,360);
title.hide();

darkside = createButton("Darkside");
darkside.position(270,420);
darkside.size(100,40);
darkside.mousePressed(play_darkside)
darkside.hide();

stayGold = createButton("Stay gold");
stayGold.position(400,420);
stayGold.size(100,40);
stayGold.mousePressed(play_staygold)
stayGold.hide();

faded = createButton("Faded");
faded.position(530,420);
faded.size(100,40);
faded.mousePressed(play_faded);
faded.hide();

money = createButton("Money");
money.position(660,420);
money.size(100,40);
money.mousePressed(play_money);
money.hide();

formula = createSprite(100,200);
formula.addImage(ferrariTop);
formula.scale = 0.04;
formula.visible = false;

chiron = createSprite(500,430)
chiron.addImage(chiron_img);
chiron.scale = 0.25
chiron.visible = false;

ferrai = createSprite(500,430);
ferrai.addImage(ferrari_img);
ferrai.scale = 0.7;
ferrai.visible = false;

buggati = createSprite(100,200);
buggati.addImage(bgt)
buggati.scale  =0.25;
buggati.visible = false;
buggati.velocityY = 0;
buggati.velocityX = 0;

say();

}

function draw() {
  
  background("green")

  if(gameState === "choose"){

  background(back);
 
}

if(gameState === "showCar" && keyWentDown("C")){

chiron.visible = false;
gameState = "choose_songC";

choose.stop();

}

if(gameState === "showferrai" && keyWentDown("F")){

  chiron.visible = false;
  ferrai.visible = false;
  gameState = "choose_songF";
  
  choose.stop();
  
  }

buggati.setCollider("rectangle",20,0,680,360);


if(gameState === "choose_songC"){

  image(track,-10,0,displayWidth  *5, displayHeight)

buggati.visible = true;

darkside.show();
money.show();
stayGold.show();
faded.show();

title.show();

}

if(gameState === "choose_songF"){

  
 image(track,-10,0,displayWidth  *5, displayHeight)


formula.visible = true;
 
 darkside.show();
 money.show();
 stayGold.show();
 faded.show();
 
title.show();

 }
 

if(gameState === "raceStartChiron"){

  score = score + Math.round(getFrameRate()/60);

  image(track,-10,0,displayWidth  *5, displayHeight)

camera.x = buggati.x

    darkside.hide();
  money.hide();
  stayGold.hide();
  faded.hide();

formula.x = 1000000;

title.hide();


  buggati.visible = true;

otherCars(); 

if(buggati.x > 6200) {

  gameState = "finish"

}

}

if(gameState ==="finish"){

  staygold_song.stop();
  darkside_song.stop();
  money_song.stop();
  faded_song.stop();

background(finish_img);

buggati.hide();
formula.hide();

}

if(gameState === "raceStartFerrari"){

  score = score + Math.round(getFrameRate()/60);

  image(track,-10,0,displayWidth  *5, displayHeight)

title.hide();

    darkside.hide();
  money.hide();
  stayGold.hide();
  faded.hide();

  camera.x = formula.x

buggati.x = 1000000;

  formula.visible = true;

otherCars(); 

if(formula.x > 6200) {

  gameState = "finish"

}

}

if(gameState === "showCar"){

  background(stage_img);

  textSize(70)
  text("Choose your Car",250,100)
  chiron.visible = true;

  fill("yellow");
  textSize(30);
  text("Buggati Chiron",400,330);

  fill("yellow");
  textSize(30);
  text("Press 'C' to choose",400,190);

  fill("yellow");
  textSize(30);
  text("Press 'N' to see next car",400,250);
  
}

if(gameState  === "raceStartChiron" && keyDown("down")&& buggati.y < 580 ){

buggati.y = buggati.y + 10;

}

if(gameState  === "raceStartChiron" && keyDown("right")){

  buggati.x = buggati.x + 10;
  
  }

  if(gameState  === "raceStartChiron" && keyDown("left") && buggati.x > 10){

    buggati.x = buggati.x - 10;
    
    }

if(gameState  === "raceStartChiron" && keyDown("up") && buggati.y > 20){

  buggati.y = buggati.y - 10;
  
  }

  if(gameState  === "raceStartFerrari" && keyDown("down")&& formula.y < 580 ){

    formula.y = formula.y + 10;
    
    }
    
    if(gameState  === "raceStartFerrari" && keyDown("right") ){
    
     formula.x = formula.x + 10;
      
      }
    
      if(gameState  === "raceStartFerrari" && keyDown("left") && formula.x > 10){
    
        formula.x = formula.x - 10;
        
        }
    
    if(gameState  === "raceStartFerrari" && keyDown("up") && formula.y > 20){
    
      formula.y = formula.y - 10;
      
      }

if(gameState === "showCar" && keyWentDown("N")) {

gameState = "showferrai"
    
  }


  if(gameState === "showferrai" && keyWentDown("P")){

gameState = "showCar"
ferrai.visible = false;

  }  

if(buggati.isTouching(carGroup)){

  
carCrash_sound.play();


gameState = "race";
darkside_song.stop();
buggati.visible = false;

money_song.stop();

staygold_song.stop();

faded_song.stop();

background(gameOver);

carGroup.destroy();

}


if(formula.isTouching(carGroup)){

  
  carCrash_sound.play();
  
  
  gameState = "end";
  darkside_song.stop();
  buggati.visible = false;
  formula.visible = false
  
  money_song.stop();
  
  staygold_song.stop();
  
  faded_song.stop();
  
  background(gameOver);
  
  carGroup.destroy();
  
  }

  if(gameState === "showferrai"){

chiron.visible = false;
ferrai.visible = true;

background(stage_img);

textSize(70)
  text("Choose your Car",250,100)


  fill("yellow");
  textSize(30);
  text("Ferrari Formula",400,330);

  fill("yellow");
  textSize(30);
  text("Press 'F' to choose",400,190);

  text("Press 'P' to see Previous car",400,250);

  }



  drawSprites();

  if(gameState === "raceStartChiron"){

    textSize(30);
    text("Score - " + score , 500,50)

    //(track,-10,0,displayWidth  *5, displayHeight)

  }
  
  if(gameState === "raceStartFerrari"){


    textSize(30);
    text("Score - " + score , 500,50)

  }

  
}

function start(){

  gameState = "choose"

  car1.visible = true;
  car2.visible = true;
 
choose_button.show();

choose.play();

car.visible = false;
logo.visible = false;
button.hide();
intro.stop();


}

function play_game(){

gameState = "showCar";

choose_button.hide();
car1.visible = false;
car2.visible = false;


}

function play_money(){

money_song.play();

if(gameState==="choose_songC"){

gameState = "raceStartChiron"

}else{

  gameState = "raceStartFerrari"

}

}

function play_faded(){

faded_song.play();

if(gameState==="choose_songC"){
  
gameState = "raceStartChiron"

}
else{

  gameState = "raceStartFerrari"

}

}

function play_staygold(){

  staygold_song.play();

  if(gameState==="choose_songC"){
  
    gameState = "raceStartChiron"
    
    }
    else{

      gameState = "raceStartFerrari"
    
    }
  }

  function play_darkside(){

    darkside_song.play();

if(gameState==="choose_songC"){
  
gameState = "raceStartChiron"

}
else{

  gameState = "raceStartFerrari"

}
    }

 function say(){
     sp=new SpeechSynthesisUtterance();
    sp.text="Hai Welcome To Xtreme racing" 
    window.speechSynthesis.speak(sp)
  }

  
function otherCars() {

  if(frameCount % 80 === 0) {
  

if(gameState === "raceStartChiron"){

  i = buggati.x + 1000

}else{

  i = formula.x + 1000

}

    var car = createSprite(i,Math.round(random(50,600)));
    car.velocityX = -(7 + 3*score/100);
    car.lifetime = 200;
    car.scale = random(0.3,0.4);

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: car.addImage(race_car1);
             // car.setCollider("circle",-80,10,160);
              break;
      case 2: car.addImage(race_car2);
            // car.setCollider("circle",50,0,150);
              break;
      case 3: car.addImage(cycle);
              //car.setCollider("circle",0,0,170)
      default: break;
    }
    
        carGroup.add(car);
      
  }
}