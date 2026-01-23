export class TimerBlock {
  #date
  #timerContainer
  #timerTextHTML
  constructor(date) { // our date js creating
    this.#date = date
    this.#timerContainer = document.createElement('div')
    this.#timerTextHTML = document.createElement('h2')
  }

  render() {
    this.#timerContainer.id = 'timer'
    this.#timerTextHTML.classList = 'timer-text'
    this.#timerTextHTML.textContent = 'TIME'

    const todayDateHTML = document.createElement('div')
    todayDateHTML.className = 'today-date'
    todayDateHTML.textContent = new Date() // textContent automatically converts all entities to string

    // to timerContainer we should add needed entities
    this.#timerContainer.append(this.#timerTextHTML, todayDateHTML)
    // now we need to return our container

    return this.#timerContainer
  }
}