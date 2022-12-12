const ulWithIdCategories = document.querySelector('ul#categories');
const liItem = ulWithIdCategories.querySelectorAll('li.item');
const arrayLiItem = [...liItem];

console.log(`Number of categories:`, liItem.length );

arrayLiItem.map(item => {

const h2Element = item.querySelector('h2');
const elementInCategory = item.querySelectorAll('li');
 


console.log(`Category:`, h2Element.textContent)
console.log(`Elements:`, elementInCategory.length)

}
  )