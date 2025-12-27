const developerInfo = {
  name: "Alex",
  age: 25,
  experience: 3,
};

const developerExtraInfo = {
  name: "Aleksandr",
  height: 187,
  isJunior: false,
};

// #region object spread operator

// the task -- to unite 2 objects in one

const developer = {
  ...developerInfo,
  ...developerExtraInfo,
  name: "Alena",
};

console.log("developer", developer);

// spread just removes curly brackets, and the pairs key value left, and they are placed together

// #endregion object spread operator

// #region Object.assign

const developer2 = Object.assign(developerInfo, developerExtraInfo);

console.log("developer2", developer2);

// #endregion Object.assign
