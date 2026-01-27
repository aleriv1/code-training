let ageVar = 18
console.log('ageVar conversion:', Number(ageVar), String(ageVar), Boolean(ageVar))

let stringVar = 'hello'
console.log('stringVar conversion:', Number(stringVar), String(stringVar), Boolean(stringVar))

let booleanVar = true
console.log('booleanVar conversion:', Number(booleanVar), String(booleanVar), Boolean(booleanVar))

let nothingVar = undefined
console.log('nothingVar conversion:', Number(nothingVar), String(nothingVar), Boolean(nothingVar))

let nullVar = null
console.log('nullVar conversion:', Number(nullVar), String(nullVar), Boolean(nullVar))


let bigIntVar = 100n
console.log(typeof bigIntVar)
console.log('bigIntVar conversion:', Number(bigIntVar), String(bigIntVar), Boolean(bigIntVar))

let objectVar = {
  key: 'value'
}
console.log('objectVar conversion:', Number(objectVar), String(objectVar), Boolean(objectVar))

let symbolVar = Symbol('s')
console.log('symbolVar conversion:', Number(symbolVar), String(symbolVar), Boolean(symbolVar))
