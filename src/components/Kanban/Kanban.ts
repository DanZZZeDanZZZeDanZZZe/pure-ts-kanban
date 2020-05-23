import IKanbanElement from "@core/KanbanElement/IKanbanElement"
import IKanbanElementConstructor from "@core/KanbanElement/IKanbanElementConstructor"
import { DOM, $ } from '@core/DomManipulator'

export default class Kanban {
  components : Array<IKanbanElementConstructor>
  classInstances : Array<IKanbanElement>
  $el : DOM

  constructor($el : HTMLElement, components : Array<IKanbanElementConstructor>) {
    this.$el = $($el) 
    this.components = components
  }

  getRoot() : DOM {
    const $root : DOM = $.create('div', 'kanban')
    this.classInstances = this.components.map((component : IKanbanElementConstructor) => {
      const $el : DOM = $.create('div', component.className)
      const classInstance : IKanbanElement = new component($el)
      $el.html(classInstance.getHTMLString())
      $root.append($el)
      return classInstance
    })
    return $root
  }

  render() : void {
    this.$el.append(this.getRoot())
  }
} 
