const toDoForm = document.querySelector(".js-toDoForm");
    toDoInput = toDoForm.querySelector("input");
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = 'toDos';

function printToDo (text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✂";
    const h4 = document.createElement("h4");
    h4.innerText = text;
    li.appendChild(h4);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const userToDoInput = toDoInput.value;
    printToDo(userToDoInput);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LOCAL_STORAGE);
    if (toDos !== null) {
    }
}

function init () {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();