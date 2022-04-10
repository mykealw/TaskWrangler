import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService {

    addTask(taskData){

        let task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
        // ProxyState.tasks = [...ProxyState.tasks, task]
    }



}



export const tasksService = new TasksService();