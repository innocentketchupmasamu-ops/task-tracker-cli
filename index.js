const taskManager = require("./src/taskManager")


const task = {
    id: 1,
    description:"Wash the car",
    status: "todo",
    createdAt: "12:30",
    updatedAt: "--:--"
}

const changes = {
    
    description : "Change the engine oil",

}

taskManager.addTask(task)
taskManager.updateTask(2, changes)