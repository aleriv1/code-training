// 1 string
// 2. number
// 3. boolean
// 4. null -- empty, the value is unknown
// 5. undefined -- the value was not assigned
// 6. Object -- the complex data type
// 7. Symbol the uniqe object key
// 8. bigint the large number; more than (2^53 -1) (-(2^53 - 1))

// 1. Primitive -- simple data types -7 
// 2/ Non-primitive -- complex data types - 1 (object)

// typeof


// 1 string
const favoriteDrink = 'coffee'
console.log(favoriteDrink)

// 2. number
let numberOfCups = 5
console.log(numberOfCups)

// 3. boolean
let isColdDrink = true
console.log(isColdDrink)

// 4. null -- empty, the value is unknown
// Значение пусто или неизвестно
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink)

// 5. undefined -- the value was not assigned
// let carOwner
let carOwner = undefined
console.log(carOwner)

// 6. Object -- the complex data type; it allows to store multiple values
const drink = {
  favoriteDrink: 'Coffee',
  numberOfCups: 5,
  isColdDrink: true
}
console.log(drink)

// 7. Symbol the uniqe object key
const id = Symbol('id')
console.log(id)

// 8. bigint the large number; more than (2^53 -1) (-(2^53 - 1))
// const bigIntNumber = BigInt(10);
const bigIntNumber = 100n;
console.log(bigIntNumber)