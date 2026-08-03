
const fileHandler = require('./fileHandler');
const utils = require("./utils");


function addTask(task){
    const tasks = fileHandler.readTasks();
    task.id = utils.generateID(tasks)
    tasks.push(task)
    fileHandler.saveTasks(tasks)
};

function updateTask(newDescription, taskID){
    const tasks = fileHandler.readTasks()
    const task = tasks.find(t => t.id === taskID)
    utils.verifyTask(task);
    if (!utils.verifyTask(task)){
        return;
    }

    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    fileHandler.saveTasks(tasks)
};

module.exports = {
    addTask,
    updateTask
};