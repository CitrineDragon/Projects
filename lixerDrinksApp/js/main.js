function GetDrinks() {
  let count = 0;
  let lastResult = 0;
  let obj = {};

  // Fetches and stores the obj for a name search
  this.fetch = function () {
    count = 0;
    let drinks = document.querySelector('.nameSearchField').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
      .then((res) => res.json())

      .then((data) => {
        obj = JSON.parse(JSON.stringify(data));
        lastResult = data.drinks.length - 1;
        // console.log(obj);
        this.getUpdate();
      })

      .catch((err) => {
        console.log(`error ${err}`);
      });
    setInterval(() => this.getNext(), 5000);
  };

  // Fetches and stores the obj for a name search
  this.fetchRandom = function () {
    count = 0;
    document.querySelector('.nameSearchField').value = null;

    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => res.json())

      .then((data) => {
        obj = JSON.parse(JSON.stringify(data));
        lastResult = data.drinks.length - 1;
        // console.log(obj);
        this.getUpdate();
      })

      .catch((err) => {
        console.log(`error ${err}`);
      });
  };

  // Increments the count to display the next available drink
  this.getNext = function () {
    count === lastResult ? (count = 0) : count++;
    // console.log(count);

    this.getUpdate();
  };

  // Decrements the count to display the previous drink
  this.getPrevious = function () {
    count === 0 ? (count = lastResult) : count--;
    // console.log(count);

    this.getUpdate();
  };

  // Pushes the content to the screen
  this.getUpdate = function () {
    let ingredientsArray = [
      obj.drinks[count].strIngredient1,
      obj.drinks[count].strIngredient2,
      obj.drinks[count].strIngredient3,
      obj.drinks[count].strIngredient4,
      obj.drinks[count].strIngredient5,
      obj.drinks[count].strIngredient6,
      obj.drinks[count].strIngredient7,
      obj.drinks[count].strIngredient8,
      obj.drinks[count].strIngredient9,
      obj.drinks[count].strIngredient10,
      obj.drinks[count].strIngredient11,
      obj.drinks[count].strIngredient12,
      obj.drinks[count].strIngredient13,
      obj.drinks[count].strIngredient14,
      obj.drinks[count].strIngredient15,
    ];

    //Removing null ingredients in array
    let result = ingredientsArray.filter((i) => i !== null);

    document.querySelector('.drinkTitle').innerText =
      obj.drinks[count].strDrink;
    document.querySelector('.drinkIMG').src = obj.drinks[count].strDrinkThumb;
    document.querySelector('.ingredientInfoList').innerText = result.join('\n');
    document.querySelector('.instructionInfoList').innerText =
      obj.drinks[count].strInstructions;
    document.querySelector('.resultText').innerText = lastResult + 1;
    document.querySelector('.countText').innerText = count + 1;
  };

  // Toggles the ingredients info
  this.viewIngredients = function () {
    document.querySelector('.ingredientInfoList').classList.toggle('hidden');
  };

  // Toggles the instructions info
  this.viewInstructions = function () {
    document.querySelector('.instructionInfoList').classList.toggle('hidden');
  };
}

let drink = new GetDrinks();

document
  .querySelector('.nameSearchButton')
  .addEventListener('click', drink.fetch.bind(drink));
document
  .querySelector('.randomDrinkSearch')
  .addEventListener('click', drink.fetchRandom.bind(drink));
document
  .querySelector('.fa-angles-left')
  .addEventListener('click', drink.getPrevious.bind(drink));
document
  .querySelector('.fa-angles-right')
  .addEventListener('click', drink.getNext.bind(drink));
document
  .querySelector('.ingredientInfoBtn')
  .addEventListener('click', drink.viewIngredients);
document
  .querySelector('.instructionInfoBtn')
  .addEventListener('click', drink.viewInstructions);
