
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
module.exports = {
    generateID
}