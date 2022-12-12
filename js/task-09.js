function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector('body');
const spanColorElement = document.querySelector('span.color');
const buttonChangeColor = document.querySelector('button.change-color');

const colorChange = () => {
  const color = getRandomHexColor();

  bodyElement.style.backgroundColor = color;
  spanColorElement.textContent = color;

}



buttonChangeColor.addEventListener('click', colorChange)