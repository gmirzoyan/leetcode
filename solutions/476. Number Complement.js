
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bin = num.toString(2);
    let flip = '';
     for (let el of bin) {
         if (el === '0') flip += '1';
         if (el === '1') flip += '0';
     }
    return parseInt(flip, 2);
}

