// This code will calculate the cost of laundry soap over the course of a year. 
// Equation is (AmountofSoap(oz) p/load * Loads p/week / Total(oz) p/bottle) * Cost p/bottle * 52 weeks p/year.
// Cost and size of laundry detergent is based on information obtained from WalMart.com "http://www.walmart.com/ip/Tide-2x-Ultra-High-Efficiency-Liquid-Laundry-Detergent-Original-Scent-100-fl-oz/11045842".

document.bgColor = "#FF94DB";

var soapAmnt = prompt("Enter the amount of soap (in ounces) that you use per load of laundry.", 5);
var loadWeek = prompt("Enter the total number of loads of laundry you do per week.", 7);

var detCost = 11.97;
var totOz = 100;

var step1;
step1 = soapAmnt * loadWeek;
alert(step1);




