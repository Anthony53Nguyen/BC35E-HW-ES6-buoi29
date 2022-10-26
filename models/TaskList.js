export class TaskList {
    arrTask = [];

    saveLocalStorage() {
        let sArrTask = JSON.stringify(this.arrTask);
        localStorage.setItem('arrTask', sArrTask);
    };
    getLocalStorage() {
        if (localStorage.getItem('arrTask')) {
            this.arrTask = JSON.parse(localStorage.getItem('arrTask'));
        }
    };

    addTask(newTask) {
        this.arrTask.push(newTask);
    };
    deleteTask(id) {
        let indexDel = this.arrTask.findIndex(task => task.id == id);
        if(indexDel !== -1) {
            this.arrTask.splice(indexDel,1);
        }
    };

    //Change task.completed from false to true in arrTask
    finishTask(id) {
        let indexFinish = this.arrTask.findIndex(task => task.id == id);
        if(indexFinish !== -1) {
            this.arrTask[indexFinish].completed = true;
        }
    }

    sortAZ(){
        this.arrTask = _.orderBy(this.arrTask, ['completed','content'], ['asc', 'asc']);  // sorted arrTask
    } 
    sortZA() {
        this.arrTask = _.orderBy(this.arrTask, ['completed','content'], ['asc', 'desc']);  // Sort dung lodash

    } 
    render() {
        let todo = ``;
        let completed = ``;
        for (let task of this.arrTask) {
            if (task.completed) {
                completed += `<li>
                                <span>${task.content}</span>
                                <div class="buttons">
                                    <button class="remove" onclick="delTask('${task.id}')"><i class="fa-regular fa-trash-can"></i></button>
                                    <button class="complete"><i class="fa-regular fas fa-circle-check"></i></button>
                                </div>
                            </li>`;
            } else {
                todo += `<li>
                            <p>${task.content}</p>
                            <div class="buttons">
                                <button class="remove" onclick="delTask('${task.id}')"><i class="fa-regular fa-trash-can"></i></button>
                                <button class="complete" onclick="doneTask('${task.id}')"><i class="fa-regular fa-circle-check"></i></button>
                            </div>
                        </li>`;
            }
            document.querySelector('#todo').innerHTML = todo;
            document.querySelector('#completed').innerHTML = completed;
        }
    }
}
