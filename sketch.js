//Create variables here
var database,pet,pet_i,happy_i,milk,totalmilk,count,happi;
function preload()
{
  //load images here
  pet_i=loadImage("dogImg.png");
  happy_i=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(1400, 700);
  database=firebase.database();
  pet=createSprite(750,330,0,0);
  pet.addImage(pet_i);
  totalmilk=database.ref('Milk');
  totalmilk.on("value",readTotal);
  count=0;

}


function draw() {  

  drawSprites();
 if(milk!=undefined)
 {
    textSize(30);
  fill(255);
  text("Press UP Arrow To Feed",60,100);
  text("Feed 5 Times To Make Your Pet Happy",10,50);
  text("Total Milk: "+milk,150,200);
 
  if(keyWentDown(UP_ARROW)&&milk!=0)
  {
    writeTotal(milk);
   count++;
   if(count%1==0){
    
  }
    if(count%5==0)
   {
      happi="Amazing";
      text("Happiness: "+happi,1050,50);
      jon=createSprite(750,330,450,750);
      jon.shapeColor="#09eb14";
      pet2=createSprite(750,330,0,0)
      pet2.addImage(happy_i);
   }
   
  }
  
 }
 
   

}
function readTotal(data){
   milk=data.val();
}
function writeTotal(x){
  if(x<=0){
    x=0;
  }
  else if(happi!="Amazing"){
    x=x-1;
  }
  database.ref('/').update({ 
    Milk:x})
 
}


