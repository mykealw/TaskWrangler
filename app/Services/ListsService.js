import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {


createList(listData){

    const list = new List(listData)
    ProxyState.lists = [...ProxyState.lists, list]
}

deleteList(listID){

        ProxyState.lists = ProxyState.lists.filter(t => t.id !== listID)
        // ProxyState.lists = ProxyState.lists
        ProxyState.lists = [... ProxyState.lists]
}
}

export const listsService = new ListsService();