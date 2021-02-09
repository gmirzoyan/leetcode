/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    for (let el of nums1) {
        for (let x of nums2) {
            if (el === x) arr.push(el);
        }
    }
     return arr.filter((el, i) => i === arr.lastIndexOf(el));
    
};
