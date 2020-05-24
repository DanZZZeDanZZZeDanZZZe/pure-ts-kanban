import IKanbanElement from "./IKanbanElement"
import {DOM} from "../DomManipulator"

interface IKanbanElementConstructor {
  className : string
  new ($el : DOM) : IKanbanElement
}

export default IKanbanElementConstructor