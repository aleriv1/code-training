// #region 13 class and oop, task 1, rewrite function-constructor to class

/* 
Вам дана функция-конструктор, с помощью которой можно создавать экземпляры объектов.

Ваша задача состоит в том, чтобы переписать данную функцию на класс (class):

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.status = 'Junior';

    this.setTechnologies = function(technologies) {
      this.technologies = [
        ...this.technologies,
        ...technologies,
      ];
  }
    this.setNewStatus = function(newStatus) {
      this.status = newStatus;
    }
}

const student = new Student ('Maxim', 20);
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
student.setNewStatus('Middle');
console.log(student);

 */

class StudentClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.status = "Junior";
  }

  setTechnologies(technologies) {
    this.technologies = [...this.technologies, ...technologies];
  }

  setNewStatus(newStatus) {
    this.status = newStatus;
  }
}

const studentAleks = new StudentClass("Aleks", 20);
console.log(studentAleks);
studentAleks.setTechnologies(["HTML", "CSS", "JavaScript"]);
studentAleks.setNewStatus("Middle");
console.log(studentAleks);

// https://codepen.io/aleriv1/pen/pvbjmgW

// #endregion 13 class and oop, task 1, rewrite function-constructor to class

// #region 13-classes-and-oop, task2, age comparison

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  comapareAge(person) {
    if (this.age >= person.age) {
      console.log(`${this.name} старше ${person.name}`);
      // alert(`${this.name} старше ${person.name}`);
    } else {
      console.log(`${this.name} младше ${person.name}`);
      // alert(`${this.name} младше ${person.name}`);
    }
  }
}

const person1 = new Person("Alena", 26);
console.log(person1);

const person2 = new Person("Aleksandr", 39);
console.log(person2);

person1.comapareAge(person2);

// https://codepen.io/aleriv1/pen/LEZpoBP

// #endregion 13-classes-and-oop, task2, age comparison

// #region 13-classes-and-oop, task 3, the dictionary

/* 

Вам поручили задачу на проекте. Необходимо разработать словарь, в который можно добавлять слова с их описанием, удалять слова и получать их.

Для начала создайте класс Dictionary. Его конструктор принимает 1 параметр name.

Инициализируйте данное значение при помощи this. Также в конструкторе должно объявляться поле words, которое по умолчанию должно быть пустым объектом.

Вам необходимо в класс Dictionary добавить 4 метода:

add(). Данный метод добавляет новое слово в словарь. Он принимает в себя 2 параметра:
word - слово (тип данных строка).
description - описание слова (тип данных строка).
Присвойте объекту words по ключу word (этот параметр передали в метод add()) значение объекта, в котором будут храниться данные о слове и его описание. Пример объекта words после добавления слова "js":

// words
{   
    js: {
        word: 'js', 
        description: 'язык программирования',   
    }
}
Если слово уже существует в объекте words, то не нужно перезаписывать слово, которое уже было сохранено ранее. То есть, если значение по ключу уже существует, то ничего не делаем.


remove() - данный метод удаляет слово из словаря. Он принимает в себя ключ, по которому нужно удалить объект слова из объекта words.
get - данный метод получает слово из словаря. Он принимает в себя ключ из объекта words. Из метода необходимо возвратить найденный объект слова по переданному параметру ключа.
showAllWords() - данный метод не принимает в себя никаких параметров. Его задача состоит в том, чтобы вывести все слова, которые есть в объекте words, в консоль в формате “word - description” (word - само слово, description - описание слова).
Для тестирования написанного класса используйте данный код:

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

dictionary.remove('JavaScript');
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие
Примечание: в JavaScript для добавления в объект по динамическому ключу мы можем использовать []. Например:

const obj = {};
const dynamicKey = 'name';
obj[dynamicKey] = 'Elena';

console.log(obj); // { name: 'Elena' }

 */

class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    // #region добавление совет от grok :)

    if (
      typeof word !== "string" ||
      word.trim() === "" ||
      typeof description !== "string" ||
      description.trim() === ""
    ) {
      console.log("Ошибка: слово или описание должно быть непустой строкой");
      return;
    }

    // #endregion добавление совет от grok :)

    if (!Object.keys(this.words).find((key) => key === word)) {
      this.words[word] = { word: word, description: description };
    } else {
      console.log(`Такое слово уже есть в словаре, не добавляется`);
    }
  }
  remove(key) {
    delete this.words[key];
  }
  get(word) {
    if (word in this.words) {
      return this.words[word];
    } else {
      return "Такого слова нет в словаре";
    }
  }
  showAllWords() {
    let dictionaryWords = "";
    Object.values(this.words).forEach((value) => {
      // console.log(`${value["word"]} -- ${value["description"]}`)
      // console.log(`${value.word} - ${value.description}`)
      dictionaryWords += `${value.word} - ${value.description} \n`;
    });
    console.log(dictionaryWords);
  }
}

const dictionary = new Dictionary("Толковый словарь");

console.log(JSON.parse(JSON.stringify(dictionary)));
console.log("---");
dictionary.add("js", "programming language");
dictionary.add("react", "ui library");
dictionary.add("js", "PL");
console.log(dictionary);
console.log(JSON.parse(JSON.stringify(dictionary)));
console.log("---");
dictionary.remove("react");
console.log(dictionary);
console.log(dictionary.get("js"));
dictionary.add("Alena", "love");
dictionary.showAllWords();
console.log(dictionary.get("Alena"));
console.log(dictionary.get("some"));
dictionary.add(123);

// https://codepen.io/aleriv1/pen/WbxrrXb

// #endregion 13-classes-and-oop, task 3, the dictionary

// #region 13-classes-and-oop, task4, the Hard word dictionary

/* 
В прошлом задании вы создали словарь. Заказчик доволен проделанной работой и команда разработки тоже. Так как вы уже хорошо разобрались с технологией словаря, то вас попросили реализовать еще один словарь. Заказчик хочет создать новую категорию слов “Сложные слова”.

Используйте код, написанный в прошлом задании. Вам необходимо создать дочерний класс HardWordsDictionary от класса Dictionary. Конструктор у HardWordsDictionary принимает в себя также параметр name и вызывает конструктор родительского класса.

Примечание: если конструктор только вызывает родительский конструктор со всеми переданными параметрами, то в дочернем классе его можно не реализовывать, автоматически будет вызываться родительский (ссылка на документацию).

Все методы, которые есть в Dictionary, должны остаться без изменений в HardWordsDictionary, кроме одного. Вам необходимо переопределить метод add(), который должен работать по той же логике, что и add() у Dictionary, только объект слова должен выглядеть следующим образом:

{
   word: 'word',
   description: 'description',
   isDifficult: true,
}
Для теста класса HardWordsDictionary используйте данный код:

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();
    
// дилетант - Тот, кто занимается наукой или искусством // без специальной подготовки, обладая только поверхностными знаниями.// 
 */

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (
      typeof word !== "string" ||
      word.trim() === "" ||
      typeof description !== "string" ||
      description.trim() === ""
    ) {
      console.log("Ошибка: слово или описание должно быть непустой строкой");
      return;
    }

    if (!(word in this.words)) {
      this.words[word] = {
        word: word,
        description: description,
        isDifficult: true,
      };
    } else {
      console.log(`Такое слово уже есть в словаре, не добавляется`);
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

console.log(JSON.parse(JSON.stringify(hardWordsDictionary)));
hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);
hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);
hardWordsDictionary.add("неологизм", "123");
hardWordsDictionary.add("alena", "love");

console.log(hardWordsDictionary);

console.log(hardWordsDictionary.get("неологизм"));
console.log(JSON.parse(JSON.stringify(hardWordsDictionary)));
hardWordsDictionary.remove("неологизм");
console.log(hardWordsDictionary);

hardWordsDictionary.showAllWords();

// https://codepen.io/aleriv1/pen/azZdZjN

// #endregion 13-classes-and-oop, task4, the Hard word dictionary

// #region 13-classes-and-oop, task 5, the polymorphism example

/* 
Ваша компания создает внутренний продукт для облегчения контроля за ростом своих разработчиков. Вам поручили задачу реализовать такой продукт.

Для начала вам необходимо создать класс Developer, конструктор которого будет принимать 3 параметра:

fullName — имя разработчика
age — возраст разработчика
position- текущая позиция разработчика в компании (например, Junior, Middle, Senior)
Инициализируйте все параметры при помощи this. Также создайте внутри конструктора поле technologies, которое по умолчанию будет равно пустому массиву.

Кроме этого, в классе Developer вам необходимо создать 2 метода:

code — метод, у которого тело изначально пустое (в фигурных скобках ничего нет).
learnNewTechnologies() - данный метод принимает в себя 1 параметр technology, который должен добавляться в конец массива technologies.
После проделанных действий у вас должен получиться шаблон Developer, благодаря которому вы будете создавать дочерние классы.

Вам сейчас необходимо создать 3 дочерних класса от класса Developer:

JuniorDeveloper. Конструктор данного класса принимает 2 параметра: fullName и age. Вызовите конструктор родительского класса и передайте туда эти 2 параметра. В качестве 3-го у нас выступает position. Вам необходимо его указать по умолчанию. Напишите значение "Junior" в качестве 3-го параметра вызова родительского конструктора. Кроме этого, необходимо переопределить метод code(), чтобы он выводил в консоль строку: “Junior разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript'.
MiddleDeveloper. Проделайте ту же самую работу в конструкторе, что и в JuniorDeveloper. Только на место position передавайте значение "Middle". Метод code() у класса MiddleDeveloper должен выводить в консоль строку: “Middle-разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’.
SeniorDeveloper. Проделайте ту же самую работу в конструкторе, что и в JuniorDeveloper. Только на место position передавайте значение "Senior". Метод code() у класса SeniorDeveloper должен выводить в консоль строку: “Senior-разработчик пишет код...”. Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’, ‘NodeJS’.
Примечание: когда вы переопределите метод code() в дочерних классах, то вы используете принцип Полиморфизм.

Тестируйте написанные классы с помощью этого кода:

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies('Docker');

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
 */

class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName;
    this.age = age;
    this.position = position;
    this.technologies = [];
  }

  code() {}
  learnNewTechnologies(technology) {
    this.technologies.push(technology);
  }
}

const developer = new Developer("Aleksandr", 39, "Front-End developer");
console.log(developer);
developer.learnNewTechnologies("JS");
console.log(developer);
developer.learnNewTechnologies("TS");
console.log(developer);

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Junior");
    this.technologies = ["HTML", "CSS", "JavaScript"];
  }

  code() {
    console.log("Junior разработчик пишет код...");
  }
}

const junior = new JuniorDeveloper("Aleksandr", 39);
console.log(junior);

class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Middle");

    this.technologies = ["HTML", "CSS", "JavaScript", "React"];
  }
  code() {
    console.log("Middle-разработчик пишет код...");
  }
}

const middle = new MiddleDeveloper("Aleksandr", 39);
console.log(middle);

class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, "Senior");

    this.technologies = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
  }
  code() {
    console.log("Senior-разработчик пишет код...");
  }
}

const senior = new SeniorDeveloper("Aleksandr", 39);
console.log(senior);

const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);
const middleDeveloper = new MiddleDeveloper("Игорь", 25);
const seniorDeveloper = new SeniorDeveloper("Максим", 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies("Docker");

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position,
  juniorDeveloper.technologies
);
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(
  middleDeveloper.fullName,
  middleDeveloper.age,
  middleDeveloper.position,
  middleDeveloper.technologies
);
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(
  seniorDeveloper.fullName,
  seniorDeveloper.age,
  seniorDeveloper.position,
  seniorDeveloper.technologies
);
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']

// https://codepen.io/aleriv1/pen/bNeEWOr

// #endregion 13-classes-and-oop, task 5, the polymorphism example
