
const fileHandler = require('./fileHandler');
const utils = require("./utils");


function addTask(task){
    const tasks = fileHandler.readTasks();
    task.id = utils.generateID(tasks)
    tasks.push(task)
    fileHandler.saveTasks(tasks)
}

module.exports = {
    addTask
}