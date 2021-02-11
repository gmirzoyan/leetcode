/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   for (let el of s) {
     if (s.includes("[]") || s.includes("()") || s.includes("{}")){
        s = s.replace("[]", "");
        s = s.replace("()", "");
        s = s.replace("{}", "");
     }
   }
    return s.length === 0;
};
