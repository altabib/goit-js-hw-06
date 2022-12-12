const fontSizeControlElement = document.querySelector('input#font-size-control');
const textElement = document.querySelector('span#text')


const resizing = (event) =>{
    return textElement.style.fontSize = event.currentTarget.value+"px";
}

fontSizeControlElement.addEventListener('input', resizing)