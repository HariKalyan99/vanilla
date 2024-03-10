let inputEle = document.querySelector("#todoText");
let dateEle = document.querySelector("#todoDate");

let inputEleEdited = document.querySelector("#editTodoText");
let dateEleEdited = document.querySelector("#editTodoDate");


let objectData = localStorage.getItem("todoList");
let list = JSON.parse(objectData) || [];

function addTodo(event) {
  event.preventDefault();
  inpVal = inputEle.value;
  dateVal = dateEle.value;
  list.push({ input: inpVal, date: dateVal, id: Math.random() });
  localSave(list);
}

function editedTodo(event) {
    event.preventDefault();
    inpVal = inputEleEdited.value;
    dateVal = dateEleEdited.value;
    list.push({ input: inpVal, date: dateVal, id: Math.random() });
    localSave(list);
    document.querySelector('#form').classList.toggle('display')
}


function localSave(todoList) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayTodoContainer();
}

function displayTodoContainer() {
  let listContainer = document.querySelector(".todoListContainer");
  let inner = "";
  if (list) {
    list.map((todo, ind) => {
      inner += `
        <div class="todoList" >
            <ul class="listStyle" data-check="Mark checked if completed!">
                <li id="${todo.id}" class=""><h1>${todo.input}</h1></li>
                <li><h1>${todo.date}</h1></li>
                <button type="button" onClick="editTodo(${todo.id}, ${ind})">EDIT</button>
                <button type="button" onClick="deleteTodo(${todo.id}, ${ind})">DELETE</button>
                </ul>
                <div onClick="strike(${todo.id})" id="checkBtn"><i class="fa-solid fa-clipboard-check fa-xl" ></i></div>
        </div>
        `;
    });
  }
  

  inputEle.value = "";
  dateEle.value = "";
  listContainer.innerHTML = inner;
}

displayTodoContainer();

function clearStore(){
 localStorage.clear();
 list = [];   
 displayTodoContainer();
}

function editTodo(id, ind) {
    document.querySelector('#form').classList.toggle('display')
    let text = document.querySelector('#editTodoText')
    let date = document.querySelector('#editTodoDate')
    let getTodo = list.find((todo) => todo.id === id)
    text.value = getTodo.input;
    date.value = getTodo.date;
    list.splice(ind, 1);
    localSave(list);
}

function deleteTodo(id, ind) {
    list.splice(ind, 1);
    localSave(list);
}
  



function strike(id) {
    let ele = document.getElementById(id)
    ele.classList.toggle('strikeIt')
}