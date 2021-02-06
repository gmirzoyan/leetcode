/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    for (let el of A) {
        if (el % 2 === 0) even.push(el);
        if (el % 2 !== 0) odd.push(el);
    }
    return [...even, ...odd];
};
