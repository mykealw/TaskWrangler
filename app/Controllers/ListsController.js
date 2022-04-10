import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { Pop } from "../Utils/Pop.js";


function _drawList(){
let template = ''
ProxyState.lists.forEach(list => template += list.ListTemplate)
document.getElementById("list").innerHTML = template
// console.log(template, "this is the template");
}



export class ListsController{
    constructor(){
        // console.log("hello from controller");
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawList)
        _drawList()

    }


    createList(){
        window.event.preventDefault()
        const form = window.event.target
        const listData ={
            nickName: form.nickName.value,
            color: form.color.value
        }
        listsService.createList(listData)
        console.log(listData, "this is the list data");
    }

   async deleteList(listID){
        if(await Pop.confirm()){
            listsService.deleteList(listID)
            Pop.toast('Deleted', "success")
        }
    }
}