// #region part1

// #region 9plus task1

// console.log('alenaErmakova')

/* 
Сейчас ваша задача состоит в том, чтобы создать функцию checkQuestionAnswer(), которая будет задавать пользователю вопрос и автоматически проверять полученный ответ.

Она принимает в себя 2 параметра: question и correctAnswer.

Параметр question — это вопрос, который будет задаваться пользователю и будет передан, как параметр в функцию prompt().

Параметр correctAnswer — это правильный ответ на вопрос. Вам необходимо получить значение, которое введет пользователь в текстовое поле, и сверить его с параметром correctAnswer. Если пользователь дал верный ответ, то выведите в модальном окне через alert() сообщение: «Ответ верный», иначе — «Ответ неверный».

Также в коде нам нужно учесть, если пользователь введет данную строку «яБлОко», а параметр correctAnswer будет равен «Яблоко», то ответ всё равно должен быть засчитан как правильный. То есть, ответ не должен зависеть от регистра символов и от количества пробелов в начале и в конце ответа.

Когда создадите функцию, вызовите данный код для ее проверки:

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
 */

function checkQuestionAnswer(question, correctAnswer) {
  const answer = prompt(question,)

  answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase() ? console.log('true') : console.log('false')
}

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');

// #endregion 9plus task1

// #region 9plus task2

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

function showSuccessMessage(char) {
  console.log(`There are no foribidden sybmol "${char}" under any index`)
}

function showErrorMessage(char, i) {
  console.error(`A forbidden symbol "${char}" is found under the index ${i}`)
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {


  const errorSymbolIndexArray = []

  for (let i = 0; i < text.length; i++) {
    if (text[i] === errorSymbol) errorSymbolIndexArray.push(i)
  }


  if (errorSymbolIndexArray.length) {
    return errorSymbolIndexArray.forEach((indexItem) => {
      showErrorMessage(errorSymbol, indexItem)
    })
  }

  successCallback(errorSymbol)

}

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
checkTextOnErrorSymbol(text, '1', showSuccessMessage, showErrorMessage);


// #endregion 9plus task2

// #endregion part1

// #region part2

const goals = [8, 1, 1, 3, 2, -1, 5];
// const goals = [0];

// const statistics = {
function getStat(stat) {

  if (stat.length) {
    const notAutoLosses = stat.filter((score) => score > - 1)
    return {
      getHighestScoringMatch(stat) {
        const theMostGoals = Math.max(...stat)

        if (theMostGoals > -1) {
          const highestScoreMatch = stat.findIndex((matchScore) => matchScore === theMostGoals)
          console.log(highestScoreMatch)

          if (highestScoreMatch > -1) {
            console.log(`Самый результативный матч был под номером ${highestScoreMatch + 1}. В нем было забито ${theMostGoals} гол(ов).`)
          }
        }

      },

      getFewestGoalsmatch(stat) {


        const fewstGoals = Math.min(...notAutoLosses)
        const fewstGoalMatches = notAutoLosses.map((matchScore, indexMatchScore) => {
          return { matchScore, indexMatchScore: indexMatchScore + 1 }
        })
          .filter(({ matchScore }) => matchScore === fewstGoals)
        // console.log(fewstGoalMatches)
        console.log(`Самые нерезультативные матчи были под номерами ${fewstGoalMatches.map(({ indexMatchScore }) => indexMatchScore).join(', ')}. В каждом из них было забито по ${fewstGoals} мячу(а)`)

      },

      getTotalGals() {
        // const totalGoals = stat.filter((goals) => goals > -1)
        const totalGoals = notAutoLosses.filter((goals) => goals > -1)
          .reduce((acc, goals) => {
            return acc + goals
          }, 0)
        console.log(`Общее количество голов ${totalGoals}`)
      },

      isAutoLoss(stat) {
        const isAutoLoss = stat.some((goals) => goals === -1)
        console.log(`Были автоматические поражения: ${isAutoLoss ? 'да' : 'нет'}`)
      },

      getAverageGoals(stat) {
        const averageGoals = notAutoLosses.reduce((acc, goals) => {
          return acc + goals
        }, 0) / stat.length

        console.log(`Среднее количество голов за матч равно ${Math.floor(averageGoals)}`)
      },

      sortGoals() {
        // const sortedGoals = notAutoLosses.sort((a, b) => a - b)
        const sortedGoals = [...stat].sort((a, b) => a - b)

        console.log(sortedGoals)
      }


    }
  }
}
// }

const statistics = getStat(goals)

statistics.getHighestScoringMatch(goals)
statistics.getFewestGoalsmatch(goals)
statistics.getTotalGals(goals)
statistics.isAutoLoss(goals)
statistics.getAverageGoals(goals)
statistics.sortGoals()

console.log(goals)

// #region 9plust part2 task2

function getMathResult(exp) {

  const mathOp = [">", "<", "=", "+", "-", "*", "/"]

  if (exp.length < 3) {
    console.log('error')
    return
  }

  if (isNaN(exp[0]) || isNaN(exp.at(-1))) {
    console.log('erro')
    return
  }


  if (!mathOp.some((op) => {
    return exp.slice(1, -1).some((el) => {
      return el === op
    })
  })) {
    console.log('error')
    return
  }
  const finalExp = exp.filter((el) => {
    return !isNaN(el) || mathOp.includes(el)
  })
  console.log(finalExp)


  if (finalExp.length > 3) {
    console.log('error')
  }

  const [num1str, op, num2str] = finalExp

  const num1 = Number(num1str)
  const num2 = Number(num2str)

  switch (op) {
    case "+": return num1 + num2
    case "*": return num1 * num2
    case "-": return num1 - num2
    case "/": return num2 === 0 ? console.log("ошибка") : num1 / num2
    case ">": return num1 > num2
    case "<": return num1 < num2
    case "=": return num1 === num2
    default: return console.log('error')
  }
}


const arrExp = ['100', 'hello', 'javascript', 'help200', '+', 4]

const calculation = getMathResult(arrExp)
console.log(calculation)

// #endregion 9plust part2 task2

// #endregion part2
