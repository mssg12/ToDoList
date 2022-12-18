let tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");

function renderList() {}

function markTaskAsComplete(taskId) {
  const task = tasks.filter((val) => val.taskId === taskId);
  if (task.length() > 0) {
    const curTask = task[0];
    curTask.done = !curTask.done;
  }
}

function deleteTask(taskId) {
  const newTask = tasks.filter((value) => value.taskId !== taskId);
  tasks = newTask;
  renderList();
  showNotification("Task Deleted Succesfully");
  return;
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    renderList();
    showNotification("Task Added Succesfully");
    console.log(tasks);
    return;
  }
  showNotification("Task can not be added.");
}

function showNotification(text) {
  window.alert(text);
}

function handleInputKeyPress(e) {
  if (e.key === "Enter") {
    const text = e.target.value;
    if (!text) {
      showNotification("Text can not be empty!");
      return;
    }
    const task = {
      text,
      id: Date.now().toString(),
      done: false
    };
    e.target.value = "";
    addTask(task);
  }
}

addTaskInput.addEventListener("keyup", handleInputKeyPress);
