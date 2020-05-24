import DomListener from "../DomListener/DomListener"
import IKanbanElement from "./IKanbanElement"
import {DOM} from "../DomManipulator"
import IKanbanElementOptions from "./IKanbanElementOptions"

abstract class KanbanElement extends DomListener implements IKanbanElement{
  constructor($el : DOM, options? : IKanbanElementOptions) {
    let listeners : string[] | undefined = undefined

    if (options && options.listeners) {
      listeners = options.listeners
    }
    super($el, listeners)  
  }
  
  init() {
    this.initializeDOMListeners()
  }

  clear() {
    this.removeDOMListeners()
  }

  abstract getHTMLString() : string 
}

export default KanbanElement