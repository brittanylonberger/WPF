// This code will calculate the cost of laundry soap over the course of a year. 
// Equation is (AmountofSoap(oz) p/load * Loads p/week / Total(oz) p/bottle) * Cost p/bottle * 52 weeks p/year.
// Cost and size of laundry detergent is based on information obtained from WalMart.com "http://www.walmart.com/ip/Tide-2x-Ultra-High-Efficiency-Liquid-Laundry-Detergent-Original-Scent-100-fl-oz/11045842".

document.bgColor = "#FF94DB";

var soapAmnt = prompt("Enter the amount of soap (in ounces) that you use per load of laundry.", 5);

console.log(soapAmnt + " Ounces of Soap You Use Per Load of Laundy ");

var loadWeek = prompt("Enter the total number of loads of laundry you do per week.", 7);

console.log(loadWeek + " Loads of Laundry You do Per Week ");

var detCost = 11.97;
var launTot = 100;

console.log(detCost + " dollars is the cost of laundry soap ");
console.log(launTot + " ounces comes in a bottle of detergent before used ");

var step1;
step1 = soapAmnt * loadWeek / launTot * detCost * 52;

var myRound = parseInt(step1);

alert(" It looks like you spend approximately " + " $ " + myRound + " per year on laundry detergent. Wow! ");

console.log(step1 + " is how much money you spend \(in dollars\), per year on laundry detergent ");



