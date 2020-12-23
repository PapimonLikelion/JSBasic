//queryselector는 찾은 첫 번째꺼 갖고 옴
const form = document.querySelector(".js-form");
input = form.querySelector("input");
greeting = document.querySelector(".js-greetings");

const USER_LOCAL_STORAGE = "currentUser";
const SHOWING_CLASS_NAME = "showing";

function saveNameInLocalStorage(name) {
    localStorage.setItem(USER_LOCAL_STORAGE, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const userInputName = input.value;
    paintGreeting(userInputName);
    saveNameInLocalStorage(userInputName);
}

function askForName() {
    form.classList.add(SHOWING_CLASS_NAME);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CLASS_NAME);
    greeting.classList.add(SHOWING_CLASS_NAME);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();