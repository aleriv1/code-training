const developer = {
  name: "Aleksandr",
  surnam: "Ermakov",
  job: "Frontend developer",
  experience: 24,
  jobAllInfo: {
    type: "Front-End",
    framework: "ReactJS",
  },
  age: 25,
  isFrontend: true,
  keyObj: "value",
  // key: "value",
};

console.log("developer", developer);

// 1

console.log("name", developer.name); // it is recommended
console.log("job all info", developer.jobAllInfo);

// 2

console.log("name", developer["name"]);

// const key = "name";
const key = "job";

console.log("name", developer[key]);

// using dots we can create the chain of adressing objects

console.log("type", developer.jobAllInfo.type);

console.log("framework", developer["jobAllInfo"]["framework"]);
console.log("framework", developer["jobAllInfo"].framework);
console.log("framework", developer.jobAllInfo["framework"]);

// #region add, delete, edit object properties

const student = {
  id: 1,
  programmingLanguage: "JS",
  hasExperienceInReact: false,
};

// #region add

student.experience = 6;

console.log("student", student);

// #endregion add

// #region delete

// key word delete

delete student.hasExperienceInReact;

console.log("student", student);

// #endregion delete

// #region edit

student.experience = 12;
student.id = 2;

console.log("student", student);

// #endregion edit

// #endregion add, delete, edit object properties

// #region object is link

// 7 -- primitive non-reference type
// 1 -- not primitive -- object -- reference-type

const setName = (entity, value) => {
  if (typeof entity === "object") {
    entity.name = value;
  } else {
    entity = value;
  }
};

const dev = {
  name: "Alex",
};

let devName = "Alex";

setName(dev, "Al");
setName(devName, "Al");

// console.log("dev", dev);
// console.log("devName", devName);

// console.log("{} === {}", {} === {});
// console.log("[] === []", [] === []);

const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy); // true, becouse the entityCopy stores reference to the entity

console.log("hello" === "hello");

// #endregion object is link

// #region oject iteration, oject creation from array

const goodInfo = {
  id: 1,
  price: 80,
  currensy: "$",
  name: "shoes",
};

console.log("goodInfo", goodInfo);

// #region for in, object iteration

for (const key in goodInfo) {
  console.log("key", key);
  const value = goodInfo[key];
  console.log("value", value);
}

// #endregion for in, object iteration

// #region Object.keys // creates an array of the object keys

const keys = Object.keys(goodInfo);
console.log(keys);

// #endregion Object.keys

// #region Object.values // creates an array of the object values

// #endregion Object.values

// #endregion oject iteration, oject creation from array
