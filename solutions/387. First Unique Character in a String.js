/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) arr.push(s[i]);
    }
    return s.indexOf(arr[0]);
    return -1;
};
