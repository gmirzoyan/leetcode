/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let w = word.split('').filter(el => el === el.toUpperCase());
    let w1 = word.split('').filter(el => el === el.toLowerCase());
    let w2 = word[0].toUpperCase() + word.toLowerCase().slice(1);
    if (word === w.join('') || word === w1.join('') || word === w2) return true;
    else return false; 
};
