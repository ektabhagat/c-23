const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wd;


function setup(){
    createCanvas(400,400);
    en = Engine.create(); //en.world
    wd = en.world;
    box1=new Box(200,300,50,50)
     box2=new Box(240,100,50,100)
ground1=new ground(200,380,400,20)



   
    

}

function draw(){
    background(0);
    Engine.update(en);
    
box1.display()
box2.display()
ground1.display()
}
          




















































































