// #region event loop -- it is an inifnite loop where the js engine watis for tasks, then executes them and then waits again new tasks

function sayHello(name) {
  console.log(`Hello, ${name}`)
  return 'Alena'
}

console.log('start')
sayHello('Alena')
sayHello('Aleksandr')
sayHello('AlenaErmakova')
console.log('end')

console.log('start')
sayHello('Alena')
setTimeout(() => {
  sayHello('AlenaErmakova')
}, 0);
sayHello('Aleksandr')
// sayHello('AlenaErmakova')
console.log('end')

// #endregion event loop -- it is an inifnite loop where the js engine watis for tasks, then executes them and then waits again new tasks

// #region callback queue



// #endregion callback queue