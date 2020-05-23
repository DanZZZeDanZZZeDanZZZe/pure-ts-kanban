import KanbanElement from "../../core/KanbanElement/KanbanElement";
import { DOM } from "../../core/DomManipulator";

export default class Surface extends KanbanElement {
  static className : string = 'surface'

  constructor($el : DOM) {
    super($el)
  }

  getHTMLString() : string {
    return htmlSring
  }
}

const htmlSring : string = `
  <div class="card-holder">
  </div>
`