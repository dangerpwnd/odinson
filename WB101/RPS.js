let computerSelection = function computerPlay() {
  let number = function Math.floor(Math.random() * 3) + 1;
  if(number = 1){
    return "rock";
  }
  elseif(number = 2){
    return "paper";
  }
  elseif(number = 3) {
    return "scissors";
  }
  else{
    return "Rebooting PC"
  }
}

let playerSelection = function {
  prompt(Choose wisely!);
}

let player1 = playerSelection.toLowerCase();

function playRound(player1,computerSelection){
  if(player1 = rock && computerSelection = rock){
    return "We'll call it a draw";
  }
  elseif (player1 = rock && computerSelection = paper){
    return "One step for integrated circuits, a giant leap for Skynet."
  }
  elseif (player1 = rock && computerSelection = scissors){
    return "Their motherboards crack under your boot."
  }
  elseif (player1 = scissors && computerSelection = scissors){
    return "We'll call it a draw";
  }
  elseif (player1 = scissors && computerSelection = rock){
    return "One step for integrated circuits, a giant leap for Skynet."
  }
  elseif (player1 = scissors && computerSelection = paper){
    return "Their motherboards crack under your boot."
  }
  elseif (player1 = paper && computerSelection = paper){
    return "We'll call it a draw";
  }
  elseif (player1 = paper && computerSelection = scissors){
    return "One step for integrated circuits, a giant leap for Skynet."
  }
  elseif (player1 = paper && computerSelection = rock){
    return "Their motherboards crack under your boot."
  }
  else {
    return "Something went wrong. Self-destructing in 10 seconds."
  }
}
