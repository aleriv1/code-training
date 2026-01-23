import { JSblock } from "./js-block"
import { TimerBlock } from "./timer-block"

export default class App {
  #JSblock
  #timerBlock

  constructor() {
    this.#JSblock = new JSblock()
    this.#timerBlock = new TimerBlock(new Date())
  }

  run() { // this method we should import in index js
    const jsBlockHTML = this.#JSblock.render()
    const timerContainer = this.#timerBlock.render()
    document.body.append(jsBlockHTML, timerContainer)
  }
}
