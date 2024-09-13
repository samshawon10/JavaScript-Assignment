//  Problem-01 : Tax Calculator

const prompt = require("prompt-sync") ();
let income = parseFloat(prompt("Enter your Income : "))
let expenses = parseFloat(prompt("Enter your Expenses : "))
console.log("Income :"+ income);
console.log("Expenses :"+ expenses);

function calculateTax(income, expenses) {
    if(income<0 || expenses<0){
        return "Invalid input";
    }
      
    if(income<expenses){
        return "Your Expenses is more then Your Income.(Income<Expenses)";
    }
    return (income-expenses)*.20;
}
let result = calculateTax(income, expenses);
console.log("Tax is : " +result);



