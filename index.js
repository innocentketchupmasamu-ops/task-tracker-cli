const taskManager = require("./src/taskManager")


const task = {
    id: 1,
    description:"Wash the car",
    status: "todo",
    createdAt: "12:30",
    updatedAt: "--:--"
}

const newDescription = "Vote Bally!"

taskManager.addTask(task)
taskManager.updateTask(newDescription, 100)