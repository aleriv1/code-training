// #region 12 this keyword task 1, the Student progress

/* 

Представьте, что вас как веб-разработчика попросили разработать веб-платформу, которая будет отслеживать прогресс студентов в обучении веб-разработке.

Для начала вам необходимо создать объект student, в котором будут 3 свойства:

stack - массив из строк, где каждая строка - это технология. Изначально массив должен быть равен ['HTML'].
level - тип данных number. level отвечает за текущий уровень студента и изначально равен 1.
improveLevel() - функция, которая сначала увеличивает значение свойства level у студента на единицу. Если level равен 2-м, то вам необходимо добавить в конец массива stack значение 'CSS', если 3-м - добавляем в конец stack значение 'JavaScript', 4-м - 'React', 5-ти - 'NodeJS'. Если значение level стало больше 5-ти, то вам необходимо вывести в модальном окне через alert() сообщение: “Студент выучил все технологии!”. Также функция improveLevel() должна возвращать в самом конце обновленный объект student.
В итоге, значение свойства stack после выполнения кода ниже должно быть равно ["HTML", "CSS", "JavaScript", "React", "NodeJS"]:

student
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
   .improveLevel()
Примечание: цепочка из подряд идущих функций improveLevel() работает так, потому что improveLevel() возвращает объект student, а у объекта student есть метод improveLevel().

Посмотрите на пример:

const student = {
   improveLevel() {
      return this;
   }
};

student
   .improveLevel()
   .improveLevel()
   .improveLevel();

 */

const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
    ++this.level;
    if (this.level === 2) {
      this.stack.push("CSS");
    } else if (this.level === 3) {
      this.stack.push("JavaScript");
    } else if (this.level === 4) {
      this.stack.push("React");
    } else if (this.level === 5) {
      this.stack.push("NodeJS");
    } else if (this.level > 5) {
      console.log("Студент выучил все технологии!");
      // alert("Студент выучил все технологии!");
    } else {
      console.log("Что-то пошло не так.");
    }
    return this;
  },
};

console.log("student.stack", student.stack, "student.level", student.level);

// student.improveLevel();

console.log(
  student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
);
console.log("student.stack", student.stack, "student.level", student.level);

// aleternative AI option after checking the solutioon
// const student = {
//   stack: ["HTML"],
//   level: 1,
//   improveLevel() {
//     this.level++;

//     const technologies = {
//       2: "CSS",
//       3: "JavaScript",
//       4: "React",
//       5: "NodeJS"
//     };

//     if (technologies[this.level]) {
//       this.stack.push(technologies[this.level]);
//     } else if (this.level > 5) {
//       alert("Студент выучил все технологии!");
//     }

//     return this;
//   }
// };

// https://codepen.io/aleriv1/pen/EayVXbK

// #endregion 12 this keyword task 1, the Student progress

// #region 12 this keyword task 2, is the Domestic animal?

/* 
У вас есть 2 объекта dog и bird, в которых содержится их описание:

const dog = {
   name: 'Чарли',
   type: 'Собака',
   makeSound() {
      return 'Гав-Гав';
   }
}

const bird = {
   name: 'Петя',
   type: 'Воробей',
   makeSound() {
      return 'Чик-чирик';
   }
}
Вам необходимо создать функцию makeDomestic(), которая будет работать с ключевым словом this таким образом:

function makeDomestic(isDomestic) {
   Твоя реализация
}

makeDomestic.bind(dog, true)(); 
Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
И выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

makeDomestic.call(bird, false); 
Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"

Она должна выводить в консоль всю информацию о животном в сообщении: «type по имени name говорит sound», где name — имя животного, type — его тип, sound — результат вызова функции makeSound().

Также функция makeDomestic() должна принимать параметр isDomestic. Он является типом данных boolean и показывает, домашнее ли животное или нет (true/false).

Функция makeDomestic() должна возвращать новый объект животного, в котором будут все прошлые параметры (name, type, makeSound()), а также будет добавлен новый параметр isDomestic.

Кроме этого, для обращения к свойствам животного функция makeDomestic() должна использовать только this. Т.е. вам разрешено обращаться к свойствам только через this.name либо this.makeSound(), но никак не bird.name либо bird.makeSound().

Вызовите функцию makeDomestic() 3 раза, используя методы bind(), call(), apply(). При использовании bind() функция makeDomestic() должна работать с объектом dog, при apply() и call() - с объектом bird. Не забывайте передавать параметр isDomestic в функцию при ее вызове.
 */

const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  const isDomesticAnimal = {
    ...this,
    isDomestic,
  };
  return isDomesticAnimal;
}

makeDomestic.bind(dog, true)();
makeDomestic.call(bird, false);
makeDomestic.apply(bird, [false]);

// https://codepen.io/aleriv1/pen/NPrGgeV

// #endregion 12 this keyword task 2, is the Domestic animal?

// #region 12 this keyword task 3, footballer

/* 

Дан объект footballer, в котором есть некоторая информация о футболисте и действиях, которые он может выполнять:

const footballer = {
   fullName: 'foot0',
   attack: () => {
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
   },
   scoreGoal(sound) {
      console.log(`${this.fullName} забил гол! Вот это да!`);
      this.celebrate(sound);
   },
   celebrate(sound) {
      console.log(sound);
   },
   goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
   }
};

const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack();
score('Сиииии');
substitute('foot1');
К сожалению, данный код работает неверно. В некоторых случаях он выводит undefined, а в других - вообще ошибку.

Вам необходимо исправить данный код, используя bind(), call() и apply():

Функцию attack() необходимо исправить при помощи bind() + нужно вспомнить особенность стрелочных функций (нет своего this).
Функцию score() - при помощи call().
Функцию substitute() - при помощи apply().

 */

const footballer = {
  fullName: "foot0",
  // attack: () => {
  attack() {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`);
    this.celebrate(sound);
  },
  celebrate(sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    );
  },
};

const attack = footballer.attack.bind(footballer);
// const score = footballer.scoreGoal;
const score = function (sound) {
  footballer.scoreGoal.call(footballer, sound);
};
// const substitute = footballer.goToSubstitution;
const substitute = function (...args) {
  footballer.goToSubstitution.apply(footballer, args);
};

attack();
// score.call(footballer, "yes");
score("yes-yes");
// substitute.apply(footballer, ["foot1"]);
substitute("foot1");

// https://codepen.io/aleriv1/pen/zxBvdVa

// #endregion 12 this keyword task 3, footballer
