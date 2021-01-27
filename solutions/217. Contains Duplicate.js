/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.filter(el => nums.indexOf(el) !== nums.lastIndexOf(el)).length !== 0) return true;
    else return false;
};
