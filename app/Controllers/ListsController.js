import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { Pop } from "../Utils/Pop.js";
import {loadState, saveState}   from "../Utils/LocalStorage.js"

function _drawList(){
let template = ''
ProxyState.lists.forEach(list => template += list.ListTemplate)
document.getElementById("list").innerHTML = template
// console.log(template, "this is the template");
}
// function _countTask(){
//     let  totalCount = 0
//     ProxyState.tasks.forEach(task => totalCount++)
//     document.getElementById("totalTask").innerText = totalCount.toString()

    // //     let count = document.getElementById("taskCount").childElementCount
    // //     console.log(count, "this is the count");
    // //     document.getElementsByName("totalTask").innerText = count.toString()
    //         }

export class ListsController{
    constructor(){
        // console.log("hello from controller");
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawList)
        // ProxyState.on('lists', _countTask)
        // ProxyState.on('tasks', _countTask)
        ProxyState.on("lists", saveState)
        ProxyState.on("tasks", saveState)
        
        _drawList()
        // _countTask()
        loadState()
        
    }


    createList(){
        window.event.preventDefault()
        const form = window.event.target
        const listData ={
            nickName: form.nickName.value,
            color: form.color.value
        }
        listsService.createList(listData)
        // console.log(listData, "this is the list data");
    }

   async deleteList(listID){
        if(await Pop.confirm()){
            listsService.deleteList(listID)
            Pop.toast('Deleted', "success")
        }
    }
}