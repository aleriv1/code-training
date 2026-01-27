// toUpperCase, toLowerСфыу

const animal = 'Lion'

console.log('upper', animal.toUpperCase())
console.log('upper', animal.toLowerCase())

const toUpper = animal.toUpperCase()

// the initial var is not changed

console.log('animal', animal)

// to find symbols -- indexOf, includes

const text = 'my favorite programming language is js'

console.log('indexOf', text.indexOf('js')) //the index of the stroke; -1 if there is no such
console.log('indexOf', text.indexOf('o'))

// includes

// console.log('includes', text.includes('programming'))
console.log('includes', text.includes('555'))

// string cuttingo slice, substring

let programmingLanguage = 'JavaScript'
// console.log('slice', programmingLanguage.slice(1, 5))
console.log('slice', programmingLanguage.slice(0, 3))
console.log('slice', programmingLanguage.slice(1, 7))
console.log('slice', programmingLanguage.slice(1))


// console.log('substring', programmingLanguage.substring(1, 3))
console.log('substring', programmingLanguage.substring(0, 3))

// What is the difference between slice and substring

// Replign of the symbols -- replace, replaceAll


const programmingLanguage1 = 'JavaScript'

console.log('replace', programmingLanguage1.replace('Script', ''))
console.log('replace', programmingLanguage1.replace('Java', '123'))
console.log('replace', programmingLanguage1.replace('a', '123'))

console.log('replace', programmingLanguage1.replaceAll('a', 'A'))

// repeat

const helloText = 'hello'

console.log('repeat', helloText.repeat(2))

// trim

// const nameOfUser = prompt('What is your name')
const nameOfUser = '   Aleksandr    '

console.log('nameOfUser', nameOfUser)

console.log('trim', nameOfUser.trim())



