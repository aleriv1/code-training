const numberOfElements = 3;

// #region syncrhonous code example

console.log("loop begin, synchronous code example");
for (let i = 0; i < numberOfElements; i++) {
  console.log("i", i);
}
console.log("loop end, synchronous code example");

// #endregion syncrhonous code example

// #region asynchronous code example -- getting data from the server -- they can come in 25sec 1min etc

// setTimeout()
// setInterval()

// setTimeout(() => console.log("setTimeout"), 3000);

// setInterval(() => console.log("setInterval"), 1000);

// #region promise
console.log(`
  ---
  promise explanation begin
  \\/`);

const developer = {
  name: "Aleksandr",
  isJsDev: true,
  // isJsDev: false, // for reject in promise
};

const promise = new Promise((resolve, reject) => {
  if (developer.isJsDev) {
    setTimeout(() => {
      resolve(`${developer.name} is a JS developer`); // function that called when promise is fulfilled successfully
    }, 3000);
  } else {
    reject(`${developer.name} is not a JS developer`);
  }
});

console.log(promise); // now it in pending status
// to get data< which we passed to resolve and reject, we need to process this promise; for this -- method then, catch, finally

promise
  .then((successMessage) => {
    // then will be called, when resolve will be executed
    console.log("successMessage", successMessage);
    // then возвращает promise, so ...
  })
  .catch((error) => {
    console.log("error", error);
    // ^! what is the difference between an error and its catching
    // ^! what is the error processing
  })
  .finally(() => {
    console.log("finally");
  });
// ^! callback -- the action to use after?

// status of the Promise:
// pending (в ожидании),
// fulfilled,
// rejected

const car = {
  name: "ferrari 250 gto",
  fuel: 10,
};

const promiseCar = new Promise((resolve, reject) => {
  if (car.fuel > 0) {
    resolve("car is ready");
  } else {
    reject("car is not ready");
  }
});

promiseCar
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

promiseCar.then(console.log).catch(console.log);

// console.log(`
//   /\\
//   promise explanation begin
//   ---
//   `);

// #endregion promise

// #endregion asynchronous code example -- getting data from the server -- they can come in 25msec 1sec etc
