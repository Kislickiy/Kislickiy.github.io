var addButton = document.getElementById('add');
var inputTask = document.getElementById('new-task');
var unfinishedTasks = document.getElementById('unfinished-tasks');
var finishedTasks = document.getElementById('finished-tasks');

function createNewElement (task) {
    var listItem = document.createElement('li');
    var label = document.createElement('label');
    label.innerText=task;
    var finishedButton = document.createElement('button');
    finishedButton.className="finished";
    finishedButton.innerHTML="<span class='text-button'>Выполнить</span>"
    var deleteButton = document.createElement('button');
    deleteButton.className="delete";
    deleteButton.innerHTML="<span class='text-button'>Удалить</span>"

    listItem.appendChild(label);
    listItem.appendChild(finishedButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function addTask () {
    if (inputTask.value) {
        var listItem = createNewElement(inputTask.value);
        unfinishedTasks.appendChild(listItem);
        inputTask.value="";
        
    }
}
addButton.onclick=addTask;
