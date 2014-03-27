// Brittany Lonberger
// March 27, 2014
// Industry Function Assignment

// This script will be used to determine the diameter of a circle - a useful equation when working in the NDE RT field.


// Identify the circumference of the circle.
function circCirc(){
	var _circCirc = prompt("What is the circumference of the circle (in inches)?");

	// Validation of input
	if (_circCirc == "" || !parseFloat(_circCirc)){
		alert("You did something wrong.");
		circCirc();
	} else if ( (_circCirc < 0) ){
		alert("Your number cannot be negative. Sorry. :/");
		circCirc();
	} else {
		console.log("The circumference of your circle is " + _circCirc + " inches."); // log results
	}
	
	// Calculate diameter with the equation - Circumference / pi(3.14)
	var total = parseFloat(_circCirc / 3.14);
	console.log("The diameter of your circle is " + total + " inches."); // log results
}


// Run function
circCirc();

