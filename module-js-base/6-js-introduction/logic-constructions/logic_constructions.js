//  if
// if else
// switch

// ? :

const isFronEndDeveloper = true;
// const isFronEndDeveloper = false;

if (isFronEndDeveloper) {
  console.log(`you're a Front-End developer, welcome to the team`)
} else {
  console.log(`you're not a Front-End developer`)
}


const closingTime = 8
// const curentTime = new Date().getHours()
const currentTime = 7

if (currentTime > closingTime) {
  console.log('the store is closed')
} else {
  console.log('the store is open. Come shopping')
}

const developerJobType = 'Front-End'
// const developerJobType = ''

if (developerJobType === 'Front-End') {
  console.log('2000$')
} else if (developerJobType === 'Back-End') {
  console.log('1500%')
} else if (developerJobType === 'Full-Stack') {
  console.log('3500%')
} else {
  console.log('Salary is not determined')
}


// switch case -- it is the replacement of if else 


switch (developerJobType) { //inside the parenthesis we put the value, var, or expression we want to compare (for which we well check the equality, case)
  case 'Front-End':
    console.log('2000$')
    break
  case 'Back-End':
    console.log('1500$')
    break
  case 'Full-Stack':
    console.log('3500$')
    break
  default:
    console.log('Salary is not determined')
}

// ? :

const favoriteDrink = 'coffee'
let message = ''

if (favoriteDrink === 'coffee') {
  message = 'You like coffee'
} else {
  // message = 'You don\'t like coffee'
  message = 'You like tea'
}

console.log('message', message)


const message1 = favoriteDrink === 'coffee' ? 'You like coffee' : 'You like tea'
console.log('message', message1)