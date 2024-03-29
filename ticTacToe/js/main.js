const PLAYER1 = 'X';
const PLAYER2 = 'O';
const EMPTY = '';

let player = PLAYER1;
const reset = document.querySelector('.reset');
const results = document.querySelector('.results');
const squares = document.querySelectorAll('.square');
const pressed = document.querySelectorAll(
  '.one, .two, .three, .four, .five, .six, .seven, .eight, .nine'
);
reset.addEventListener('click', resetBoard);
squares.forEach((square) => {
  square.addEventListener('click', clickSquare);
});

class Gameboard {
  constructor() {
    this.board = Array(3); // board of 3 x 3
    for (let i = 0; i < 3; i++) {
      this.board[i] = Array(3).fill(EMPTY);
    }
    this.moves = 0;
    this.gameOver = false;
  }

  /**  Make a move at position (row, column) **/
  makeMove(player, row, column) {
    // console.log(player);
    if (this.gameOver) return;
    // console.log(`${row}, ${column} = `, this.board);
    // console.log(this.board[row][column]);
    if (this.board[row][column] === EMPTY) {
      // Check if the position has already been played
      this.board[row][column] = player;
      this.moves++;
      results.innerHTML = '';
      return true;
    } else {
      results.innerHTML = 'This position has already been played';
      return false;
    }
  }

  checkWin() {
    // Check rows
    if (
      this.board[0][0] === this.board[0][1] &&
      this.board[0][1] === this.board[0][2] &&
      this.board[0][0] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }
    if (
      this.board[1][0] === this.board[1][1] &&
      this.board[1][1] === this.board[1][2] &&
      this.board[1][0] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }
    if (
      this.board[2][0] === this.board[2][1] &&
      this.board[2][1] === this.board[2][2] &&
      this.board[2][0] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }

    // Check columns
    if (
      this.board[0][0] === this.board[1][0] &&
      this.board[1][0] === this.board[2][0] &&
      this.board[0][0] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }
    if (
      this.board[0][1] === this.board[1][1] &&
      this.board[1][1] === this.board[2][1] &&
      this.board[0][1] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }
    if (
      this.board[0][2] === this.board[1][2] &&
      this.board[1][2] === this.board[2][2] &&
      this.board[0][2] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }

    // Check diagonals
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2] !== EMPTY
    ) {
      declareWinner();
      this.gameOver = true;
    }

    // Check to see if 9 moves have been made
    if (this.moves >= 9 && !this.gameOver) {
      results.innerHTML = 'The game was a draw';
      this.gameOver = true;
    }
  }
}

let gameboard = new Gameboard();

function clickSquare(event) {
  let successfulMove;
  switch (event.target.classList[1]) {
    case 'one':
      successfulMove = gameboard.makeMove(player, 0, 0);
      break;
    case 'two':
      successfulMove = gameboard.makeMove(player, 0, 1);
      break;
    case 'three':
      successfulMove = gameboard.makeMove(player, 0, 2);
      break;
    case 'four':
      successfulMove = gameboard.makeMove(player, 1, 0);
      break;
    case 'five':
      successfulMove = gameboard.makeMove(player, 1, 1);
      break;
    case 'six':
      successfulMove = gameboard.makeMove(player, 1, 2);
      break;
    case 'seven':
      successfulMove = gameboard.makeMove(player, 2, 0);
      break;
    case 'eight':
      successfulMove = gameboard.makeMove(player, 2, 1);
      break;
    case 'nine':
      successfulMove = gameboard.makeMove(player, 2, 2);
      break;
    default:
      break;
  }

  if (successfulMove) {
    event.target.innerText = player;
    gameboard.checkWin();
    player = getNextPlayer();
  }
}

function getNextPlayer() {
  if (player === PLAYER1) {
    return PLAYER2;
  } else {
    return PLAYER1;
  }
}

function declareWinner() {
  return player === 'X'
    ? (results.innerHTML = 'Player 1 wins')
    : (results.innerHTML = 'Player 2 wins');
}

function resetBoard() {
  location.reload();
}

for (const press of pressed) {
  press.addEventListener('click', function handleClick() {
    press.classList.add('pressed');
  });
}
