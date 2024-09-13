// Problem 02 : Notification Generator
const prompt = require("prompt-sync") ();
function sendNotification() {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    let parts = email.split('@');
    let username = parts[0];
    let domainName = parts[1];
    return username + " sent you an email from " + domainName;
}

let email = prompt("Enter Your email address :");

console.log(sendNotification());
