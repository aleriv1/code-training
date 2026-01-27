// array elment adding

const salariesOfDevelopers = [400, 500, 550, 600, 2000];

console.log(salariesOfDevelopers);

const newSeniorDeveloperSalary = 5000;

salariesOfDevelopers.push(newSeniorDeveloperSalary);
console.log(salariesOfDevelopers);

salariesOfDevelopers.unshift(100, 101);

console.log(salariesOfDevelopers);

// array element deleting

const firstRemovedElement = salariesOfDevelopers.shift();

console.log(salariesOfDevelopers);

console.log("firstRemovedElement", firstRemovedElement);

const lastRemovedElement = salariesOfDevelopers.pop();

console.log("lastRemovedElement", lastRemovedElement);

// array element editing

salariesOfDevelopers[2] = 666;

console.log("salariesOfDevelopers", salariesOfDevelopers);
