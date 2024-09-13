// Problem 05:  Predict Avarage Waiting Time 
const prompt = require('prompt-sync')();
function waitingTime(waitingTimes, serialNumber) {
   
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    let averageTime = totalTime / waitingTimes.length;
    averageTime = parseInt(averageTime);
    let remainingPeople = serialNumber - waitingTimes.length - 1;

    if (remainingPeople <= 0) {
        return 0;
    } else {
        return remainingPeople * averageTime;
    }
}
const timesInput = prompt("Enter the interview times Array Use comma : ");
const waitingTimes = timesInput.split(',').map(Number); 

const serialNumber = Number(prompt("Enter Israt's serial number: "));
console.log(waitingTime(waitingTimes, serialNumber));
