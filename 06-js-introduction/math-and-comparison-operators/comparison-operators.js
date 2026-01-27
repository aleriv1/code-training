// comparasion operators

console.log(5 > 10)
console.log(5 < 10)
console.log(5 <= 5)
console.log(5 >= 6)
console.log('==', 100 == 100)
console.log('JavaScript' == 'javaScript')

console.log('S', 'S'.charCodeAt())
console.log('s', 's'.charCodeAt())

console.log('j', 'j'.charCodeAt())
console.log('J', 'J'.charCodeAt())

console.log('JavaScript' < 'javaScript')
// The comparison is done symbolically.

console.log('javaScript' > 'JavaScript')
// The comparison is done symbolically.


// == vs ===

// == it compares the value
// === it compares the value and types and doesn't convert types

console.log('"1" == 1', '1' == 1)
console.log('1' >= 1) // in js data types is converted


console.log('20' == '20') // the comparison is done symbolically
console.log('200' > '21') // the comparison is done symbolically

console.log(true == 1)
console.log(Number(true))
console.log(false == 0)


console.log(1 === 1)
console.log('1' === 1)

console.log(true === 1)