
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = s.split('').filter(el => "aeiouAEIOU".includes(el));
    return s.replace(/[aeiouAEIOU]/g, () => vowels.pop());
}
