import KanbanElement from "../../core/KanbanElement/KanbanElement";
import { DOM } from "../../core/DomManipulator";

export default class Footer extends KanbanElement {
  static className : string = 'footer'

  constructor($el : DOM) {
    super($el)
  }

  getHTMLString() : string {
    return htmlSring
  }
}

const htmlSring : string = `
  <div class="footer-statistics">
    <p>Active taslks: N</p>
    <p>Finished tasks: N</p>
  </div>
  <div class="footer-user">
    <p>Name</p>
  </div>
`