const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var drop=[];
var maxDrops = 100;
var umbrella;
var rand;
var night;
var thunder,thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
   createCanvas(500,657);
    
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++){
       drop.push(new Drop(random(0,500),random(0,500)));
   }
}

function draw(){
    Engine.update(engine);
    background("black");

   rand = Math.round(random(1,4));
   if(frameCount % 80 === 0){
       thunderCreatedFrame=frameCount;
       thunder = createSprite(random(10,370),random(10,30),10,10);
       switch(rand){
           case 1: thunder.addImage(thunder1);
           break;
           case 2: thunder.addImage(thunder2);
           break;
           case 3: thunder.addImage(thunder3);
           break;
           case 4: thunder.addImage(thunder4);
           break;
           default: break;
       }
       thunder.scale = random(0.3,0.6);
   }
   
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();
   
   for(var i = 0; i < maxDrops; i++){
       drop[i].display();
       drop[i].update();
   }

    drawSprites();
}   


