/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
 let sum = 1;
    if(num === 1) return true;
    while(sum <= num){
       sum *= 4;
        if(sum === num){
            return true;
        }
   }
    return false;   
};  
​
