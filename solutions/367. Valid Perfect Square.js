/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (Number.isInteger(num ** 0.5)) return true;
    else return false;
};
