function getLyrics() {
  let obj = {};
  let artist;
  let title;

  this.fetch = function () {
    artist = document.querySelector('.artistName').value;
    title = document.querySelector('.songName').value;

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then((res) => res.json())

      .then((data) => {
        // console.log(data.lyrics);
        obj = JSON.parse(JSON.stringify(data));
        this.getUpdate();
      })

      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  this.getUpdate = function () {
    obj = obj.lyrics.replaceAll('\n\n', '\n');
    document.querySelector('.lyrics').innerText = obj;
  };
}

let lyrics = new getLyrics();

document
  .querySelector('.artistButton')
  .addEventListener('click', lyrics.fetch.bind(lyrics));
