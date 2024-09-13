// Problem 04 : Calculate Admission Final Score 

const prompt = require("prompt-sync")();

function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }

    let { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== 'string' ||
        typeof testScore !== 'number' || testScore > 50 ||
        typeof schoolGrade !== 'number' || schoolGrade > 30 || 
        typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}
let name = prompt("Enter Your name: ");
let testScore = Number(prompt("Enter Your testScore (0-50): "));
let schoolGrade = Number(prompt("Enter Your schoolGrade (0-30): "));
let isFFamily = prompt("Is Your Father a Farmer? (yes/no): ").toLowerCase() === 'yes';

let obj = {
    name: name,
    testScore: testScore,
    schoolGrade: schoolGrade,
    isFFamily: isFFamily
};

console.log(calculateFinalScore(obj));
