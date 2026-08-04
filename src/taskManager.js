
const fileHandler = require('./fileHandler');
const utils = require("./utils");


function addTask(task){

    const tasks = fileHandler.readTasks();
    task.id = utils.generateID(tasks)
    tasks.push(task)
    fileHandler.saveTasks(tasks)
    console.log("A task has been added.")
};

function updateTask(taskID, changes){
    const tasks = fileHandler.readTasks()

    const task = tasks.find(t => t.id === taskID)

    if (!utils.verifyTask(task)){
        return;
    };

    const { description, status } = changes;
    const allowedChanges = {};

    if(description !== undefined){
        allowedChanges.description = description
    }
    if(status !== undefined ){
        allowedChanges.status = status;
    }

    

    Object.assign(task, allowedChanges);
   
    task.updatedAt = new Date().toISOString();
    fileHandler.saveTasks(tasks)
    console.log("A task has been updated.")

};

function deleteTask(taskID){

    tasks = fileHandler.readTasks()

    task = tasks.find(t => t.id === taskID)    
    if (!utils.verifyTask(task)){
        return;
    }
    tasks.splice(tasks.indexOf(task), 1)

    fileHandler.saveTasks(tasks)
    console.log("A task has been deleted!")
}

module.exports = {
    addTask,
    updateTask,
    deleteTask
};