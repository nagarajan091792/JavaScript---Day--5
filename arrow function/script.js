// Print odd numbers in an array
var odd = (a) => {
  var odd_result = a.filter((i) => i % 2 != 0);
  return odd_result;
};
console.log("odd numbers: " + odd([1, 2, 3, 4]));

// Convert all the strings to title caps in a string array
var stringb = (b) => {
  result = b.toString();
  result = result.toLowerCase().split(" ");
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }
  stringb_result = result.join(" ");
  console.log("strings to title caps: " + stringb_result);
};
stringb(["vs jjfa fs"]);


// Sum of all numbers in an array
var sum = (c) => {
  var sum_result = c.reduce((i, j) => i + j);
  console.log("Sum of all numbers: " + sum_result);
};
sum([1, 2, 8, 4]);

// Return all the prime numbers in an array

var prime = (d) => {
  return d.filter((item) => {
    for (i = 2; i < item; i++) {
      if (item % i === 0) return false;
    }
    return true;
  });
};
console.log(
  "prime numbers: " +
    prime([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
);

// Return all the palindromes in an array
var pallindrome = (e) => {
  return e.filter((item) => {
    let temp = item + "";
    if (temp.split("").reverse().join("") === temp) return item;
  });
};
console.log(
  "palindromes: " +
    pallindrome([121, 123, 123, 131, 199, 999, 200, 202, 202, 141])
);
