type html = string | HTMLElement 

class DOM {
  $el: HTMLElement

  constructor(element: html) {
    (typeof element === 'string') ?
      this.$el = document.querySelector(element) :
      this.$el = element
  }

  html(element? : string) : this | string {
    if (element) {
      this.$el.innerHTML = element
      return this
    }
    return this.$el.outerHTML.trim()
  }

  append(node: HTMLElement | DOM) : DOM {
    if (node instanceof DOM) {
      node = node.$el
    }
    this.$el.append(node)
    return this
  }

  on(type : string, listener : (event? : Event) => void ) {
    this.$el.addEventListener(type, listener)
  }

  off(type : string, listener : (event? : Event) => void ) {
    this.$el.removeEventListener(type, listener)
  }
}

function $(element : html) : DOM {
  return new DOM(element)
}


$.create = function(tag : string, classes ?: string) : DOM {   
  const $el : HTMLElement = document.createElement(tag)
  if (classes)
    $el.classList.add(classes)
  return $($el)
}

export {$, DOM}
