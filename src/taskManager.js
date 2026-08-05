
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
    const task = utils.findTask(tasks, taskID);

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

    const tasks = fileHandler.readTasks()
    const task = utils.findTask(tasks, taskID);

    if (!utils.verifyTask(task)){
        return;
    }
    tasks.splice(tasks.indexOf(task), 1)

    fileHandler.saveTasks(tasks)
    console.log("A task has been deleted!")
}


function listTasks(){

    tasks = fileHandler.readTasks()
    if(tasks.length === 0 ){
        console.log("No tasks found");
        return;
    }
    console.log("--------------------Tasks--------------------")
    for (const task of tasks){
        console.log(`
----------------------------------
ID: ${task.id}
Description: ${task.description}
status: ${task.status}
            `)
    }

}

module.exports = {
    addTask,
    updateTask,
    deleteTask,
    listTasks
};