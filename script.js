var canvas=document.querySelector(".board");
var ctx=canvas.getContext("2d");

canvas.style.background="aqua";
var x=20;
var y=300;
var sine;
var amp=5;



function draw(){
x+=5;
sine=amp*Math.sin(90*x*(180/3.142));
y+=sine;
// console.log(sine);

// ctx.fillStyle="black";
ctx.beginPath();
ctx.arc(x,y,5,0,20*2*Math.PI);
ctx.stroke();
ctx.fill();

ctx.translate(0,0);

// canvas.reset();

}




ctx.clearRect(0, 0, 1600, 600);
setInterval(draw,10);

ctx.fillStyle="red";
ctx.beginPath();
ctx.moveTo(0,275);
ctx.lineTo(1600,275); 
ctx.stroke();