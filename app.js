const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginFormSubmit(event) {
    event.preventDefault();
    const userName = loginFormInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("userName", userName);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", loginFormSubmit);