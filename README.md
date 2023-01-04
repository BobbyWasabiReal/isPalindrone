# isPalindrone

## Approach
1. Convert x into a string
2. Split the string
3. Reverse the string, and join the string back
4. Compare the original string to the flipped string
5. Return true if both strings are equal, and false if they aren't

## Code
```
var isPalindrome = function(x) {
    const str = JSON.stringify(x);
    const flip = str.split("").reverse().join("");
    if (flip === str) return true;
    else return false;
};
```

( P.S For clarification, this solution isn't the best and can definetly be improved upon! )