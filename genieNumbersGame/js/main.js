let highRange = 100;
let lowRange = 1;
let mid = 50;
let total = 1;

document.querySelector('.lower').addEventListener('click', lower);
document.querySelector('.higher').addEventListener('click', higher);
document.querySelector('.newGame').addEventListener('click', newGame);
document.querySelector('.correct').addEventListener('click', correct);

function newGame() {
  document.querySelector('.output').classList.remove('hidden');
  document.querySelector('.output').innerText =
    '50, is your number Higher or Lower?';
  document.querySelector('.guessText').classList.add('hidden');
  document.querySelector('.totalGuesses').classList.add('hidden');
  highRange = 100;
  lowRange = 1;
  mid = 50;
  total = 1;
}

function lower() {
  highRange = mid - 1;
  calc();
  document.querySelector('.output').innerText = mid;
  if (mid === lowRange) {
    correct();
  } else {
    console.log(mid);
  }
}

function higher() {
  lowRange = mid + 1;
  calc();
  document.querySelector('.output').innerText = mid;
  if (mid === highRange && mid === lowRange) {
    correct();
  } else {
    console.log(mid);
  }
}

function calc() {
  mid = Math.floor((highRange + lowRange) / 2);
  console.log('low: ' + lowRange);
  console.log('mid: ' + mid);
  console.log('high: ' + highRange);
  total++;
}

function correct() {
  document.querySelector('.guessText').classList.remove('hidden');
  document.querySelector('.totalGuesses').classList.remove('hidden');
  document.querySelector('.totalGuesses').innerText = total;
}

// // Create a loop that tests i until i 100
// for(let i = 1; i <= 100; i++){
//   for(let n = 1; n <= 8; n++){
//     console.log(`mid${mid} i: ${i} n: ${n}`);
//     if(n > 7){
//       console.log(`not guess ${i}`);
//       break;
//     } else if(mid === i){
//       console.log(`Answer guessed ${i}`)
//       newGame();
//       n = 800;
//     } else if(i < mid){
//       lower()
//     } else if(i>mid){
//       higher()
//     } else{
//       newGame()
//     }
//   }
// }
