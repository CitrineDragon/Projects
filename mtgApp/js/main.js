function getMTG() {
  let obj = {};

  this.fetch = function () {
    fetch(`https://opentdb.com/api.php?amount=10`)
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        obj = JSON.parse(JSON.stringify(data));
        this.getUpdate();
      })

      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  this.getUpdate = function () {
    document.querySelector('.question').innerHTML = obj.results[0].question;
    document.querySelector('.choices').innerHTML =
      obj.results[0].incorrect_answers;
    document.querySelector('.answer').innerHTML = obj.results[0].correct_answer;
  };
}

let card = new getMTG();

document
  .querySelector('.doStuff')
  .addEventListener('click', card.fetch.bind(card));
