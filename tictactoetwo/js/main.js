function ticTacToe() {
  let count = 0;
}

function placeXOrO() {
  let count = 0;
  if (count % 2 === 0) {
    return 'X';
  } else {
    return 'O';
  }

  function fillOne() {
    document.querySelector('.one').innerText = getXOrO();
    count++;
  }
  function fillTwo() {
    document.querySelector('.one').innerText = getXOrO();
    count++;
  }
  function fillThree() {
    document.querySelector('.one').innerText = 'x';
  }
  function fillFour() {
    document.querySelector('.one').innerText = 'x';
  }
  function fillFive() {
    document.querySelector('.one').innerText = 'x';
  }
  function fillSix() {
    document.querySelector('.one').innerText = 'x';
  }
  function fillSeven() {
    document.querySelector('.one').innerText = 'x';
  }
  function fillEight() {
    document.querySelector('.one').innerText = 'x';
  }
  function fillNine() {
    document.querySelector('.one').innerText = 'x';
  }
}

document.querySelector('.one').addEventListener('click', fillOne);
document.querySelector('.two').addEventListener('click', fillTwo);
document.querySelector('.three').addEventListener('click', fillThree);
document.querySelector('.four').addEventListener('click', fillFour);
document.querySelector('.five').addEventListener('click', fillFive);
document.querySelector('.six').addEventListener('click', fillSix);
document.querySelector('.seven').addEventListener('click', fillSeven);
document.querySelector('.eight').addEventListener('click', fillEight);
document.querySelector('.nine').addEventListener('click', fillNine);
