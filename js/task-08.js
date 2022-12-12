const formElement = document.querySelector("form.login-form");

const submitForm = (event) => {

event.preventDefault()

const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь добр заполни все поля")
  }

const result = {
    email: email.value,
    password: password.value
}

  console.log(result)

  event.currentTarget.reset();

}

formElement.addEventListener('submit', submitForm)
