import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class List {
    constructor(data){
        this.id = data.id || generateId()
        this.nickName = data.nickName
        this.color = data.color
    }
 
get Tasks(){
    let tasks = ProxyState.tasks.filter(t => t.parentID == this.id)
    let template = ''
    tasks.forEach(t => template += t.TaskTemplate)
    return template
}

get CompletedCount(){
    let CompletedCount = 0
    let cCount = ProxyState.tasks.filter(t => t.parentID == this.id)
for (let i = 0; i < cCount.length; i++) {
    if(cCount[i].checked !== true){
        CompletedCount ++
    }
    
}

    // cCount.filter(c => c.checked !== false)
    // console.log(CompletedCount, "completed count");
    // // CompletedCount = cCount.length
    // // CompletedCount.toString()
    // cCount.forEach(c => CompletedCount++)
    // console.log("after", CompletedCount);
    return CompletedCount
}
get TotalCount(){
    let tCount = ProxyState.tasks.filter(t => t.parentID == this.id)
    let totalCount = 0
    tCount.forEach(c => totalCount ++)
    totalCount.toString()
    return totalCount
}
get ListTemplate () {
    let listColor= "bg-"
    switch (this.color.toLowerCase()){
        case "red":
            listColor += 'Red'
            break
        case "gold":
            listColor += 'Gold'
            break
        case "cream":
            listColor += 'Cream'
            break
        case "grey":
            listColor += "Grey"
            break
        case "blue":
            listColor += "Blue"
            break
    }
    return /*html*/ `
    <div class="col-md-3">
    <div class="rounded-top bg-light">
      <h3 class=" ${listColor == "bg-Cream" ? "text-dark": "text-light"} text-sm-center p-3 rounded-top ${listColor} "  >${this.nickName} <br> <span id="totalTask">${this.CompletedCount}/${this.TotalCount} </span><i class="mdi mdi-delete text-dark selectable on-hover" onclick="app.listsController.deleteList('${this.id}')"></i></h3>
      <div class="" id="tasks"> 
      <ul class="list-group" id="taskCount">
        ${this.Tasks}
      </ul>
      </div>
      <form class="bg-light" onsubmit="app.tasksController.addTask('${this.id}')">
        <div class="input-group bg-light">
        <label for="todo" class="form-label visually-hidden">todo</label>
          <input type="text" class="form-control" placeholder="New Task" name= "todo" id="todo"  minlength="3" maxlength="50" required>
          <button class="btn btn-outline-secondary bg-light" type="submit">+</button>
        </div>
    </form>
</div>
</div>`
}


}
