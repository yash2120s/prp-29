const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
  ballp = loadImage("hexagon.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2-100, height/2+150, 300, 20);
  ground1 = new Ground(width/2+300, height/2-50, 200, 20);

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingshot = new SlingShot(this.ball, {x: 100, y: 200});

  box1 = new Block(width/2-230, height/2+120, 30, 40);
  box2 = new Block(width/2-200, height/2+120, 30, 40);
  box3 = new Block(width/2-170, height/2+120, 30, 40);
  box4 = new Block(width/2-140, height/2+120, 30, 40);
  box5 = new Block(width/2-110, height/2+120, 30, 40);
  box6 = new Block(width/2-80, height/2+120, 30, 40);
  box7 = new Block(width/2-50, height/2+120, 30, 40);
  box8 = new Block(width/2-20, height/2+120, 30, 40);
  box9 = new Block(width/2+10, height/2+120, 30, 40);
  box10 = new Block(width/2-215, height/2+80, 30, 40);
  box11 = new Block(width/2-185, height/2+80, 30, 40);
  box12 = new Block(width/2-155, height/2+80, 30, 40);
  box13 = new Block(width/2-125, height/2+80, 30, 40);
  box14 = new Block(width/2-95, height/2+80, 30, 40);
  box15 = new Block(width/2-65, height/2+80, 30, 40);
  box16 = new Block(width/2-35, height/2+80, 30, 40);
  box17 = new Block(width/2-5, height/2+80, 30, 40);
  box18 = new Block(width/2-200, height/2+40, 30, 40);
  box19 = new Block(width/2-170, height/2+40, 30, 40);
  box20 = new Block(width/2-140, height/2+40, 30, 40);
  box21 = new Block(width/2-110, height/2+40, 30, 40);
  box22 = new Block(width/2-80, height/2+40, 30, 40);
  box23 = new Block(width/2-50, height/2+40, 30, 40);
  box24 = new Block(width/2-20, height/2+40, 30, 40);
  box25 = new Block(width/2-185, height/2, 30, 40);
  box26 = new Block(width/2-155, height/2, 30, 40);
  box27 = new Block(width/2-125, height/2, 30, 40);
  box28 = new Block(width/2-95, height/2, 30, 40);
  box29 = new Block(width/2-65, height/2, 30, 40);
  box30 = new Block(width/2-35, height/2, 30, 40);
  box31 = new Block(width/2-170, height/2-40, 30, 40);
  box32 = new Block(width/2-140, height/2-40, 30, 40);
  box33 = new Block(width/2-110, height/2-40, 30, 40);
  box34 = new Block(width/2-80, height/2-40, 30, 40);
  box35 = new Block(width/2-50, height/2-40, 30, 40);
  box36 = new Block(width/2-155, height/2-80, 30, 40);
  box37 = new Block(width/2-125, height/2-80, 30, 40);
  box38 = new Block(width/2-95, height/2-80, 30, 40);
  box39 = new Block(width/2-65, height/2-80, 30, 40);
  box40 = new Block(width/2-140, height/2-120, 30, 40);
  box41 = new Block(width/2-110, height/2-120, 30, 40);
  box42 = new Block(width/2-80, height/2-120, 30, 40);
  box43 = new Block(width/2-125, height/2-160, 30, 40);
  box44 = new Block(width/2-95, height/2-160, 30, 40);
  box45 = new Block(width/2+220, height/2-80, 30, 40);
  box46 = new Block(width/2+250, height/2-80, 30, 40);
  box47 = new Block(width/2+280, height/2-80, 30, 40);
  box48 = new Block(width/2+310, height/2-80, 30, 40);
  box49 = new Block(width/2+340, height/2-80, 30, 40);
  box50 = new Block(width/2+370, height/2-80, 30, 40);
  box51 = new Block(width/2+235, height/2-120, 30, 40);
  box52 = new Block(width/2+265, height/2-120, 30, 40);
  box53 = new Block(width/2+295, height/2-120, 30, 40);
  box54 = new Block(width/2+325, height/2-120, 30, 40);
  box55 = new Block(width/2+355, height/2-120, 30, 40);
  box56 = new Block(width/2+250, height/2-160, 30, 40);
  box57 = new Block(width/2+280, height/2-160, 30, 40);
  box58 = new Block(width/2+310, height/2-160, 30, 40);
  box59 = new Block(width/2+340, height/2-160, 30, 40);


}

function draw() {
  background("green");  
  Engine.update(engine);

  ground.display();
  ground1.display();

  fill(135, 205, 235);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  fill(255, 190, 200);
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  fill(65, 220, 210);
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  fill(130, 130, 130);
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  fill(135, 205, 235);
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  fill(255, 190, 200);
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  fill(65, 220, 210);
  box40.display();
  box41.display();
  box42.display();
  fill(130, 130, 130);
  box43.display();
  box44.display();
  fill(135, 205, 235);
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  fill(255, 190, 200);
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  fill(65, 220, 210);
  box56.display();
  box57.display();
  box58.display();
  box59.display();
  
  slingshot.display();

  imageMode(CENTER);
  image(ballp, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}