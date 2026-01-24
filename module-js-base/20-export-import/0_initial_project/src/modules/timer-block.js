// import { getTodayDateFormat } from "../core/utils/date" // todos
// import { getPreciseDifDifference } from "../core/utils/date"

import * as DateUtils from '../core/utils/date' // import all -- so we can have access to every exported entities

// DateUtils.getTodayDateFormat()
// DateUtils.getPreciseDifDifference() // 

export class TimerBlock {
  #date
  #timerContainer
  #timerTextHTML
  constructor(date) {
    this.#date = date
    this.#timerContainer = document.createElement('div')
    this.#timerTextHTML = document.createElement('h2')
  }

  #getTimerContent() { // privte; we don't need acces to this function from outside, we will not use it there
    return DateUtils.getPreciseDifDifference(new Date(), this.#date)

  }

  render() {
    this.#timerContainer.id = 'timer'
    this.#timerTextHTML.classList = 'timer-text'
    this.#timerTextHTML.textContent = this.#getTimerContent()


    const todayDateHTML = document.createElement('div')
    todayDateHTML.className = 'today-date'
    const todayDateFormat = DateUtils.getTodayDateFormat(new Date())
    todayDateHTML.textContent = `(Сегодня ${todayDateFormat})`

    this.#timerContainer.append(this.#timerTextHTML, todayDateHTML)

    return this.#timerContainer
  }
}