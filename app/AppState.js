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
nickName: 'Job',
id: "dog",
color: "Red"
}),
new List ({
  nickName: "Home ",
  id: "cat",
  color: "Gold"
}),
new List ({
  nickName: 'Gym',
  id: "fish",
  color: "Cream"
  })]

  /** @type {import('./Models/Task').Task[]} */
  tasks = [ 
    new Task({
    todo: "Email Carol Baskins",
    id: generateId(),
    parentID: "dog",
    checked: false
  }),
  new Task({
    todo: "Sigh, loudly",
    id: generateId(),
    parentID: "dog",
    checked: false
  }),
new Task({
  todo: "Tan",
  id: generateId(),
  parentID: "cat",
  checked: false
}),
new Task({
todo: "Pretend to do work",
id: generateId(),
parentID: "dog",
checked: false
}),
new Task({
todo: "Laundry",
id: generateId(),
parentID: "cat",
checked: false
}),
new Task({
  todo: "Gains!",
  id: generateId(),
  parentID: "fish",
  checked: false
  })
]

}
// let totalCount = 0
// let count = 0

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
