// Brittany Lonberger; March 20, 2014; Industry Conditional
// This script is designed to determine if a potential job will provide an acceptable salary based on hourly pay rate, hours worked per week, and weeks per year.

// Identify the hourly pay rate
var payRate;
// Ensure that the user entered values are valid
function _payRate(){
	payRate = prompt("Enter the hourly rate at which you will receive pay.");
	
	if(payrate = "" || !parseInt(payrate)){ // To make sure the inputted data is a number
		alert("I think something you entered may be incorrect... Please try again");
		_payrate();
	} else {
		return payrate;
	}
}
