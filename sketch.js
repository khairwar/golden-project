var database;
var gameState=0;
var playerCount; 
var engine;
var player,game, form;
var world;
var ground;
var char1,char2;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  engine = Matter.Engine.create();
  world = engine.world;

  game = new Game();
  game.getState();
  game.start();
  
  
}

function draw() {
  background(255,255,255);  
  if(playerCount == 2){
    game.updateState(1);
  }
  if(gameState == 1){
    game.play()
  }
  
}