
const container = document.querySelector('#grid');
let square = document.createElement('div');

\\Enter grid x and y axis
let first = parseInt(prompt("Enter x axis"));
let second = parseInt(prompt("Enter y axis"));
let third = first * second;

\\Setting w & h factoring in square size and border thickness
let newWidth = (first * 50) + (first * 2);
let newHeight = second * 50 + (second * 2);
alert("Building " + first + " by " + second + " grid.")


\\Build grid using parameters above
function buildGrid(){
document.querySelector(".easel").style.width = newWidth  + "px";
document.querySelector(".easel").style.height = newHeight + "px";
for(var i=1; i < third + 1; i++){
  console.log(i);
  container.appendChild(square.cloneNode(true));
}}

buildGrid();

\\Create etch a sketch effect
square.mouseover = doucment.square.style.background = black;
