// Print odd numbers in an array
(function (a) {
  var odd_result1 = a.filter((i) => i % 2 != 0);
  console.log("odd numbers: " + odd_result1);
})([1, 2, 3, 4, 5]);

// Convert all the strings to title caps in a string array
(function (b) {
  result = b.toString();
  result = result.toLowerCase().split(" ");
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }
  stringb_result = result.join(" ");
  console.log("strings to title caps: " + stringb_result);
})(["fef fhdhd bhLKJ"]);

// Sum of all numbers in an array
(function (c) {
  var sum = c.reduce((i, j) => i + j);
  console.log("Sum of all numbers: " + sum);
})([1, 2, 3, 4, 10]);

// Return all the prime numbers in an array
(function (d) {
  var res = "";
  for (i = 0; i < d.length; i++) {
    var count = 0;
    for (j = 1; j <= d[i]; j++) {
      if (d[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      res += d[i] + " ";
    }
  }
  console.log("prime numbers: " + res);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

// Return all the palindromes in an array
(function (e) {
  var res = "";
  var ans = "";
  for (i = 0; i < e.length; i++) {
    res += e[i];
    var count = 0;

    for (j = 0; j < res.length; j++) {
      if (res[j] === res[res.length - 1 - j]) {
        count++;
      }
    }
    if (count === res.length) {
      ans += res + " ";
    }
    res = "";
  }
  console.log("palindromes: " + ans);
})([121, 123, 123, 131, 199, 999, 200, 202, 202, 141]);

// Return median of two sorted arrays of the same size.
(function (a, b) {
  var c = [];
  var n = a.length;
  var p = b.length;
  var i = 0;
  var j = 0;
  var med = 0;
  while (i < n && j < p) {
    if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j]);
      j++;
    }
  }

  if (i < n) {
    for (let k = i; k < n; k++) {
      c.push(a[k]);
    }
  } else if (j < p) {
    for (let m = j; m < p; m++) {
      c.push(b[m]);
    }
  }
  if (c.length % 2 === 0) {
    med = (c[c.length / 2 - 1] + c[c.length / 2]) / 2;
  } else {
    med = c[Math.floor(c.length / 2)];
  }
  console.log("median of two sorted arrays: " + med);
})([1, 2, 3, 7], [4, 5, 6, 8]);

// Remove duplicates from an array
(function (g) {
  var duplicates_result = [...new Set(g)];
  console.log("Remove duplicates from an array: " + duplicates_result);
})([1, 1, 2, 2, 3, 3, 3, 2, 24]);

// Rotate an array by k times
(function (a, k) {
  n = a.length;
  c = [];
  d = "";
  for (i = 0; i < n; i++) {
    c[(i + k) % n] = a[i];
  }
  for (i = 0; i < c.length - 1; i++) {
    d += c[i] + " ";
  }
  d += c[c.length - 1];
  console.log("Rotate an array by k times: " + d);
})([1, 2, 3, 4, 5], 3);
