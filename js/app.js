
function loadTasks(taskList){
    let container = document.getElementById('taskContainer');
    container.innerHTML='';

    taskList.forEach((task,i)=>{
        let divTask = document.createElement('div');
        divTask.className="taskCard";
        divTask.innerHTML = `
            <article>
                <header class="centered-text task-title">
                    ${task.img?"<img src='" + task.img + "' />":""}
                    <h4> <input type="checkbox" ${task.completed?"checked":""} title="check completed">  ${task.title + ' ' + i}</h4>
                <header>
                <span class="task-dates">created on ${task.createdOn} by ${task.createdBy}</span>
                <div class="task-description">
                    <p>${task.description}</p>
                </div>
                <span class="task-dates">Due on ${task.dueDate}</span>   
            </article>         
        `;

        if(task.completed)
            divTask.classList.add("taskCompleted");
        else if(task.dueDate < Date.now() )
            divTask.classList.add("taskLate");


        container.appendChild(divTask);
    });
}


loadTasks(taskList);


function addTask(task){
    taskList.unshift(task);
    loadTasks(taskList);
}