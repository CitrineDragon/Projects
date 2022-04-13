let rounds = 10;
let userPoints = 0;
let comPoints = 0;
let userChoice = 'none';
let comChoice = 'none';
let random = 0;

document.querySelector('.rock').addEventListener('click', rock);
document.querySelector('.paper').addEventListener('click', paper);
document.querySelector('.scissors').addEventListener('click', scissors);
document.querySelector('.startOver').addEventListener('click', start);

document.querySelector('.userChoice').innerText = userChoice;
document.querySelector('.comChoice').innerText = comChoice;
document.querySelector('.userPoints').innerText = userPoints;
document.querySelector('.comPoints').innerText = comPoints;
document.querySelector('.roundsRemain').innerText = rounds;

function rock() {
  userChoice = 'rock';
  document.querySelector('.userChoice').innerText = userChoice;
  getRandomInt(1, 4);
}

function paper() {
  userChoice = 'paper';
  document.querySelector('.userChoice').innerText = userChoice;
  getRandomInt(1, 4);
}

function scissors() {
  userChoice = 'scissors';
  document.querySelector('.userChoice').innerText = userChoice;
  getRandomInt(1, 4);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  random = Math.floor(Math.random() * (max - min) + min);
  // console.log(`random = ${random}`);
  randomAssign(random);
}

function randomAssign() {
  if (random === 1) {
    comChoice = 'rock';
    document.querySelector('.comChoice').innerText = comChoice;
  } else if (random === 2) {
    comChoice = 'paper';
    document.querySelector('.comChoice').innerText = comChoice;
  } else if (random === 3) {
    comChoice = 'scissors';
    document.querySelector('.comChoice').innerText = comChoice;
  }
  // console.log(`comChoice = ${comChoice}`);
  compare(userChoice, comChoice);
}

function compare(userChoice, comChoice) {
  console.log(`User: ${userChoice}, Com: ${comChoice}`);
  rounds -= 1;
  if (userChoice === comChoice) {
    document.querySelector('.roundsRemain').innerText = rounds;
    console.log('tie');
  } else if (userChoice === 'rock' && comChoice === 'scissors') {
    userPoints++;
    document.querySelector('.userPoints').innerText = userPoints;
    document.querySelector('.roundsRemain').innerText = rounds;
    console.log('user wins');
  } else if (userChoice === 'paper' && comChoice === 'rock') {
    userPoints++;
    document.querySelector('.userPoints').innerText = userPoints;
    document.querySelector('.roundsRemain').innerText = rounds;
    console.log('user wins');
  } else if (userChoice === 'scissors' && comChoice === 'paper') {
    userPoints++;
    document.querySelector('.userPoints').innerText = userPoints;
    document.querySelector('.roundsRemain').innerText = rounds;
    console.log('user wins');
  } else if (userChoice === 'scissors' && comChoice === 'rock') {
    comPoints++;
    document.querySelector('.comPoints').innerText = comPoints;
    document.querySelector('.roundsRemain').innerText = rounds;
    console.log('com wins');
  } else if (userChoice === 'rock' && comChoice === 'paper') {
    comPoints++;
    document.querySelector('.comPoints').innerText = comPoints;
    document.querySelector('.roundsRemain').innerText = rounds;
    console.log('com wins');
  } else if (userChoice === 'paper' && comChoice === 'scissors') {
    comPoints++;
    document.querySelector('.comPoints').innerText = comPoints;
    document.querySelector('.roundsRemain').innerText = rounds;
    console.log('com wins');
  }
  gameOver();
}

function gameOver() {
  if (rounds === 0 && comPoints > userPoints) {
    alert('The Computer Wins! Play again.');
  } else if (rounds === 0 && userPoints > comPoints) {
    alert('The User Wins! Play again.');
  } else if (rounds === 0 && userPoints === comPoints) {
    alert("It's a tie! Play again.");
  }
}

function start() {
  rounds = 10;
  userPoints = 0;
  comPoints = 0;
  userChoice = 'none';
  comChoice = 'none';
  random = 0;

  document.querySelector('.userChoice').innerText = userChoice;
  document.querySelector('.comChoice').innerText = comChoice;
  document.querySelector('.userPoints').innerText = userPoints;
  document.querySelector('.comPoints').innerText = comPoints;
  document.querySelector('.roundsRemain').innerText = rounds;
}
