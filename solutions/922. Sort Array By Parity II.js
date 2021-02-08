/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let res = [];
     let even = [];
     let odd = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) even.push(A[i]);
        if (A[i] % 2 !== 0) odd.push(A[i]);
    }
    for (let i = 0; i < even.length; i++) {
        res.push(even[i]);
        res.push(odd[i]);
    }
    return res;
};
