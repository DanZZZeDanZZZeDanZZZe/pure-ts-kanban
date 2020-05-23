import { DOM } from "../DomManipulator"

export default class DomListener {
  $el : DOM

  constructor($el : DOM) {
    this.$el = $el
  }
}