// for
// while
// do while

// for (initial Value; conditions step) { }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i)
// }

for (let i = 10; i > 0; i--) {
  console.log(i)
}


let i = 0;

// while
while (i <= 10) {
  console.log('i', i)
  i += 1;
}

// do while


// do {
// } while (condition)

let iDoWhile = 0
do {
  console.log('iDoWhile', iDoWhile)
  iDoWhile++
  // } while (iDoWhile <= 10)
} while (iDoWhile < 5)

let iTest = 0
console.log('(iTest += 1) === iTest++', (iTest += 1) === iTest++, iTest)
iTest = 0
console.log('(iTest += 1) === ++iTest:', (iTest += 1) === ++iTest, iTest)


let starStringPre = '*'
// for (let i = 0; i < 3; i++) {
//   console.log(startString)
//   startString += '*'
// }

let row = 3
for (let i = 0; i < row; i++) {
  let spaceString = ''
  let starString = '*'
  for (let s = 0; s < i; s++) {
    starString += "**"
  }
  for (let j = 0; j < row - 1 - i; j++) {
    spaceString += ' '
  }
  // console.log(spaceString + starString)
  console.log(spaceString + starString)
  starString = starString + "**"
}

for (let i = 0; i < row; i++) {
  let starString = '*'
  let spaceString = ''
  for (let j = 0; j < row - 1 - i; j++) {
    starString += '**'
  }
  for (let s = 0; s < i; s++) {
    spaceString += ' '
  }
  console.log(spaceString + starString)
}

let word = 'word'
for (let i = 0; i < word.length; i++) {
  // console.log(word[i].toUpperCase())
  if (word[i] === 'r') {
    // break
    continue
  }
  console.log(word[i].toUpperCase())
}