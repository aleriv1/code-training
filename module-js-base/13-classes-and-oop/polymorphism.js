// #region polymorphism
// polymorphism - it is one action -- and several realizations

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {}
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log("woof woof");
  }
}

class Horse extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log("neigh neigh");
  }
}

// makeSound is an exmaple of polymorphism -- one actio n-- and several realizations

/* 
Программа как текст — это набор символов.
Смысл и поведение возникают только при исполнении.
«Полиморфное поведение программы» — это абстрактное описание наблюдаемого эффекта исполнения,
а не отдельная сущность внутри движка.

Важно зафиксировать границу:

✔ в движке есть конкретные алгоритмы (lookup, dispatch)

✔ в программе есть конкретные инструкции

❌ в движке нет понятия «полиморфизм»

✔ «полиморфизм» — это термин уровня модели/описания, удобный для мышления и проектирования

Одной строкой, максимально жёстко:

Полиморфизм — это не то, что “существует” в коде, а то, как мы описываем его поведение.
 */

// #endregion polymorphism
