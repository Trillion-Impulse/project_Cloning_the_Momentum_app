const loginForm = document.querySelector("#login-form");
const loginFormInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoBox = document.querySelector("#todo-box");

const HIDDEN_CLASSNAME = "hidden";
const TEXT_FOCUS_IN = "text-focus-in";
const USERNAME_KEY = "userName";

function loginFormSubmit(event) {
    event.preventDefault();
    const userName = loginFormInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("userName", userName);
    paintGreetings(userName);
    revealTodobox();
}

function paintGreetings(name) {
    greeting.innerText = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(TEXT_FOCUS_IN);
}

const savedUsername = localStorage.getItem("userName");

function revealTodobox(){
    todoBox.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginFormSubmit);
}
else {
    paintGreetings(savedUsername);
    revealTodobox();
}