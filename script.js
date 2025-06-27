const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const darkToggle = document.getElementById('dark-toggle');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleComplete(index));

    const span = document.createElement('span');
    span.textContent = task.text;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.classList.add('delete');
    delBtn.addEventListener('click', () => deleteTask(index));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);
  });

  updateProgressBar();
}

function updateProgressBar() {
  if (tasks.length === 0) {
    progressBar.style.width = '0%';
    progressText.textContent = '0 of 0 tasks completed (0%)';
    return;
  }
  const completed = tasks.filter(t => t.completed).length;
  const percentage = Math.round((completed / tasks.length) * 100);
  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completed} of ${tasks.length} tasks completed (${percentage}%)`;
}

function addTask() {
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = '';
    saveAndRender();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

// 🌙 Dark Mode Init
if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('dark');
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark'));
});

renderTasks();
