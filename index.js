const taskManager = require("./src/taskManager")


const task = {
    id: 1,
    description:"Wash the car",
    status: "todo",
    createdAt: "12:30",
    updatedAt: "--:--"
}


taskManager.addTask(task)