//Exercise One
 String.prototype.checkPalindrome = function checkPalindrome(){
        let string = this.toLowerCase();
        let reversedString = string.split("").reverse().join(""); //Reverse the string
        return reversedString === string; // Check if original string and reversed string are the same.
     }
     let word1 = "level";
     let word2 = "shovel";
     console.log(word1.checkPalindrome()); 
     console.log(word2.checkPalindrome()); 

//Exercise Two
 Number.prototype.cube = function (num){
   return num **3;
 };
 let inputNumber = new Number();
 console.log(`${inputNumber.cube(3)}`);


//Exercise Three
  let providedArray = [
    {id: 1, fullName:'John Doe'}, 
    {id: 2, fullName:'Jim Doe'}, 
    {id: 3, fullName:'Jane Doe'}
  ];
  //Creating reducer function
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

  //Exercise Five
const points = { 
  p1: [2, 3], 
  p2: [6, 7],

  get displacement(){
    let displacement1 = Math.sqrt((points.p2[0]-points.p1[0]**2) + (points.p2[1]-points.p1[1])**2);
    return displacement1;
  }
}; 
console.log(points.displacement);

//Exercise Six
function Person(person_fisrtName, person_lastName, person_dob){
  this.firstName= person_fisrtName;
  this.lastName= person_lastName;
  this.dob= person_dob;

  this.fullName= function(){
    return(`${this.firstName} ${this.lastName}`);
  }
}
const person = new Person("Jhon","Doe","1996-03-27");   
person.age=function(){
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;
  const currentDate = new Date().valueOf();
  let currentAge=(currentDate - new Date(person.dob)) / year;
  let noOfDays = (currentAge - Math.floor(currentAge)) * 365;
  return(`age: ${currentAge.toFixed()} days: ${noOfDays.toFixed()}` );
}
  console.log(person.fullName());
  console.log(person.age());

  //Exercise Seven
  function printRecursive(num){
    console.log(num);
    const number = num -1;
    if(number>=0){
        printRecursive(number);
    }if(number>=0){
      printRecursive(-number);
    }
  }
  printRecursive(5);
  printRecursive(-5);



