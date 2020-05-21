type html = string | HTMLElement 

class DOM {
  $el: HTMLElement

  constructor(element: html) {
    (typeof element === 'string') ?
      this.$el = document.querySelector(element) :
      this.$el = element
  }

  html(element? : string) : this | string{
    if (element) {
      this.$el.innerHTML = element
      return this
    }
    return this.$el.outerHTML.trim()
  }
}

export default function $(element: html) : DOM {
  return new DOM(element)
}