const nameInput = document.querySelector('input#name-input');
const spanNameOutput = document.querySelector('span#name-output');


const textReplacement = (event) => {

if(event.currentTarget.value === ""){

 return   spanNameOutput.textContent="Anonymous";
    
}

spanNameOutput.textContent=event.currentTarget.value;
        
}

nameInput.addEventListener('input', textReplacement);
