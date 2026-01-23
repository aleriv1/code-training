import { JSblock } from "./js-block"

export default class App {
  #JSblock

  constructor() {
    this.#JSblock = new JSblock()
  }

  run() { // this method we should import in index js
    const jsBlockHTML = this.#JSblock.render()
    document.body.append(jsBlockHTML)
  }
}
