/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
 let obj = {};
    let count = 0;
   for (let el of s) {
      if (obj[el]) obj[el]++;
      else obj[el] = 1;
      if(obj[el] % 2) count++;
      else count--;
   }     
    return count <= k && s.length >= k;
}
