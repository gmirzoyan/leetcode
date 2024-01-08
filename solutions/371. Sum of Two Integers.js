
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let arr = [a, b];
    return arr.reduce((acc, cur) => acc + cur);  
  };
  