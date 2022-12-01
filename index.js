// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    const firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers;
}
const returnLastTwoDrivers = function(drivers){
    const lastTwoDrivers = drivers.slice(2)
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1){
    return function (num2) {
        return num1 * num2;
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers)
}

returnDrivers(returnFirstTwoDrivers);