// Brittany Lonberger
// March 27, 2014
// Industry Function Assignment

// This script will be used to determine the diameter of a circle - a useful equation when working in the NDE RT field.


// Identify the circumference of the circle.
function circCirc(){
	var _circCirc = prompt("What is the circumference of the circle (as a number, in inches, with a decimal. Example: 10.0 inches)");

	// Validation if input
	if (circCirc == "" || !parseFloat(cirCirc)){
		alert("You did something wrong.");
		circCirc();
	} else {
		conosole.log(circCirc);
		return;
	}
}

circCirc();

