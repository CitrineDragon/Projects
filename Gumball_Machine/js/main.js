document.querySelector(".quarter").addEventListener("click", addQuarter);
document.querySelector(".dime").addEventListener("click", addDime);
document.querySelector(".nickel").addEventListener("click", addNickel);
document.querySelector(".penny").addEventListener("click", addPenny);

function addQuarter() {
  Gumball(25);
}

function addDime() {
  Gumball(10);
}

function addNickel() {
  Gumball(5);
}

function addPenny() {
  Gumball(1);
}

let gumball = [
  "Yellow Gumball",
  "Pink Gumball",
  "Blue Gumball",
  "Green Gumball",
  "Red Gumball",
  "Pink Gumball",
  "Orange Gumball",
  "Blue Gumball",
  "White Gumball",
];

let count = 0;
let i = 0;

function Gumball(coins) {
  count = count + coins;
  need = 25 - count;
  console.log(coins);
  if (count >= 25 && i === gumball.length) {
    alert("Out of Gumballs, try back tomorrow!");
    return;
  } else if (count >= 25) {
    prize = gumball[i++];
    document.querySelector(".results").innerText = prize;
    count = 0;
  } else if (count < 25) {
    document.querySelector(".results").innerText =
      "Please enter " + need + " more cents";
  }
}
