// #region optional chain

const developer = {
  name: "Aleksandr",
  surnam: "Ermakov",
  job: "Frontend developer",
  experience: 24,
  jobAllInfo: {
    type: "Front-End",
    // framework: "ReactJS",
    framework: { name: "ReactJS" },
  },
  age: 25,
  isFrontend: true,
  keyObj: "value",
  // key: "value",
};

// console.log(developer.jobAllInfo.framework);

// #region 1

// if (developer.jobAllInfo) {
//   console.log(developer.jobAllInfo.framework);
// }

// if (developer.jobAllInfo.framework) {
if (developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
  //
  console.log("the developer already know the framework");
} else {
  console.log("the developer doesn't know the framework");
}

// #endregion 1

// #region 2

if (developer?.jobAllInfo?.framework) {
  console.log("the developer already know the framework");
} else {
  console.log("the developer doesn't know the framework");
}

// #endregion 2

// #region repeate

const Alena = {
  name: "Alena",
  eyeColor: "brown",
  dimention: {
    height: 1.7,
  },
};

console.log(Alena?.dimention);

// #endregion repeate

// #endregion optional chain
