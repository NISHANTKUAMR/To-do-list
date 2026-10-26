const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask(){

    if(input.value===""){
        alert("Enter a task");
        return;
    }

    const li=document.createElement("li");

    li.innerHTML=`
        <span onclick="completeTask(this)">
            ${input.value}
        </span>

        <button class="delete" onclick="deleteTask(this)">
            Delete
        </button>
    `;

    list.appendChild(li);

    input.value="";
}

function deleteTask(button){

    button.parentElement.remove();

}

function completeTask(task){

    task.style.textDecoration="line-through";
    task.style.color="green";

}