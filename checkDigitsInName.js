// Problem-03: Checking Digits Inside a Name

const prompt = require("prompt-sync")();
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let char of name) {
        if ( char >= '0' && char <= '9') { 
            return true;
        }
    }
    return false;  
}

let name = prompt("Enter your Name : ");
console.log(checkDigitsInName(name));
