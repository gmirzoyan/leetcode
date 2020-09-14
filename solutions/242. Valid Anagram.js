/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length === 0 && t.length === 0) return true;
    let first = s.split('').sort();
    let second = t.split('').sort();
    if(first.length == second.length && first.every((v,i)=>v === second[i])) return true;
    return false;
};
