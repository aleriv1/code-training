const myName = 'Aleksandr'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen'
const reasonText = 'I want to control the flows of information'
const numberOfMonth = 'many'

// console.log(`Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`)

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`

console.log(myInfoText.replaceAll('JavaScript', 'javascript'))
console.log(myInfoText.replaceAll('курс', 'КУРС'))

console.log(myInfoText[0], myInfoText[myInfoText.length - 1])

let userAnswer = prompt('What is your name?', 'Aleksandr')
// console.log(userAnswer.trim().toLowerCase())
let userAge = Number((prompt('How old are you?', 20) ?? '').trim())
// let userAge = +prompt('How old are you?', 20).trim()

const userName = userAnswer.trim().toLowerCase()
console.log(userAge)
// console.log(userAnswer.toLowerCase())

alert(`Your name is ${userName}\nYour age is ${userAge}`)

/* const input = prompt('How old are you?', 20);
if (input === null) {
  // отмена
} else {
  const s = input.trim();
  const age = Number(s);
  if (s === "" || Number.isNaN(age)) {
    // ошибка
  }
} */