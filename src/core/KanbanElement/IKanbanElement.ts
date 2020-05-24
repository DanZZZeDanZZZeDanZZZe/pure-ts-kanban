interface IKanbanElement {
  init() : void
  clear() : void
  getHTMLString() : string
}

export default IKanbanElement