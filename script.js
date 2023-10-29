

// Initialize an empty array to hold todo tasks
let todoList = [];

// Function to add a new task
function addTask(task) {
    todoList.push(task);
    renderList();
}

// Function to render the task list
function renderList() {
    const listElement = document.getElementById('todoList');
    listElement.innerHTML = '';

    todoList.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        const taskName = document.createElement('span');
        taskName.innerText = task;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.onclick = function() {
            deleteTask(index);
        };

        listItem.appendChild(taskName);
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    });
}

// Function to delete a task
function deleteTask(index) {
    todoList.splice(index, 1);
    renderList();
}

// Listen for the 'Add' button click
document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        addTask(task);
        taskInput.value = '';
    }
});

// Function to search tasks
function searchTodo() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredList = todoList.filter(task => task.toLowerCase().includes(searchInput));
    renderSearchList(filteredList);
}

// Function to render the search results
function renderSearchList(list) {
    const listElement = document.getElementById('todoList');
    listElement.innerHTML = '';

    list.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        const taskName = document.createElement('span');
        taskName.innerText = task;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.onclick = function() {
            deleteTask(index);
        };

        listItem.appendChild(taskName);
        listItem.appendChild(deleteButton);
        listElement.appendChild(listItem);
    });
}
