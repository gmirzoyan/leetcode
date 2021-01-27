/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  if(sum.toString().length > 1){
    sum = addDigits(sum.toString());
  }
  return sum.toString();
};
