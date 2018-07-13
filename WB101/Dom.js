const first = document.querySelector("#firstOfmany");
const div = document.createElement("div");
const p1 = document.createElement("p");

p1.style.cssText = "font-size: 18px; color: red;";
p1.textContent = "I'm a blue h3!";
div.style.cssText = "border-style: solid; border-width: 5px; background-color:pink;"
first.appendChild(p1);
first.appendChild(div);


const second = document.querySelector("#secondOfsome");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");
h1.textContent = "I'm in a div";
p2.textContent = "ME TOO!";
second.appendChild(h1);
second.appendChild(p2);

var btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello there!");

var btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
  alert("Hello from the Dark Side of the Moon!");
});

function bigRedbutton(){
  alert("Self destructing");
}

function sRb(){
  alert("3 seconds to self destruction");
}

secondRbtn.onclick = sRb;

function lRb(){
  alert("KABOOM!");
}

lastRbtn.addEventListener('click', lRb);

oneMore.addEventListener("click", function(e){
  e.target.style.background = "blue";
})
