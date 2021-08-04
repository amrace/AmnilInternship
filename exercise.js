

const personDetails = [
      {
       firstName: "Amresh",
       lastName: "Thakur",
       DOB: "1997-03-11",
   },

   {
       firstName: "Kiran",
       lastName: "Ghimire",
       DOB: "2001-09-09",
   },

   {
       firstName: "Bipin",
       lastName: "Maharjan",
       DOB: "1996-05-04",
   },

   {
       firstName: "Kushal",
       lastName: "Bajrachrya",
       DOB: "1998-11-02",
   },

   {
       firstName: "Nitesh",
       lastName: "Upadhya",
       DOB: "1998-04-30",
   }, 
 
   {
       firstName: "Ashish",
       lastName: "Upreti",
       DOB: "1996-06-29",
   },
];
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30;
const year = month * 12;
const currentDate = new Date().valueOf();
const dobs = () => persons.map((person) => {
    let currentAge = (currentDate - new Date(person.DOB)) / year;
    let noOfDays = (currentAge - Math.floor(currentAge)) * 365;
    console.log(`FullName: ${person.firstName} ${person.lastName} Age: ${Math.floor(currentAge)} Days: ${noOfDays.toFixed()}`)

})
dobs();

