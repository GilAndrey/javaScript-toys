const inputTask = document.querySelector(".input-task");
const buttonTask = document.querySelector(".button-task");
const tasks = document.querySelector(".tasks");

function createLi() {
  const li = document.createElement("li");
  return li;
}

//  keypress - "Apenas precionar a tecla", keyup - "pressionar de leve" keydown - "manter pressionado"
// Comando para observar quais teclas foram pressionadas ('keypress', 'keyup', 'keydown')
inputTask.addEventListener("keypress", function (event) {
  // keyCode === (code) - para pegar a tecla pressionada
  if (event.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

/**
 * Função para Limpar o input (text) Do index
 */

function clearInput() {
  inputTask.value = "";
  // .focus função do HTML
  inputTask.focus();
}

/**
 * Função para deletar / Apagar alguma tarefa criada
 * clearButton.setAttribute = Para setar atributo dentro do HTML. (setando a class e o name)
 */
function createClearButton(li) {
  li.innerText += " ";
  const clearButton = document.createElement("button");
  clearButton.innerText = "Delete";
  clearButton.setAttribute("class", "delete");
  clearButton.setAttribute("title", "apagar esse caraio");
  li.appendChild(clearButton);
}

function createTask(textInput) {
  const li = createLi();
  li.innerText = textInput;
  tasks.appendChild(li);
  clearInput();
  createClearButton(li);
  saveTask();
}

buttonTask.addEventListener("click", function () {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

/**
 * Esse evento listado é o funcional para que as tarefas sejam apagadas
 * dentro do HTML. Utilizando o el.parentElement.remove();
 */
document.addEventListener("click", function (event) {
  const el = event.target;

  if (el.classList.contains("delete")) {
    el.parentElement.remove();
    saveTask();
  }
});

/**
 * Função para salvar as tarefas ( Caso seja fechada a página)
 * Utilizando javaScript basico.
 * Convertendo em JSON para ser convertido de volta em um Array
 * Utilizando o JSON.parse, ele converte o JSON em JavaScript, assim retornando o salvo
 */

function saveTask() {
  const liTasks = tasks.querySelectorAll("li");
  const taskList = [];

  for (let tasks of liTasks) {
    let taskText = tasks.innerText;
    taskText = taskText.replace("Delete", " ").trim();
    taskList.push(taskText);
  }

  const tasksJSON = JSON.stringify(taskList);
  localStorage.setItem("tasks", tasksJSON);
}

function addSaveTask() {
  const tasks = localStorage.getItem("tasks");
  const taskList = JSON.parse(tasks);

  for (let tasks of taskList) {
    createTask(tasks);
  }
}

function test() {
  const number = 21;
  if (number != 23) return "number is different";
}

addSaveTask();
