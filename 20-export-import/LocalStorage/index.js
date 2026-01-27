// LocalStorage -- a storage inside the broser, which allows to save any data and store and they will be accessible after the page reload
// it is a local improvised database for your browser

// localStorage works for current domain; data is associated with the current damain

// localStorage  // it is a global object

const myNumber = 42

localStorage.removeItem('number') // deletes a specific key
console.log(localStorage.getItem('number'));
localStorage.setItem('Alena', 'Ermakova');

console.log(localStorage.getItem('Alena'));

localStorage.setItem('number', myNumber)
console.log(localStorage.getItem('number'));

localStorage.clear() // deletes all data

// Nuances when working with localStorage

const object = {
  name: 'Alena',
  age: 26
}

// const alena = localStorage.setItem('person', object)
localStorage.setItem('person', JSON.stringify(object))

const Alena = localStorage.getItem('person')

Alena.name = 'Ermakova'

const person = JSON.parse(Alena)

console.log(person.name)
//

// console.log(Alena)

// class Element {
//   #element

//   constructor(el, content) {
//     this.#element = document.createElement(`${el}`)
//     this.#element.textContent = content
//   }

//   render() {
//     console.log(this.#element)
//     return this.#element
//   }
// }

// const elementH1 = new Element('h1', Alena)
// console.log(elementH1)
// document.body.append(elementH1.render())

// ---serveral tabs synchronisation in localStorage



window.addEventListener('storage', (event) => { //storage -- an event if somethiing occures in other tabe for this domanis
  // console.log('storage have changed')
  console.log(event)
})

// localStorage.setItem('temp', Date.now())
localStorage.setItem('temp', Date.now())

// window.onstorage = () =>  {}

// the main difference between cookies and localStorage -- 4 kb vs 5Mb; cookie is sending to the server vs literally local storage