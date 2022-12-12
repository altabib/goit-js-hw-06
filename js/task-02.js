const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('ul#ingredients')


const elements = ingredients.map(ingredient => {

  let elementList = document.createElement('li');
  elementList.classList.add("item");

  elementList.textContent = ingredient;

  return elementList
  

})


ulIngredients.append(...elements);

console.log(ulIngredients)
