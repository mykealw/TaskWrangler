import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { List } from "./Models/List.js"
import {Task} from "./Models/Task.js"
import { generateId } from "./Utils/generateId.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/List').List[]} */
  lists = [ new List ({
nickName: 'Ranch',
id: "dog",
color: "Red"
}),
new List ({
  nickName: "Home Things",
  id: "cat",
  color: "Gold"
})]

  /** @type {import('./Models/Task').Task[]} */
  tasks = [ 
    new Task({
    todo: "Dinner",
    id: generateId(),
    parentID: "dog",
    checked: false
  }),
new Task({
  todo: "things",
  id: generateId(),
  parentID: "cat",
  checked: false
}),
new Task({
todo: "Dinner",
id: generateId(),
parentID: "dog",
checked: false
}),
new Task({
todo: "things",
id: generateId(),
parentID: "cat",
checked: false
})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
