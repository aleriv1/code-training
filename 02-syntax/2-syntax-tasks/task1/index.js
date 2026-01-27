// hello
/* hello
hello */

let myName = 'Aleksandr'
let mySurname = 'Ermakov'
let myFavoriteDrink = 'Coffee'
let myFavoriteAnimal = 'Cat'
let myFavoriteProgrammingLanguage = 'JS'

let block = document.createElement('div')
block.textContent = 'hello'
document.body.appendChild(block)
block.style.display = 'flex'

const cl = {
  background: "green"
}

for (let i = 0; i < 5; i++) {
  console.log('hello')

  let div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.border = '1px solid black'
  // div.style.background = 'red'
  div.style.marginLeft = '5px'
  div.classList.add('green')

  block.appendChild(div)

}

console.log(myName)
console.log(mySurname)
console.log(myFavoriteDrink)
console.log(myFavoriteAnimal)
console.log(myFavoriteProgrammingLanguage)