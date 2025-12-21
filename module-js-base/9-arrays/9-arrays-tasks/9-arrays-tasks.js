// #region 9-arrays-tasks task 1 people in the queue

const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel(queueArray) {
  const personWithParcel = queueArray.shift();
  // alert(
  console.log(
    `${personWithParcel} получил(а) посылку. В очереди осталось ${queueArray.length} человек.`
  );
}

function leaveQueueWithoutParcel(queueArray) {
  const personWithoutParcel = queueArray.pop();
  console.log(
    `${personWithoutParcel} не получил(а) посылку и ушел(ла) из очереди`
  );
}

// Поолучение посылки первымми двумя Кристиной и Олегом
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

// Поолучение посылки первымми Кириллом
giveParcel(peopleWaiting);

let poepleLeftInQueue = peopleWaiting.length;

for (let i = 0; i < poepleLeftInQueue; i++) {
  leaveQueueWithoutParcel(peopleWaiting);
}

// https://codepen.io/aleriv1/pen/qENWBOy

// #endregion 9-arrays-tasks task 1 people in the queue

// #region 9-arrays-tasks task 2 getSumOfSequence()

function getSumOfSequence(number) {
  const theSequence = [];
  for (let i = 1; i <= number; i++) {
    theSequence.push(i);
  }
  console.log("theSequence", theSequence);
  return theSequence[0] + theSequence.at(-1);
}

getSumOfSequence(5);

console.log(getSumOfSequence(12));

// https://codepen.io/aleriv1/pen/ZYOzYyw

// #endregion 9-arrays-tasks task 2 getSumOfSequence()

// #region 9-array tasks task3 the favorite coffee

const coffees = ["Latte", "Cappuccino", "Americano"];

function isCoffeeExist(coffeeList) {
  // let coffeeName = "LAtte";
  // let coffeeName = "cAppucCino";
  let coffeeName = "aMericanO";
  // let coffeeName = "c";л
  // let coffeeName = prompt("Введите название кофе");

  const existingCoffeIndex = coffeeList.findIndex((coffee) => {
    return coffee.toLowerCase() === coffeeName.toLocaleLowerCase();
  });

  console.log(existingCoffeIndex);

  if (existingCoffeIndex >= 0) {
    console.log(
      // alert(
      `Держите ваш любимый кофе ${coffeeList.at(existingCoffeIndex)}. Он ${
        existingCoffeIndex + 1
      }-й по популярности в нашей кофейне.`
    );
  } else {
    console.log("К сожалению, такого вида кофе нет в наличии");
    // alert("К сожалению, такого вида кофе нет в наличии");
  }
}

isCoffeeExist(coffees);

// https://codepen.io/aleriv1/pen/LEZPpow

// #endregion 9-array tasks task3 the favorite coffee

// #region 9-array tasks task 4 the prices become highter

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

function updatePrices(prices, coffeeList) {
  const updatePrices = prices.map((price) => {
    return price + price * 0.5;
  });

  coffeeList.forEach((coffee, index) => {
    console.log(`Кофе ${coffee} сейчас стоит ${updatePrices.at(index)}`);
    // alert(`Кофе ${coffee} сейчас стоит ${updatePrices.at(index)}`);
  });
}

updatePrices(prices, coffees);

// console.log(updatePrices(prices));

// https://codepen.io/aleriv1/pen/azZoNoN

// #endregion 9-array tasks task 4 the prices become highter

// #region 9-array tasks task 5 coffee shop estimations

// function getEstimations() {

// }

function getClientEstimation() {
  const clientEstimations = [];

  function askClientToGiveEstimation() {
    // const clientEstimation = +prompt(
    //   "Как вы оцениваете нашу кофейну от 1 до 10"
    // );
    const clientEstimation = 7;
    if (clientEstimation > 0 && clientEstimation <= 10) {
      clientEstimations.push(clientEstimation);
    }
    return clientEstimations;
  }

  for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
  }
  if (!clientEstimations.length) {
    // console.log(
    alert("Вы отказались оценивать наше кафе или ввели некорректную оценку");
    return;
  }

  const goodEstimations = clientEstimations.filter(
    (estimation) => estimation > 5
  );
  const notGoodEstimations = clientEstimations.filter(
    (estimation) => estimation <= 5
  );

  // alert(
  console.log(
    `Всего положительных оценок: ${
      clientEstimations.filter((estimation) => estimation > 5).length
    }; \nВсего отрицательных оцено ${
      clientEstimations.filter((estimation) => estimation <= 5).length
    }
    `
  );
}

getClientEstimation();

// https://codepen.io/aleriv1/pen/xbOKVqq

// #endregion 9-array tasks task 5 coffee shop estimations
