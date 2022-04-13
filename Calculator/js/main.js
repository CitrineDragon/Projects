document.querySelector(".zero").addEventListener("click", pushZero);
document.querySelector(".one").addEventListener("click", pushOne);
document.querySelector(".two").addEventListener("click", pushTwo);
document.querySelector(".three").addEventListener("click", pushThree);
document.querySelector(".four").addEventListener("click", pushFour);
document.querySelector(".five").addEventListener("click", pushFive);
document.querySelector(".six").addEventListener("click", pushSix);
document.querySelector(".seven").addEventListener("click", pushSeven);
document.querySelector(".eight").addEventListener("click", pushEight);
document.querySelector(".nine").addEventListener("click", pushNine);
document.querySelector(".plus").addEventListener("click", pushPlus);
document.querySelector(".minus").addEventListener("click", pushMinus);
document.querySelector(".divide").addEventListener("click", pushDivide);
document.querySelector(".multiply").addEventListener("click", pushMultiply);
document.querySelector(".equals").addEventListener("click", pushEquals);
document.querySelector(".clear").addEventListener("click", pushClear);
document
  .querySelector(".bottomContainer")
  .addEventListener("click", pushUpdate);

let total = 0;
let num1 = "";
let num2 = "";
let operator = "";
let display = "";

function pushZero() {
  if (operator === "") {
    num1 += "0";
  } else {
    num2 += "0";
  }
}

function pushOne() {
  if (operator === "") {
    num1 += "1";
  } else {
    num2 += "1";
  }
}

function pushTwo() {
  if (operator === "") {
    num1 += "2";
  } else {
    num2 += "2";
  }
}

function pushThree() {
  if (operator === "") {
    num1 += "3";
  } else {
    num2 += "3";
  }
}

function pushFour() {
  if (operator === "") {
    num1 += "4";
  } else {
    num2 += "4";
  }
}

function pushFive() {
  if (operator === "") {
    num1 += "5";
  } else {
    num2 += "5";
  }
}

function pushSix() {
  if (operator === "") {
    num1 += "6";
  } else {
    num2 += "6";
  }
}

function pushSeven() {
  if (operator === "") {
    num1 += "7";
  } else {
    num2 += "7";
  }
}

function pushEight() {
  if (operator === "") {
    num1 += "8";
  } else {
    num2 += "8";
  }
}

function pushNine() {
  if (operator === "") {
    num1 += "9";
  } else {
    num2 += "9";
  }
}

function pushPlus() {
  operator = "+";
}

function pushMinus() {
  operator = "-";
}

function pushDivide() {
  operator = "/";
}

function pushMultiply() {
  operator = "*";
}

function pushEquals() {
  num1 = num1 * 1;
  num2 = num2 * 1;

  if (operator === "+") {
    total = num1 + num2;
  } else if (operator === "-") {
    total = num1 - num2;
  } else if (operator === "*") {
    total = num1 * num2;
  } else if (operator === "/") {
    total = num1 / num2;
  } else if (operator === "") {
    document.querySelector(".result").innerText = "Error";
  }

  document.querySelector(".result").innerText = total;
}

function pushUpdate() {
  display = num1 + operator + num2;
  document.querySelector(".problem").innerText = display;
}

function pushClear() {
  total = 0;
  num1 = "";
  num2 = "";
  operator = "";
  document.querySelector(".problem").innerText = "";
  document.querySelector(".result").innerText = "";

  function doLater() {
    document.querySelector(".problem").innerText = "0";
    document.querySelector(".result").innerText = "";
  }

  setTimeout(doLater, 100);
}
