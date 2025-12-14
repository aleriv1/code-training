// console.log
console.log('console.log conversion:', Number(console.log), String(console.log), Boolean(console.log))

{ name: 'Maxim' }
console.log('{ name: "Maxim" } conversion:', Number({ name: 'Maxim' }), String({ name: 'Maxim' }), Boolean({ name: 'Maxim' }))

// Number
console.log('Number conversion:', Number(Number), String(Number), Boolean(Number))

// ''
console.log('"" conversion:', Number(""), String(""), Boolean(""))

// 0
console.log('0 conversion:', Number(0), String(0), Boolean(0))

//   - 10
console.log('-10 conversion:', Number(-10), String(-10), Boolean(-10))

// '-105' 
console.log('" - 105" conversion:', Number('-105'), String('-105'), Boolean('-105'))

// Symbol('key')
console.log('Symbol("key") conversion:', Number(Symbol('key')), String(Symbol('key')), Boolean(Symbol('key')))