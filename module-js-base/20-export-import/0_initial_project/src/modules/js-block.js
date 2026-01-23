import JS_IMAGE from '../../assets/js.png'

export class JSblock {


  #container // privat because we don't need it access to it out of this class
  constructor() {
    this.#container = document.createElement('div')
    this.#container.className = 'js-block'
  }

  render() {
    const mainTtitle = document.createElement('h1')
    mainTtitle.className = 'main-title'
    mainTtitle.textContent = 'JavaScript'

    const JSImageHTML = document.createElement('img')
    JSImageHTML.className = 'js-img'
    JSImageHTML.src = JS_IMAGE

    const foundedText = document.createElement('p')
    foundedText.textContent = 'С момента создания JavaScript прошло'
    foundedText.className = 'founded-text'

    this.#container.append(mainTtitle, JSImageHTML, foundedText)

    return this.#container
  }
  // so we created the js block using the best OOP practice (private properties) -- now we need to export it
}