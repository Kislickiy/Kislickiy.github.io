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
        bindTaskEvents(listItem, finishedTask);
        inputTask.value="";
        
    }
}
addButton.onclick=addTask;

function deleteTask () {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function finishedTask () {
    var listItem = this.parentNode;
    var finishedButton = listItem.querySelector('button.finished');
    finishedButton.className="finished";
    finishedButton.innerHTML="<span class='text-button'>Вернуть в список</span>"
    finishedTasks.appendChild(listItem);
    bindTaskEvents (listItem,unfinishTask);

}

function unfinishTask () {
    var listItem = this.parentNode;
    var finishedButton = listItem.querySelector('button.finished');
    finishedButton.className="finished";
    finishedButton.innerHTML="<span class='text-button'>Выполнить</span>"
    unfinishedTasks.appendChild(listItem);
    bindTaskEvents (listItem,finishedTask);

}

function bindTaskEvents (listItem, buttonEvent) {
    var finishedButton = listItem.querySelector('button.finished');
    var deletedButton = listItem.querySelector('button.delete');

    finishedButton.onclick = buttonEvent;
    deletedButton.onclick = deleteTask;
}