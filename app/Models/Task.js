import { generateId } from "../Utils/generateId.js"

export  class Task {
    constructor(data){
        this.todo = data.todo
        this.id = data.id || generateId()
        this.parentID = data.parentID
        this.checked = data.checked
    }




    get TaskTemplate(){
        return /*html*/ `
        <li class="list-group-item">
        <input class="form-check-input me-1 "  type="checkbox" value="" aria-label="..." onmousedown="app.tasksController.checkTask('${this.id}')" ${this.checked == true ? "checked" : ""}>
       <span class="${this.checked == true ? "text-decoration-line-through" : ''}"> ${this.todo} </span> <i class="mdi mdi-delete text-dark selectable on-hover"  onclick="app.tasksController.deleteTask('${this.id}')"></i>
        </li>
        `
    }
}
