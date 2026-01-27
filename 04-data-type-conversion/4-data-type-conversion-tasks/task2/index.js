console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50', typeof +'50'); // implicit
//2
console.log(Number('100'), typeof Number('100')); // explicit
//3
console.log('' + 1, typeof ('' + 1)); //implicit
//4
console.log(String(1), typeof String(1)); // explicit
//5
console.log(Boolean(0), typeof Boolean(0)); // explicit
//6
console.log(+'001', typeof +'001'); //implicit
//7
console.log(1 + '', typeof (1 + '')); // implicit
//8
console.log(Boolean(1), typeof Boolean(1)); // explicit
//9
console.log(String(001), typeof String(001)); // explicit
// console.log(String(1));
//10
console.log(Number('Hello World'), typeof Number('Hello World')); // explicit