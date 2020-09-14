/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.filter(el => nums.indexOf(el) === nums.lastIndexOf(el));
};
