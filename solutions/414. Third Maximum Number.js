
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let res = nums.filter((el, i) => nums.indexOf(el) == i).sort((a, b) => b - a);
     if (res.length < 3) return res[0];
     else return res[2];
  };
