// math

// negative numbers

// -5

let counter = -5
console.log(counter)


console.log('+', 2 + 2)
console.log('-', 10 - 5)
console.log('*', 2 * 7)
console.log('/', 20 / 10)
console.log('2 + 2 * 2', 2 + 2 * 2)
console.log('**', 2 ** 3)
console.log(5 ** 3)
console.log('%', 10 % 3)

// increment and decrement

let cupsOfCoffee = 0

cupsOfCoffee = cupsOfCoffee + 1
console.log('cupsOfCoffee', cupsOfCoffee)
cupsOfCoffee += 1
console.log('cupsOfCoffee', cupsOfCoffee)
cupsOfCoffee += 5
console.log('cupsOfCoffee', cupsOfCoffee)

cupsOfCoffee -= 1
console.log('cupsOfCoffee', cupsOfCoffee)

cupsOfCoffee++
console.log('cupsOfCoffee', cupsOfCoffee)


++cupsOfCoffee
console.log('cupsOfCoffee', cupsOfCoffee)


// diff ++var and var++

let plusPlus = 0

console.log('1', plusPlus++) // this recording method returns the original value
console.log('2', ++plusPlus) // this recording method returns the new value (first produces an effect)

let value = 5
value = value * 5
value *= 2
console.log('value', value)

value /= 10
console.log('value', value)