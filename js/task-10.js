function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateElement = document.querySelector('button[data-create]');
const buttonDestroyElement = document.querySelector('button[data-destroy]');
const inputNumberElement = document.querySelector('input[type=number]');
const divBoxesElement = document.querySelector('div#boxes');


const create = () => {

  let amount = inputNumberElement.value;

  function createBoxes(amount) {

  for(let i=0; i<amount; i+=1) {
   let cre = document.createElement("div");
   let color = getRandomHexColor();
   let presentValueWidthHeight = 30;
  
   presentValueWidthHeight+= 10*i
   
 

   cre.style.width = `${presentValueWidthHeight}px`;
   cre.style.height = `${presentValueWidthHeight}px`;
   cre.style.backgroundColor = color;

   divBoxesElement.append(cre)
  }
  }
  createBoxes(amount)
}

const destroy = () => {
  divBoxesElement.innerHTML = " ";
}

buttonCreateElement.addEventListener('click', create)
buttonDestroyElement.addEventListener('click', destroy)