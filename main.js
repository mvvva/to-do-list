const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.dataset.index = index;
        const span = document.createElement('span');
        span.textContent = todo.text;
        if (todo.completed) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'grey';
            li.style.border = '1px solid green';
        }
        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.dataset.index = index;
        button.classList.add('ml-auto');

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);

        todoList.appendChild(li);
    });
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text !== '') {
        todos.push({
            text,
            completed: false
        });
        todoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

todoList.addEventListener('click', event => {
    if (event.target.type === 'checkbox') {
        const index = event.target.dataset.index;
        toggleCompleted(index);
    }
    if (event.target.tagName.toLowerCase() === 'button') {
        const index = event.target.dataset.index;
        deleteTodo(index);
    }
});


// CLO`CK
function updateClock() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    
    var date = day + "-" + month + "-" + year;
    var time = hour + ":" + minute + ":" + second;
    
    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
    }
    
    setInterval(updateClock, 1000);