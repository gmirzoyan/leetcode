/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let nums = {};
    let arr = [];
    for (let i = 0; i < numbers.length; i++){
      let n = numbers[i];
      let diff = target - n;
      if (nums[diff] !== undefined){
          arr.push(nums[diff])
          arr.push(i+1);
          break;
      }else{
          nums[n] = i+1;
      }
    }
   return arr;
};
