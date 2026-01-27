// #region object Date

const date = new Date();
console.log("date:", date); // the data was displayed in the console

// this object can take parameters:new Date(year, month, day, hours, minutes, seconds, milliseconds)

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
console.log("newDate:", newDate);

console.log("year", newDate.getFullYear());
console.log("month", newDate.getMonth());
console.log("date", newDate.getDate());

// #region week day

// 0 -- sunday
// 6 -- saturday

console.log("day", newDate.getDay());

if (newDate.getDay() === 4) {
  console.log("today is thurday");
}

// #endregion week day

// #region changing date

newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);

// newDate.set hours minutes seconds milliseconds
console.log("newDate", newDate);

// #endregion changing date

// #endregion object Date

// #region difference between dates

const date1 = new Date(2005, 4, 20);
const date2 = new Date(2006, 4, 10);

console.log("date1", date1.getTime()); // milliseconds sinse 1970 january 1
console.log("date2", date2.getTime());

const differnece = date2.getTime() - date1.getTime();
console.log("differnece", differnece / 1000 / 60 / 60 / 24);

// #region the speed of function or algorithm

// new Date().getTime() equeals Date.now
const startTime = Date.now(); // repsone for the time before the function

for (let i = 0; i < 10000000; i++) {
  // do something
}

const endTime = Date.now(); // response for the time after the function

console.log("startTime", startTime);
console.log("endTime", endTime);

const differenceOperation = endTime - startTime;
console.log("differenceOperation", differenceOperation);
// #endregion the speed of function or algorithm

// #endregion difference between dates

// #region date-time playgroung sandbox

const orderDate = new Date();
console.log("order date is:", orderDate);

const deliverDate = new Date(orderDate);
deliverDate.setDate(orderDate.getDate() + 5);
console.log("estimated deliver date is:", deliverDate);

const now = new Date();
console.log("now", now);

const dateTest = new Date(2025, 11, 27);
console.log("dateTest", dateTest);

const dateMonth = dateTest.getMonth();
console.log(dateMonth);

switch (dateMonth) {
  case 0:
    console.log("january");
    break;
  default:
    console.log("not january");
}

console.log(dateTest.getFullYear(), dateTest.getDate(), dateTest.getDay());

console.log("dateTest", dateTest);
dateTest.setFullYear(2026);
dateTest.setMonth(7);
dateTest.setDate(4);
dateTest.setHours(10);
console.log("dateTest, day of week", dateTest.getDay());
console.log("dateTest is:", dateTest);

const dateT1 = new Date("February 11 ,2002");
const dateT2 = new Date("June 24 ,2005");

const differenceT = dateT2 - dateT1;
console.log("differenceT", differenceT);

const startTimeT = new Date().getTime();

for (let i = 0; i < 100000000; i++) {
  // do something
}

const endTimeT = Date.now();

console.log("the time of the code, ms", endTimeT - startTimeT);

// #endregion date-time playgroung sandbox
