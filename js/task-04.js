let counterValue = 0;


const value = document.querySelector('span#value')
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');



const minusOne = () => {
    counterValue -= 1;

    return value.textContent = counterValue
};

const plusOne = () => {
    counterValue += 1;

    return value.textContent = counterValue

}
 

decrement.addEventListener("click", minusOne);

increment.addEventListener("click", plusOne);