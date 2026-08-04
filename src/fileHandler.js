const fs = require("fs")

function readTasks(){

    const data = fs.readFileSync("./data/db.json", "utf8");
    const tasks = JSON.parse(data);
    return tasks
}


function saveTasks(tasks){

    const updatedTask = JSON.stringify(tasks, null, 4);
    fs.writeFileSync("./data/db.json", updatedTask)
   
}

module.exports = {
    readTasks,
    saveTasks
}

