import { DOM } from "../DomManipulator"
import { setCapitalLetter } from "@core/utils/utils"

export default class DomListener {
  $el : DOM
  listeners : string[]

  constructor($el : DOM, listeners : string[] = []) {
    this.$el = $el
    this.listeners = listeners
  }

  initializeDOMListeners() : void {
    this.listeners.forEach((listener : string) => {
      const listenerMethodName : string = getMethodName(listener) 

      if (!this[listenerMethodName]) 
        throw new Error(`${listener} listener not defined`)

      this[listenerMethodName] = this[listenerMethodName].bind(this)
      this.$el.on(listener, this[listenerMethodName])
    })
  }

  removeDOMListeners() : void {
    this.listeners.forEach((listener : string) => {
      const listenerMethodName : string = getMethodName(listener) 

      if (this[listenerMethodName]) 
        this.$el.off(listener, this[listenerMethodName])
    })
  }
}

function getMethodName(str : string) : string {
  return 'on' + setCapitalLetter(str)
}