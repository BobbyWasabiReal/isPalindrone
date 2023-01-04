var isPalindrome = function(x) {
    const str = JSON.stringify(x);
    const flip = str.split("").reverse().join("");
    if (flip === str) return true;
    else return false;
};