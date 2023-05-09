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
  
  // WEATHER
  const container = document.querySelector('.container');
  const search = document.querySelector('.search-box button');
  const weatherBox = document.querySelector('.weather-box');
  const weatherDetails = document.querySelector('.weather-details');
  const error404 = document.querySelector('.not-found');
  
  search.addEventListener('click', () => {
  
      const APIKey = '056d088edd25507cd584a8f718abd8c4';
      const city = document.querySelector('.search-box input').value;
  
      if (city === '')
          return;
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
          .then(response => response.json())
          .then(json => {
  
              if (json.cod === '404') {
                  weatherBox.style.display = 'none';
                  weatherDetails.style.display = 'none';
                  error404.style.display = 'block';
                  error404.classList.add('fadeIn');
                  return;
              }
  
              error404.style.display = 'none';
              error404.classList.remove('fadeIn');
  
              const image = document.querySelector('.weather-box img');
              const temperature = document.querySelector('.weather-box .temperature');
              const description = document.querySelector('.weather-box .description');
              const humidity = document.querySelector('.weather-details .humidity span');
              const wind = document.querySelector('.weather-details .wind span');
  
              switch (json.weather[0].main) {
                  case 'Clear':
                      image.src = 'src/images/clear.png';
                      break;
  
                  case 'Rain':
                      image.src = 'src/images/rain.png';
                      break;
  
                  case 'Snow':
                      image.src = 'src/images/snow.png';
                      break;
  
                  case 'Clouds':
                      image.src = 'src/images/cloud.png';
                      break;
  
                  case 'Haze':
                      image.src = 'src/images/mist.png';
                      break;
  
                  default:
                      image.src = '';
              }
  
              temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
              description.innerHTML = `${json.weather[0].description}`;
              humidity.innerHTML = `${json.main.humidity}%`;
              wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
  
              weatherBox.style.display = '';
              weatherDetails.style.display = '';
              weatherBox.classList.add('fadeIn');
              weatherDetails.classList.add('fadeIn');
  
          });
  });