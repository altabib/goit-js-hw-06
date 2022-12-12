const inputElement = document.querySelector('input#validation-input');


const validator = (event) => {
   
    if (event.currentTarget.value.length !== Number(event.currentTarget.dataset.length)) {
        inputElement.classList.add("invalid");

        inputElement.classList.remove("valid");
    
     } else {

        inputElement.classList.add("valid");
      
        inputElement.classList.remove("invalid");  
     }
   
}


inputElement.addEventListener('blur', validator);