//Exercise One
function checkPalindrome(string) {
      // Reverse the string
       let reversedString = string.split("").reverse().join("");
       // Check if original string and reversed string are the same.
       return reversedString === string;
     }
     const check = checkPalindrome("level");
     const check1 = checkPalindrome("shovel");
     console.log(check ,check1); 