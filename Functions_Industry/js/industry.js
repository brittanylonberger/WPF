// Brittany Lonberger
// March 27, 2014
// Industry Function Assignment

// This script will be used to determine the diameter of a circle - a useful equation when working in the NDE RT field.


// Identify the circumference of the circle.
var circCirc = function () {
	prompt("What is the circumference of the circle (as a number, in inches, with a decimal. Example: 10.0 inches)");
	
	if (circCirc == "" || !parseInt(circCirc)){
		alert("Something isn't right there.. Please enter your information again.");
		circCirc();
	} else {
		console.log(circCirc);
		return;
	}
}

circCirc();


