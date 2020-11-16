/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var str = new Array();
    for (let i = 1; i <= n; i++){
     if (i % 3 === 0 && i % 5 === 0) str.push('FizzBuzz');
     else if (i % 5 === 0) str.push('Buzz');
     else if (i % 3 === 0) str.push('Fizz');
     else str.push(i + "");
   }
    return str;
  }
​
​
