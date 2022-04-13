document.querySelector('.build').addEventListener('click', validateInput);
document.querySelector('.reset').addEventListener('click', resetPage);

function validateInput() {
  let num1 = Number(document.querySelector('.boardHeight').value);
  let num2 = Number(document.querySelector('.boardWidth').value);

  console.log(num1, num2);

  if (Number.isNaN(num1) === true || Number.isNaN(num2) === true) {
    resetPage();
  } else if (num1 > 0 && num2 > 0) {
    chessboard(num1, num2);
  } else {
    alert('Please enter whole numbers greater than 0');
  }
}

function chessboard(height, width) {
  delElements();
  let maxWidth = width * 15;
  document.querySelector('.boardContainer').style.width = maxWidth + 'px';

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if ((i + j) % 2 === 0) {
        whiteDiv();
      } else {
        blackDiv();
      }
    }
  }

  function blackDiv() {
    let element = document.createElement('div');
    element.setAttribute('class', 'black addElement');
    document.querySelector('.boardContainer').appendChild(element);
  }
  function whiteDiv() {
    let element = document.createElement('div');
    element.setAttribute('class', 'white addElement');
    document.querySelector('.boardContainer').appendChild(element);
  }
}

function resetPage() {
  document.getElementById('myForm').reset();
  delElements();
}

function delElements() {
  let matches = document.querySelectorAll('div.addElement');
  for (let i = 0; i < matches.length; i++) {
    matches[i].remove();
  }
}
