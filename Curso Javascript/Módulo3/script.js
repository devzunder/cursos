var listElement = document.querySelector("ul");
var inputElement = document.querySelector("input");
var buttonElement = document.querySelector("button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var listItem = document.createElement("li");
    var listText = document.createTextNode(todo);

    var link = document.createElement("a");
    link.setAttribute("href", "#");
    var textLink = document.createTextNode("Excluir");

    var pos = todos.indexOf(todo);
    link.setAttribute("onclick", "deleteTodo(" + pos + ")");

    link.appendChild(textLink);
    listItem.appendChild(listText);
    listItem.appendChild(link);
    console.log(listItem);
    listElement.appendChild(listItem);
  }
}

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

buttonElement.onclick = addTodo;
renderTodos();
