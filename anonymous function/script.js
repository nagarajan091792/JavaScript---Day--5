// Print odd numbers in an array
var odd = function (a) {
  var odd_result = a.filter((i) => i % 2 != 0);
  console.log("odd numbers: " + odd_result);
};
odd([1, 2, 3, 4, 5, 22, 33, 12, 13]);

// Convert all the strings to title caps in a string array
let stringb = function (b) {
  result = b.toString();
  result = result.toLowerCase().split(" ");
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }
  stringb_result = result.join(" ");
  console.log("strings to title caps: "+stringb_result);
};
stringb(["fefg faefb feh jh"]);

// Sum of all numbers in an array

var sum = function (c) {
  var sum_result = c.reduce((i, j) => i + j);
  console.log("Sum of all numbers: "+sum_result);
};
sum([1, 2, 3, 4]);

// Return all the prime numbers in an array

let prime = function (d) {
  return d.filter((item) => {
    for (i = 2; i < item; i++) {
      if (item % i === 0) return false;
    }
    return true;
  });
};
console.log(
    "prime numbers: "+prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
);

// Return all the palindromes in an array

let pallindrome = function (e) {
  return e.filter((item) => {
    let temp = item + "";
    if (temp.split("").reverse().join("") === temp) return item;
  });
};
console.log("palindromes: "+pallindrome([121, 123, 123, 131, 199, 999, 200, 202, 202, 141]));

// Return median of two sorted arrays of the same size.

const median = function (f, f1) {
  let c = [...f, ...f1].sort((f, f1) => f - f1);
  const half = c.length / 2;
  if (c.length % 2) return c[half];
  return (c[half] + c[half - 1]) / 2;
};
console.log("median of two sorted arrays: "+median([1, 2, 3, 4], [8, 5, 6, 7]));

// Remove duplicates from an array

let duplicates = function (g) {
  var duplicates_result = [...new Set(g)];
  console.log("Remove duplicates from an array: "+duplicates_result);
};
duplicates([1, 1, 2, 2, 3, 3, 3, 2, 24]);

// Rotate an array by k times

let Rotate = function (h, k) {
  for (let i = 0; i < k; i++) {
    let temp = h.shift();
    h.push(temp);
  }
  return h;
};
console.log("Rotate an array by k times: "+Rotate([1, 2, 3, 4, 5], 1));
