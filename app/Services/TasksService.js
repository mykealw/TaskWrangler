import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService {
    deleteTask(taskID) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskID)
        ProxyState.tasks = [...ProxyState.tasks]
    }

    addTask(taskData){

        let task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
        // ProxyState.tasks = [...ProxyState.tasks, task]
    }
    checkTask(taskID){
        let foundTask = ProxyState.tasks.find(t => t.id === taskID)
        // console.log("this is the one", foundTask.checked)
            if (foundTask.checked == true){
                foundTask.checked = false
            }
            else{
                foundTask.checked = true
            }

            // foundTask.checked = !foundTask.checked
            // console.log(foundTask.checked, "found task status")
         ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskID) 
         ProxyState.tasks = [...ProxyState.tasks, foundTask] 
        }
    }






export const tasksService = new TasksService();