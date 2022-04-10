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



}



export const tasksService = new TasksService();