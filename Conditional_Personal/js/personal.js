// Brittany Lonberger; March 19, 2014; Personal Condiditional Assignment
// This equation with a conditional will answer the question, "Can I afford this car?"

var carPrice = prompt("How much is the total cost of the car you are looking to buy?");
console.log("$" + carPrice + " is the total cost of the car.")

var downPmnt = prompt("What are you going to pay for your initial down payment?");
console.log("$" + downPmnt + " is your down payment.")

var loanLife = prompt("What is the life of the loan you will recieve, (in months)?")
console.log(loanLife + " is the life of your loan in months.")

var total = alert(carPrice - downPmnt / loanLife + "are your monthly payments");
console.log("$" + total + " is the payments you would have to make monthly.")
