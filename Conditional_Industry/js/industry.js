// Brittany Lonberger; March 20, 2014; Industry Conditional
// This script is designed to determine if a potential job will provide an acceptable salary based on hourly pay rate, hours worked per week, and weeks per year.

// Identify the hourly pay rate
var payRate;
// Ensure that the user entered values are valid
function _payRate(){
	payRate = prompt("Enter the hourly rate at which you will receive pay. (in dollars)");
	
	if(payRate == "" || !parseFloat(payRate)){ // To make sure the inputted data is a number
		alert("I think something you entered may be incorrect... Please try again.");
		_payRate();
	} else {
		return payRate;
	}
}
// Run the pay rate prompt
_payRate();
console.log("$" + payRate + " is your expected hourly pay rate.");

// Identify work hours per week
var weekHours;
// Ensure that the user enters valid values
function _weekHours(){
	weekHours = prompt("Enter the number of hours you expect to work in one week.");
	
	if(weekHours == "" || !parseFloat(weekHours)){
		alert("I think you may have entered something incorrectly... Please try again.");
		_weekHours();
	} else {
		return weekHours;
	}
}
// Run the hours per week prompt
_weekHours();
console.log("You are expecting to work " + weekHours + " hours per week.")

// Using the equation (pay rate * hours per week * 52 weeks per year = salary)
var total = parseInt(payRate * weekHours * 52);
console.log("It looks like you will make approximately $" + total + " per year in this position.")
alert("It looks like you will make approximately $" + total + " per year in this position.");

// Identify goal salary 
var goalSal;
// Ensure that the user enters valid values
function _goalSal(){
	goalSal = prompt("What are your minumum salary requirements? (in dollars)");
	
	if(goalSal == "" || !parseFloat(goalSal)){
		alert("I think you may have entered something incorrectly... Please try again.");
		_goalSal();
	} else {
		return goalSal;
	}
}
// Run the salary goal prompt
_goalSal();
console.log("So, you're saying that you need to make $" + goalSal + " per year.")

// The final conditional.
if(total < goalSal){
	alert("Uh, oh.. This position's pay rate does not meet your needs.");
}


