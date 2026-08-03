
function generateID(tasks){
    
    let nextID
   
    
   
    if(tasks.length <= 0){

        nextID = 1

        
    } else{

        let lastTask = tasks[tasks.length - 1]; 
        nextID = lastTask.id + 1  
      
    }

    return nextID
}
function verifyTask(task){
    if(!task){
        console.log("Task not found.")
        return false;
    } 

    return true;
}

module.exports = {
    generateID,
    verifyTask
}