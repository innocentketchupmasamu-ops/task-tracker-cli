const taskManager = require("./src/taskManager")

const changes = {
    
    description : "Change the engine oil",

}


taskManager.addTask("learn node")

taskManager.updateTask(2, changes)

// taskManager.deleteTask(3)
taskManager.listTasks()