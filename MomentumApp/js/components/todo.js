const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODO_KEY = "todos";
let todos = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function paintTodo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;

  const todoContext = document.createElement("span");

  todoContext.innerHTML = newTodo.text;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "❌";
  deleteButton.addEventListener("click", (event) => {
    // console.dir(event.target);
    let target = event.target.parentElement;
    target.remove();
    // console.log(target);
    todos = todos.filter((toDo) => toDo.id !== parseInt(target.id));
    saveTodo();
  });

  list.appendChild(todoContext);
  list.appendChild(deleteButton);

  todoList.appendChild(list);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  //init
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj); // for save localStorage
  paintTodo(newTodoObj);

  saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo !== null) {
  const parseTodos = JSON.parse(savedTodo);
  todos = parseTodos;
  parseTodos.forEach(paintTodo);
} else {
}
