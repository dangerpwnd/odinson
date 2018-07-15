const container = document.querySelector("#grid");
const div = document.createElement("div");

let first = parseInt(prompt("Enter x axis"));
let second = parseInt(prompt("Enter y axis"));
alert("Building " + first + " by " + second + " grid.")

function buildGrid(first=16,second=16){

for(var i=0; i < (first*second); i++){
  console.log(i);
  container.appendChild(div);
}

}

buildGrid(first,second);
