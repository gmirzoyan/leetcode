
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let word = magazine.split('');
    for (let el of ransomNote) {
        let index = word.indexOf(el);
    if (index === -1) return false;
    word.splice(index, 1);
    }
 return true;
}

