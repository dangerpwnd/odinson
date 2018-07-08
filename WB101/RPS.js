let playerScore = 0;
let computerScore = 0;
let playerSelection = "No Selection";
let computerSelection = "No Selection";

//Function for computer choice

const computerPlay = function() {
  let number = Math.floor(Math.random() * 3) + 1;
  if(number == 1){
    computerSelection = "rock";
    console.log("Computer selected rock!");
    alert("Computer selected rock!");
  }
  else if(number == 2){
    computerSelection = "paper";
    console.log("Computer selected paper!");
    alert("Computer selected paper!");
  }
  else if(number == 3) {
    computerSelection = "scissors";
    console.log("Computer selected scissors!");
    alert("Computer selected scissors!");
  }
  else{
    console.log("Rebooting PC");
    alert("Rebooting PC");
  }
}

//Functions for players choices

const rock = function(){
  playerSelection = "rock";
  console.log("Player selected rock!");
  alert("Player selected rock!");
}

const paper = function(){
  playerSelection = "paper";
  console.log("Player selected paper!");
  alert("Player selected paper!");
}

const scissors = function(){
  playerSelection = "scissors";
  console.log("Player selected scissors!");
  alert("Player selected scissors!");
}

//Function for playing single round

const playRound = function() {
  computerPlay();
  if(playerSelection == "rock" && computerSelection == "rock"){
    //return "draw";
    alert("We'll call it a draw");
    console.log("Player rock and computer rock");
  }
  else if (playerSelection == "rock" && computerSelection == "paper"){
    //return "computer won";
    alert("One step for integrated circuits, a giant leap for Skynet.");
    console.log("Player rock and computer paper");
    computerScore++;
    document.getElementById("cS").innerHTML = computerScore;
  }
  else if (playerSelection == "rock" && computerSelection == "scissors"){
    //return "player won";
    alert("Their motherboards crack under your boot.");
    console.log("Player rock and computer scissors");
    playerScore++;
    document.getElementById("pS").innerHTML = playerScore;
  }
  else if (playerSelection == "scissors" && computerSelection == "scissors"){
    //return "draw";
    alert("We'll call it a draw");
    console.log("Player scissors and computer scissors");
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    //return "computer won";
    alert("One step for integrated circuits, a giant leap for Skynet.");
    console.log("Player scissors and computer rock");
    computerScore++;
    document.getElementById("cS").innerHTML = computerScore;
  }
  else if (playerSelection == "scissors" && computerSelection == "paper"){
    //return "player won";
    alert("Their motherboards crack under your boot.");
    console.log("Player scissors and computer paper");
    playerScore++;
    document.getElementById("pS").innerHTML = playerScore;
  }
  else if (playerSelection == "paper" && computerSelection == "paper"){
    //return "draw";
    alert("We'll call it a draw");
    console.log("Player paper and computer paper");
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    //return "computer won";
    alert("One step for integrated circuits, a giant leap for Skynet.");
    console.log("Player paper and computer scissors");
    computerScore++;
    document.getElementById("cS").innerHTML = computerScore;
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    //return "player won";
    alert("Their motherboards crack under your boot.");
    console.log("Player paper and computer rock");
    playerScore++;
    document.getElementById("pS").innerHTML = playerScore;
  }
  else {
    //return "broke";
    alert("Something went wrong. Self-destructing in 10 seconds.");
    console.log("Failed this test.");
  }
}

//Function for playing multiple rounds

const playGame = function() {
  playRound();
  if(playerScore < 5 && computerScore < 5){
    alert("Round complete! Continue to fight!")
  }
  else if(playerScore == 5){
    alert("You did it! The machines didn't stand a chance.");
    computerScore = 0;
    playerScore = 0;
    document.getElementById("pS").innerHTML = playerScore;
    document.getElementById("cS").innerHTML = computerScore;
    return;
  }
  else if(computerScore == 5){
    alert("They won. I hope you were nice to your Siri.");
    computerScore = 0;
    playerScore = 0;
    document.getElementById("pS").innerHTML = playerScore;
    document.getElementById("cS").innerHTML = computerScore;
    return;
  }
  else {
    alert("It's game over man.");
  }

}

//Events for button clicks//
/*document.getElementById('rockc').click = function () {
  rock();
  playGame();
};*/
function myRock(){
  rock();
  playGame();
}
/*document.getElementById('paperc').click = function () {
  paper();
  playGame();
};*/
function myPaper(){
  paper();
  playGame();
}
/*document.getElementById('scissorsc').click = function () {
  scissors();
  playGame();
};*/
function myScissors(){
  scissors();
  playGame();
}
