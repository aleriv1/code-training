import JS_IMAGE from '../../assets/js.png'

export class JSblock {

  #container
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

    // console.log('AlenaErmakova')

    return this.#container
  }
}
