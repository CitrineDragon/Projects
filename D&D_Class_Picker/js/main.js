document.querySelector(".human").addEventListener("click", picHuman);
document.querySelector(".elf").addEventListener("click", picElf);
document.querySelector(".dwarf").addEventListener("click", picDwarf);
document.querySelector(".halfling").addEventListener("click", picHalfling);
document.querySelector(".gnome").addEventListener("click", picGnome);
document.querySelector(".other").addEventListener("click", picOther);

function picHuman() {
  document.querySelector(".heroImg").src =
    "https://github.com/CitrineDragon/Images/blob/master/DND_Human.jpg?raw=true";
  document.querySelector(".test").style.color = "rgba(229, 7, 18, 1)";
}

function picElf() {
  document.querySelector(".heroImg").src =
    "https://github.com/CitrineDragon/Images/blob/master/DND_Elf.jpg?raw=true";
}

function picDwarf() {
  document.querySelector(".heroImg").src =
    "https://github.com/CitrineDragon/Images/blob/master/DND_Dwarf.jpg?raw=true";
}

function picHalfling() {
  document.querySelector(".heroImg").src =
    "https://github.com/CitrineDragon/Images/blob/master/DND_Halfling.jpg?raw=true";
}

function picGnome() {
  document.querySelector(".heroImg").src =
    "https://github.com/CitrineDragon/Images/blob/master/DND_Gnome.jpg?raw=true";
}

function picOther() {
  document.querySelector(".heroImg").src =
    "https://github.com/CitrineDragon/Images/blob/master/DND_Other.png?raw=true";
}
