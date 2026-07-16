const ds = require("fs");

const task1 = {
    ID: 1,
    description: "Wake up",
    createdAt : new Date().toISOString(),
    updatedAt: "Null"
}
const data = ds.readFileSync("./data/tasks.json", "utf8");

const tasks = JSON.parse(data);
tasks.push(task1);

const updatedData = JSON.stringify(tasks, null, 4);

ds.writeFileSync("./data/tasks.json", updatedData )

console.log(typeof data);
console.log(typeof tasks);
console.log(tasks)