// && (AND)
// || (OR)
// ! (NOT)

// && (AND)
const userAge = 20
if (userAge > 5 && userAge <= 18) {
  console.log('the user is going to school')
}

const programmingLanguage = 'JavaScript'
// const experienceInYear = 0.5
const experienceInYear = 2

if (programmingLanguage === 'JavaScript' && experienceInYear > 1) {
  console.log('welcome to our team')
}

// || (OR)

const currentHours = 19

if (currentHours < 8 || currentHours > 18) {
  console.log('our office is closed')
} else {
  console.log('welcome to our office')
}

// const userNickname = null
const userNickname = 'me'

// const defaultNickname = 'User'
const defaultNickname = ''

console.log(Boolean('User'))

const nickname = userNickname || defaultNickname || 'noname'
console.log('nickname', nickname)


const fiinalNickname = userNickname && 'Пользователь существует'

console.log('finalNickname', fiinalNickname)


// ! (NOT)

// const hasAccess = true
const hasAccess = false
console.log('!hasAccess', !hasAccess)

console.log(!!'')

if (!hasAccess) {
  console.log('Access is closed')
} else {
  console.log('Access is open')
}

// const answer = prompt('how old are you?')

// if (!answer) {
//   console.log('Please, enter your full age')
// } else {
//   console.log(`You're ${answer} years old`)
// }

// ?? nullish coalescing 

console.log('0 || 1', 0 || 1)
console.log('0 ?? 1', 0 ?? 1)
console.log('null ?? 1', null ?? 1)
console.log('undefined ?? 1', undefined ?? 1)

// const isAuth = true
const isAuth = false
const age = 25

if (isAuth && age >= 18) {
  console.log('ok')
}

if (!isAuth) {
  console.log('please log in')
}

// const userString = prompt('Enter a string') || 'default string'
// console.log(userString)