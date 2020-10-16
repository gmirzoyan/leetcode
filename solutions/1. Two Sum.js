/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = {};
    for(let i = 0; i < nums.length; i++) {
        res[nums[i]] = i;
     }
        for(let i = 0; i < nums.length; i++){
            let sub = target - nums[i];
        if(res[sub] && res[sub] !== i){
            return [i, res[sub]];
        }
    }
}
