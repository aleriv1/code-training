import { JSblock } from "./js-block"

export default class App { // default must be the only one in one file
  #JSblock // private because it doesn't need to have access through a dot

  constructor() {
    this.#JSblock = new JSblock()
  }

  run() { // this method we should import in index js
    const jsBlockHTML = this.#JSblock.render()
    document.body.append(jsBlockHTML)

    // document.body.textContent = 'Hello World!'
  }
}
