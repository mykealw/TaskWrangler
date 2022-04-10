import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { generateId } from "../Utils/generateId.js";
import { Pop } from "../Utils/Pop.js";






    


export class TasksController{
    constructor(){
        // console.log('hello from task controller');
        // _countTask()
//  ProxyState.on('lists', _countTask)
//  ProxyState.on('tasks', _countTask)
 }
 addTask(parentID){
     window.event.preventDefault()
     const form = window.event.target

     let taskData = {
         parentID,
         todo: form.todo.value,
         id: generateId(),
         checked: false
     }
     console.log(taskData, "this is task data");
     tasksService.addTask(taskData)
 }

async deleteTask(taskID){
    if(await Pop.confirm()){
        tasksService.deleteTask(taskID)
        Pop.toast('Deleted', "success")
    }



 }
 checkTask(taskID){
    tasksService.checkTask(taskID)

 }
}