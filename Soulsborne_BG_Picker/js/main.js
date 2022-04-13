document.querySelector(".des").addEventListener("click", desBG);
document.querySelector(".das").addEventListener("click", dasBG);
document.querySelector(".das2").addEventListener("click", das2BG);
document.querySelector(".bb").addEventListener("click", bbBG);
document.querySelector(".das3").addEventListener("click", das3BG);
document.querySelector(".sekiro").addEventListener("click", sekiroBG);
document.querySelector(".elden").addEventListener("click", eldenBG);
document.querySelector(".desk").addEventListener("click", resetBG);

function desBG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/DES_Main.jpg?raw=true')";
}

function dasBG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/DAS_Main.jpg?raw=true')";
}

function das2BG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/DAS2_Main.jpg?raw=true')";
}

function bbBG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/BB_Main.jpg?raw=true')";
}

function das3BG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/DAS3_Main.png?raw=true')";
}

function sekiroBG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/Sekiro_Main.jpg?raw=true')";
}

function eldenBG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/Elden_Ring_Main.jpg?raw=true')";
}

function resetBG() {
  document.querySelector(".monitor").style.backgroundImage =
    "url('https://github.com/CitrineDragon/Images/blob/master/Windows_BG.jpg?raw=true')";
}
