/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let obj = {};
  let res = [];
    for (let el of arr) {
        if (obj[el] === undefined) obj[el] = 1;
        else obj[el]++;
    }
    for (let el in obj) {
      res.push(obj[el]);
    }
  let result = res.filter(el => res.indexOf(el) !== res.lastIndexOf(el));
    if (result.length === 0) return true;
    else return false;
};
