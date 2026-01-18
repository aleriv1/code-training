// console.log('alenaErmakova')

function checkQuestionAnswer(question, correctAnswer) {
  const answer = prompt(question,)

  answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ? console.log('true') : console.log('false')

}

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');