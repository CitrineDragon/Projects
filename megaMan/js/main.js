const brightMan = document.querySelector(".brightMan");
const toadMan = document.querySelector(".toadMan");
const drillMan = document.querySelector(".drillMan");
const pharaohMan = document.querySelector(".pharaohMan");
const ringMan = document.querySelector(".ringMan");
const dustMan = document.querySelector(".dustMan");
const diveMan = document.querySelector(".diveMan");
const skullMan = document.querySelector(".skullMan");

brightMan.addEventListener("click", playBright);
toadMan.addEventListener("click", playToad);
drillMan.addEventListener("click", playDrill);
pharaohMan.addEventListener("click", playPharaoh);
ringMan.addEventListener("click", playRing);
dustMan.addEventListener("click", playDust);
diveMan.addEventListener("click", playDive);
skullMan.addEventListener("click", playSkull);

function playBright() {
  document.querySelector(".brightManSide").classList.toggle("hidden");
  document.querySelector(".brightManMain").classList.toggle("hidden");
  document.querySelector(".brightManSide").classList.add("bossSideAppear");
  document.querySelector(".brightManMain").classList.add("bossMainAppear");

  document.querySelector(".toadManSide").classList.add("hidden");
  document.querySelector(".toadManMain").classList.add("hidden");
  document.querySelector(".drillManSide").classList.add("hidden");
  document.querySelector(".drillManMain").classList.add("hidden");
  document.querySelector(".pharaohManSide").classList.add("hidden");
  document.querySelector(".pharaohManMain").classList.add("hidden");
  document.querySelector(".ringManSide").classList.add("hidden");
  document.querySelector(".ringManMain").classList.add("hidden");
  document.querySelector(".dustManSide").classList.add("hidden");
  document.querySelector(".dustManMain").classList.add("hidden");
  document.querySelector(".diveManSide").classList.add("hidden");
  document.querySelector(".diveManMain").classList.add("hidden");
  document.querySelector(".skullManSide").classList.add("hidden");
  document.querySelector(".skullManMain").classList.add("hidden");
}

function playToad() {
  document.querySelector(".toadManSide").classList.toggle("hidden");
  document.querySelector(".toadManMain").classList.toggle("hidden");
  document.querySelector(".toadManSide").classList.add("bossSideAppear");
  document.querySelector(".toadManMain").classList.add("bossMainAppear");

  document.querySelector(".brightManSide").classList.add("hidden");
  document.querySelector(".brightManMain").classList.add("hidden");
  document.querySelector(".drillManSide").classList.add("hidden");
  document.querySelector(".drillManMain").classList.add("hidden");
  document.querySelector(".pharaohManSide").classList.add("hidden");
  document.querySelector(".pharaohManMain").classList.add("hidden");
  document.querySelector(".ringManSide").classList.add("hidden");
  document.querySelector(".ringManMain").classList.add("hidden");
  document.querySelector(".dustManSide").classList.add("hidden");
  document.querySelector(".dustManMain").classList.add("hidden");
  document.querySelector(".diveManSide").classList.add("hidden");
  document.querySelector(".diveManMain").classList.add("hidden");
  document.querySelector(".skullManSide").classList.add("hidden");
  document.querySelector(".skullManMain").classList.add("hidden");
}

function playDrill() {
  document.querySelector(".drillManSide").classList.toggle("hidden");
  document.querySelector(".drillManMain").classList.toggle("hidden");
  document.querySelector(".drillManSide").classList.add("bossSideAppear");
  document.querySelector(".drillManMain").classList.add("bossMainAppear");

  document.querySelector(".brightManSide").classList.add("hidden");
  document.querySelector(".brightManMain").classList.add("hidden");
  document.querySelector(".toadManSide").classList.add("hidden");
  document.querySelector(".toadManMain").classList.add("hidden");
  document.querySelector(".pharaohManSide").classList.add("hidden");
  document.querySelector(".pharaohManMain").classList.add("hidden");
  document.querySelector(".ringManSide").classList.add("hidden");
  document.querySelector(".ringManMain").classList.add("hidden");
  document.querySelector(".dustManSide").classList.add("hidden");
  document.querySelector(".dustManMain").classList.add("hidden");
  document.querySelector(".diveManSide").classList.add("hidden");
  document.querySelector(".diveManMain").classList.add("hidden");
  document.querySelector(".skullManSide").classList.add("hidden");
  document.querySelector(".skullManMain").classList.add("hidden");
}

function playPharaoh() {
  document.querySelector(".pharaohManSide").classList.toggle("hidden");
  document.querySelector(".pharaohManMain").classList.toggle("hidden");
  document.querySelector(".pharaohManSide").classList.add("bossSideAppear");
  document.querySelector(".pharaohManMain").classList.add("bossMainAppear");

  document.querySelector(".brightManSide").classList.add("hidden");
  document.querySelector(".brightManMain").classList.add("hidden");
  document.querySelector(".toadManSide").classList.add("hidden");
  document.querySelector(".toadManMain").classList.add("hidden");
  document.querySelector(".drillManSide").classList.add("hidden");
  document.querySelector(".drillManMain").classList.add("hidden");
  document.querySelector(".ringManSide").classList.add("hidden");
  document.querySelector(".ringManMain").classList.add("hidden");
  document.querySelector(".dustManSide").classList.add("hidden");
  document.querySelector(".dustManMain").classList.add("hidden");
  document.querySelector(".diveManSide").classList.add("hidden");
  document.querySelector(".diveManMain").classList.add("hidden");
  document.querySelector(".skullManSide").classList.add("hidden");
  document.querySelector(".skullManMain").classList.add("hidden");
}

function playRing() {
  document.querySelector(".ringManSide").classList.toggle("hidden");
  document.querySelector(".ringManMain").classList.toggle("hidden");
  document.querySelector(".ringManSide").classList.add("bossSideAppear");
  document.querySelector(".ringManMain").classList.add("bossMainAppear");

  document.querySelector(".brightManSide").classList.add("hidden");
  document.querySelector(".brightManMain").classList.add("hidden");
  document.querySelector(".toadManSide").classList.add("hidden");
  document.querySelector(".toadManMain").classList.add("hidden");
  document.querySelector(".drillManSide").classList.add("hidden");
  document.querySelector(".drillManMain").classList.add("hidden");
  document.querySelector(".pharaohManSide").classList.add("hidden");
  document.querySelector(".pharaohManMain").classList.add("hidden");
  document.querySelector(".dustManSide").classList.add("hidden");
  document.querySelector(".dustManMain").classList.add("hidden");
  document.querySelector(".diveManSide").classList.add("hidden");
  document.querySelector(".diveManMain").classList.add("hidden");
  document.querySelector(".skullManSide").classList.add("hidden");
  document.querySelector(".skullManMain").classList.add("hidden");
}

function playDust() {
  document.querySelector(".dustManSide").classList.toggle("hidden");
  document.querySelector(".dustManMain").classList.toggle("hidden");
  document.querySelector(".dustManSide").classList.add("bossSideAppear");
  document.querySelector(".dustManMain").classList.add("bossMainAppear");

  document.querySelector(".brightManSide").classList.add("hidden");
  document.querySelector(".brightManMain").classList.add("hidden");
  document.querySelector(".toadManSide").classList.add("hidden");
  document.querySelector(".toadManMain").classList.add("hidden");
  document.querySelector(".drillManSide").classList.add("hidden");
  document.querySelector(".drillManMain").classList.add("hidden");
  document.querySelector(".pharaohManSide").classList.add("hidden");
  document.querySelector(".pharaohManMain").classList.add("hidden");
  document.querySelector(".ringManSide").classList.add("hidden");
  document.querySelector(".ringManMain").classList.add("hidden");
  document.querySelector(".diveManSide").classList.add("hidden");
  document.querySelector(".diveManMain").classList.add("hidden");
  document.querySelector(".skullManSide").classList.add("hidden");
  document.querySelector(".skullManMain").classList.add("hidden");
}

function playDive() {
  document.querySelector(".diveManSide").classList.toggle("hidden");
  document.querySelector(".diveManMain").classList.toggle("hidden");
  document.querySelector(".diveManSide").classList.add("bossSideAppear");
  document.querySelector(".diveManMain").classList.add("bossMainAppear");

  document.querySelector(".brightManSide").classList.add("hidden");
  document.querySelector(".brightManMain").classList.add("hidden");
  document.querySelector(".toadManSide").classList.add("hidden");
  document.querySelector(".toadManMain").classList.add("hidden");
  document.querySelector(".drillManSide").classList.add("hidden");
  document.querySelector(".drillManMain").classList.add("hidden");
  document.querySelector(".pharaohManSide").classList.add("hidden");
  document.querySelector(".pharaohManMain").classList.add("hidden");
  document.querySelector(".ringManSide").classList.add("hidden");
  document.querySelector(".ringManMain").classList.add("hidden");
  document.querySelector(".dustManSide").classList.add("hidden");
  document.querySelector(".dustManMain").classList.add("hidden");
  document.querySelector(".skullManSide").classList.add("hidden");
  document.querySelector(".skullManMain").classList.add("hidden");
}

function playSkull() {
  document.querySelector(".skullManSide").classList.toggle("hidden");
  document.querySelector(".skullManMain").classList.toggle("hidden");
  document.querySelector(".skullManSide").classList.add("bossSideAppear");
  document.querySelector(".skullManMain").classList.add("bossMainAppear");

  document.querySelector(".brightManSide").classList.add("hidden");
  document.querySelector(".brightManMain").classList.add("hidden");
  document.querySelector(".toadManSide").classList.add("hidden");
  document.querySelector(".toadManMain").classList.add("hidden");
  document.querySelector(".drillManSide").classList.add("hidden");
  document.querySelector(".drillManMain").classList.add("hidden");
  document.querySelector(".pharaohManSide").classList.add("hidden");
  document.querySelector(".pharaohManMain").classList.add("hidden");
  document.querySelector(".ringManSide").classList.add("hidden");
  document.querySelector(".ringManMain").classList.add("hidden");
  document.querySelector(".dustManSide").classList.add("hidden");
  document.querySelector(".dustManMain").classList.add("hidden");
  document.querySelector(".diveManSide").classList.add("hidden");
  document.querySelector(".diveManMain").classList.add("hidden");
}
