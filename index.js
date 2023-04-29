// Code your solution in this file!


function returnFirstTwoDrivers(array) {
   let newArray = [...array];
   newArray.splice(2)
   return newArray;
}

function returnLastTwoDrivers(array) {
   let newArray = [...array];
   return (newArray.slice(2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value) {
   return function (fare) {
      return fare * value
   }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, functionHere){
   return functionHere(arrayOfDrivers)
}

