import { Task } from "../models/Task.js";
import { TaskList } from  "../models/TaskList.js"


let taskList = new TaskList();

taskList.getLocalStorage();
taskList.render();

// Add task
document.querySelector('#addItem').onclick = function () {
    let task = new Task;
    task.id =  taskList.arrTask.length + 1;   
    task.content = document.querySelector('#newTask').value;
    task.completed = false;

    if (task.content) {
        taskList.addTask(task);
        taskList.render();
        document.querySelector('#newTask').value = "";
    }
}

// Delete task
window.delTask = (id) => {
    taskList.deleteTask(id);//
    taskList.render();
}

// // Finish task
window.doneTask = (id) => {
    taskList.finishTask(id);//
    taskList.render();
}

// Sort tasks
document.querySelector('#two').onclick = function () {
    taskList.sortAZ();
    taskList.render();
}

document.querySelector('#three').onclick = function () {
    taskList.sortZA();
    taskList.render();
}


// // Save taskList to local storage before closing

window.onbeforeunload = closingCode;
function closingCode(){
    taskList.saveLocalStorage();
    return null;
}


