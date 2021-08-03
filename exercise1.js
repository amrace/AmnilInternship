

const personDetails = [
    /*   {
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
      }, */
  
      {
          firstName: "Ashish",
          lastName: "Upreti",
          DOB: "1996-06-04",
      },
  ];
  //Filter all dates from personDetails
  const stringToDate = personDetails.map((dob) =>{
      return dob.DOB
  })
  //console.log(stringToDate);
  
  //convert dates string to date format and print current age
  function getAge(){
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var month = day * 30;
      var year = month * 12;
  
      //Converted the mapped string to date then milisecond
      let dob = stringToDate.map(date => new Date(date).valueOf());
      let currentDate = new Date().valueOf();
      let currentAge = (currentDate - dob)/year;
      let noOfDays = currentAge * 365;
      console.log("The total number of days in your age is:" + noOfDays.toFixed());
      return currentAge;
  }
  console.log("Your current age is:" +getAge().toFixed());
  
  