//Exercise One
 String.prototype.checkPalindrome = function checkPalindrome(){
        let string = this.toLowerCase();
        let reversedString = string.split("").reverse().join(""); //Reverse the number
        return reversedString === string; // Check if original string and reversed string are the same.
     }
     let word1 = "level";
     let word2 = "shovel";
     console.log(word1.checkPalindrome()); 
     console.log(word2.checkPalindrome()); 



