const loginFormInput = document.querySelector("#login-form input");
const loginFormButton = document.querySelector("#login-form button");

function loginButtonClick() {
    console.log("hello", loginFormInput.value);
}

loginFormButton.addEventListener("click", loginButtonClick);