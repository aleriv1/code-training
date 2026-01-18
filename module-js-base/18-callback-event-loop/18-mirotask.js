// microttasks -- then(), catch(), finally()


/* console.log("Let's start")

setTimeout(() => {
  console.log("Hello! I'm setTimeout")
}, 1000)

const promise = new Promise((resolve) => {
  console.log("I am in promise")
  resolve('Return the result from the promise')
})

setTimeout(() => {
  console.log("I am also in setTimeout, but I'll wait longer")
}, 2000)

promise.then((result) => {
  console.log(result)
})

console.log("Let's finish") */


/* event loop order
are executed

1. macrotasks
the main macrotask in the code is -- is code executing (the code running from the first strok to the last one)
2. to call forth all that is in microtasks queue
3. to call forth all that is in callback queue

After the third item the loop repeats when a new macrotask arises
*/

// Let's start
// I am in promise
// Let's finish
// I am also in setTimeout, but I'll wait longer
// "Hello! I'm setTimeout"
// I am also in setTimeout, but I'll wait longer

const promiseTest = new Promise((resolve) => {
  console.log('in promiseTest');
  setTimeout(() => {
    console.log('in setTimeout');
    resolve();
  }, 0);
});

promiseTest.then(() => {
  console.log('in then');
});