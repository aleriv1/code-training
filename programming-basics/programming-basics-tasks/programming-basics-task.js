// #region js basics task1

let a = 15;
let b = 25;
let c = 35;
let d = 45;

let a_plus_b = a + b;
let d_divide_a = d / a;
let c_multiply_b = c * b;
let b_minus_b = b - b;
let d_minus_c = d - c;
let a_less_b = a < b;
let a_less_d = a < d;
let a_greater_b = a > b;
let c_greater_or_equal_c = c >= c;
let b_equal_d = b === d;
let d_equal_d = d === d;
let c_not_equal_a = c !== a;

console.log(
  "a_plus_b",
  a_plus_b,
  "d_divide_a",
  d_divide_a,
  "c_multiply_b",
  c_multiply_b,
  "b_minus_b",
  b_minus_b,
  "d_minus_c",
  d_minus_c,
  "a_less_b",
  a_less_b,
  "a_less_d",
  a_less_d,
  "a_greater_b",
  a_greater_b,
  "c_greater_or_equal_c",
  c_greater_or_equal_c,
  "b_equal_d",
  b_equal_d,
  "d_equal_d",
  d_equal_d,
  "c_not_equal_a",
  c_not_equal_a
);

// https://codesandbox.io/p/sandbox/dazzling-sanne-5x6vhj

// #endregion js basics task1

// #region js basics task 2

let prices = [100, 200, 300];

function applyDiscount(priceSet, discount) {
  for (let i = 0; i < priceSet.length; i++) {
    priceSet[i] = priceSet[i] * (1 - discount);
  }
}

applyDiscount(prices, 0.1);

console.log(prices);

// https://codesandbox.io/p/sandbox/qg6njk

// #endregion js basics task 2

// #region internet introductionary, html, css, js review

// HyperText Transfer Protocol -- this is the data transfer protocol, used for exchange of information between client and server apps
// http request --

// #endregion internet introductionary, html, css, js review
