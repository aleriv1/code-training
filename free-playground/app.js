class classForArray {
  constructor(name, animal, expirience) {
    this.name = name;
    this.animal = animal;
    this.expirience = expirience;
  }

  getInfo() {
    const infoStriing = `name is: ${this.name}; animal is: ${this.animal}; expirience is: ${this.expirience}`;
    return infoStriing;
  }
}

// const obj = new ArrayForFly("Aleks", "tiger", 39);

// console.log(new ArrayForFly("Aleks", "tiger", 39));

const arrayToPlay = [
  new classForArray("Aleksand", "tiger", 39),
  new classForArray("Alena", "panther", 26),
  new classForArray("Alena1", "panther", 26),
];

console.log(arrayToPlay);

console.log(arrayToPlay[0].getInfo());

arrayToPlay.forEach((person) => {
  person.connection = true;
});

console.log(arrayToPlay);

const mapArrayToPlay = arrayToPlay.map((person) => {
  return { ...person, name: person.name.slice(0, -3) };
});

console.log(mapArrayToPlay);

// acc.push(...Object.values(el));
const reduceArrayToPlay = arrayToPlay.reduce(
  (acc, el) => {
    // acc.push(...Object.values(el));
    // acc["name"] += ` ${el.name}`;
    Object.keys(el).forEach((key) => {
      if (key === "name") {
        acc[key] += `${el[key]}`;
        return;
      }
      acc[key] += ` ${el[key]}`;
    });
    return acc;
  },
  { ...arrayToPlay[0] }
);

// console.log(reduceArrayToPlay);

const filteredArrayToPlay = arrayToPlay.filter(({ name }) => {
  return name.includes("Alena");
});

console.log(arrayToPlay);
console.log(filteredArrayToPlay);
