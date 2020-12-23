const toDoForm = document.querySelector(".js-toDoForm");
    toDoInput = toDoForm.querySelector("input");
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = 'toDos';
let TODOS_ARRAY = [];

function deleteToDoInLocalStorage(id) {
    const toDoAfterDeletion = TODOS_ARRAY.filter(function(toDo) {
        return toDo.id !== parseInt(id);
    });
    TODOS_ARRAY = toDoAfterDeletion;
    saveToDosInLocalStorage();
}

function deleteToDoInHTML(event) {
    const button = event.target;
    const li = button.parentNode;
    deleteToDoInLocalStorage(li.id);
    toDoList.removeChild(li);
}

function saveToDosInLocalStorage() {
    localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(TODOS_ARRAY));
}

function getNewId() {
    return TODOS_ARRAY.length + 1;
}

function saveInToDoArray(text) {
    const newToDoObj = {
        text: text,
        id: getNewId(),
    }
    TODOS_ARRAY.push(newToDoObj);
}

function printToDoInHTML (text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✂";
    deleteButton.addEventListener("click", deleteToDoInHTML);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.id = getNewId();
    toDoList.appendChild(li);
    saveInToDoArray(text);
    saveToDosInLocalStorage();
}

function handleSubmit(event) {
    event.preventDefault();
    const userToDoInput = toDoInput.value;
    printToDoInHTML(userToDoInput);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LOCAL_STORAGE);
    if (toDos !== null) {
        const parseToDos = JSON.parse(toDos);
        parseToDos.forEach(function(toDo) {
            printToDoInHTML(toDo.text);
        });
    }
}

function init () {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();