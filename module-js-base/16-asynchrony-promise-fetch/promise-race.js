// Promise.race([new Promise(), new Promise(), new Promise()]);

// it returns the mose fulfulled promis

// ^! if in Promise.race one will be rejected -- wil it be returned as an error -- to catch in catch

// ^! if in Promise.all ther is a rejectd promis -- will it only that on be returned

// const promise1 = new Promise((res, rej) => {
const promise1 = new Promise((res) => {
  setTimeout(() => {
    res("promise1");
  }, 500);
});

const promise2 = new Promise((res) => {
  setTimeout(() => {
    res("promise2");
  }, 2000);
});
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    // res("promise3");
    rej("promise3");
    // }, 1000);
  }, 100);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.error("err", err);
  });

const promisTest = new Promise((res, rej) => {
  setTimeout(() => {
    rej("rej");
    // res("res");
  }, 100);
});

promisTest
  .then((r) => {
    console.log(r);
  })
  .catch((er) => console.log(er));
