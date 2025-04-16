let tasks = [];

function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDesc").value;
    if (title && description) {
        const task = { id: tasks.length + 1, title, description };
        tasks.push(task);
        renderTasks();
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDesc").value = "";
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task.title}: ${task.description}</span>
                       <button onclick="deleteTask(${task.id})">Delete</button>`;
        taskList.appendChild(li);
    });
}