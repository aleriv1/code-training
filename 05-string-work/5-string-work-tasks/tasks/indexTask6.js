
// let usertText = '    hello World '.trim()
// let usertText = (prompt('Enter the text') ?? '').trim()
// let userText = prompt('Enter the text')
// let usertText = '    hello World '

// let fragmentOfText = 'World'.trim()
// let fragmentOfText = prompt('the part from previous text')


// console.log(usertText.indexOf(fragmentOfText))

// console.log('string', usertText.slice(0, usertText.indexOf(fragmentOfText)))


function myNewSolution() {
  let userText = prompt('Enter the text')
  if (userText === null) {
    console.log('you refused to enter text')
  } else {
    if (userText === '') {
      console.log('you entered nothing')
    } else {
      let userTextTrimmed = userText.trim()
      let fragmentOfText = prompt('enter the part from previous text')
      if (fragmentOfText === null) {
        console.log('you refused to enter fragment of text')
      } else {
        if (fragmentOfText === '') {
          console.log('you entered nothing for fragment of text')
        } else {
          let fragmentOfTextTrimmed = fragmentOfText.trim()
          // let string = userTextTrimmed.slice(0, userText.indexOf(fragmentOfText)).trim()
          let string = userTextTrimmed.slice(0, userText.indexOf(fragmentOfTextTrimmed))
          // console.log(`the final string is ${string}`)
          alert(`the final string is ${string}`)
        }
      }
    }
  }
}

function mySimpleSolution() {
  let userText = prompt('Введите текст').trim()
  let fragmentOfText = prompt('Введите слово из текста')
  let indexOfFragmet = userText.indexOf(fragmentOfText)

  alert(`Результат ${userText.slice(0, indexOfFragmet)}`)
}

const mentorSolution = function () {
  let userText = prompt("Введите текст");
  userText = userText.trim();
  let fragmentOfText = prompt("Введите слово из текста");
  fragmentOfText = fragmentOfText.trim();

  const indexOfWord = userText.indexOf(fragmentOfText);
  const resultString = userText.slice(0, indexOfWord);
  alert(`Результат: ${resultString}`);
}

// myNewSolution()