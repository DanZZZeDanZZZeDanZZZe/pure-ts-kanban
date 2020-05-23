import DomListener from "../DomListener/DomListener";
import IKanbanElement from "./IKanbanElement";
import { DOM } from "../DomManipulator";

abstract class KanbanElement extends DomListener implements IKanbanElement{
  constructor($el : DOM) {
    super($el)
  }
  
  abstract getHTMLString() : string 
}

export default KanbanElement