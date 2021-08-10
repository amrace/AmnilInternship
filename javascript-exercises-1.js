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

//Exercise Two
function checkCubeOfNumber(num){
    return num**3;
}
console.log(checkCubeOfNumber(4));//passed value after calling the fucntion.

//Exercise Three
  let providedArray = [
    {id: 1, fullName:'John Doe'}, 
    {id: 2, fullName:'Jim Doe'}, 
    {id: 3, fullName:'Jane Doe'}
  ];
  //Creating reducer fucntion
  function arrayToObject(accumulater, currentElement){
    return {...accumulater,[currentElement.id] : currentElement}
  }
  const objectArray = providedArray.reduce(arrayToObject, {});
  console.log(objectArray);

  //Exercise Four
  let providedObject = {
    1: { fullName:'John Doe'}, 
    2: {fullName:'Jim Doe'}, 
    3: {fullName:'Jane Doe'} 
  };
  let array = Object.values(providedArray);
  console.log(array);