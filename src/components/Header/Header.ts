import KanbanElement from "@core/KanbanElement/KanbanElement";
import { DOM } from "@core/DomManipulator";

export default class Header extends KanbanElement {
  static className : string = 'header'

  constructor($el : DOM) {
    super($el)
  }

  getHTMLString() : string {
    return htmlSring
  }
}

const htmlSring : string = `
  <div>
    <h1>Kanban</h1>
  </div>
  
  <div class="user-menu">
    <button>
      <i class="material-icons">all_inbox</i>        
    </button>
  </div>
`