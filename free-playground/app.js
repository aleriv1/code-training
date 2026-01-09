class ArrayForFly {
  constructor(name, animal, expirience) {
    this.name = name;
    this.animal = animal;
    this.expirience = expirience;
  }
}

// const obj = new ArrayForFly("Aleks", "tiger", 39);

console.log(new ArrayForFly("Aleks", "tiger", 39));

const arrayToPlay = [
  new ArrayForFly("Aleks", "tiger", 39),
  new ArrayForFly("Alena", "panther", 26),
];

console.log(arrayToPlay);
