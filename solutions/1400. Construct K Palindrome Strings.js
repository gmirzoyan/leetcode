/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
      if (s.length === k) return true;
    if (s.length < k) return false;
    let count = 0;
    let obj = {};
    for (let el of s) {
        if (obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    let res = Object.values(obj);
    for (let el of res) {
      if (el % 2 === 1) count++;
    }
  return count <= k;
};
