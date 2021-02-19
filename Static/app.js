const inputF = document.querySelector(".todoInput");
const todo_Add = document.querySelector(".todoAddIcon");
const todoList = document.querySelector(".todoItems");
const listT = document.querySelector(".todo-list");

let lengthL = listT.lenght;

const todoTemplateGeneration = (todo) => {
  const html = `          <li class="todolist">
            <input type="checkbox" id="todo_${lengthL}"/>
            <label for="todo_${lengthL}"><span class="items"></span>${todo}</label>
            <i class="far fa-trash-alt delete"></i>
          </li>`;
  todoList.innerHTML += html;
};

function todoAdd(e) {
  e.preventDefault();
  const todo = inputF.input.value.trim();
  if (todo.length) {
    lengthL = lengthL + 1;
    todoTemplateGeneration(todo);
    inputF.reset();
  }
}

inputF.addEventListener("submit", todoAdd);
todo_Add.addEventListener("click", todoAdd);

function todoDelete(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}

todoList.addEventListener("click", todoDelete);
