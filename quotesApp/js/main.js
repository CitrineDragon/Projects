function getQuotes() {
  let obj = {};
  let artist;
  let title;

  this.fetch = function () {
    fetch(`https://api.quotable.io/quotes`)
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        obj = JSON.parse(JSON.stringify(data));
      })

      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  this.fetchByAuthor = function () {
    fetch(`https://api.quotable.io/quotes?author=henry-ford`)
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        obj = JSON.parse(JSON.stringify(data));
      })

      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  this.fetchRandom = function () {
    fetch(`https://api.quotable.io/random`)
      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        obj = JSON.parse(JSON.stringify(data));
      })

      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  this.getUpdate = function () {};
}

let quotes = new getQuotes();

document
  .querySelector('button')
  .addEventListener('click', quotes.fetchByAuthor.bind(quotes));
