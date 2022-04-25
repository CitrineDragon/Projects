// https://aztro.readthedocs.io/en/latest/

document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  let sign = document.querySelector('.signs').value;
  const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;

  fetch(URL, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((json) => {
      const date = json.current_date;
      const description = json.description;
      const luckyNumber = json.lucky_number;
      console.log(date, description, luckyNumber);
      document.querySelector('.getDate').innerText = date;
      document.querySelector('.getNumber').innerText = luckyNumber;
      document.querySelector('.getInfo').innerText = description;
    });
}
