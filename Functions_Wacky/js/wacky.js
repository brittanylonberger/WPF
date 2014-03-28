// Brittany Lonberger
// March 27, 2014
// Wacky Functions Assignment 

// According to an article found on cracked.com (http://www.cracked.com/article_19360_7-questions-you-didnt-know-could-be-answered-with-math.html), 
// This script will run an equation to determine the perfection, on a scale of 1-80 (80 being the highest), of a woman's hind-quarters. 

// The formula given is: (S+C) x (B+F)/T = V
// Each variable is to be given on a scale of 1-20 (20 is the highest)
// S=overall shape, C=circulatiry, B=bounciness, F=firmness, T=texture


	// shape
function shape(){	
	var sha = prompt("On a scale of 1-20, rate the shape of the behind in question.");
	if (sha < 1) {
		alert("Number not within parameters.");
		shape();
	} 
	if (sha > 20) {
		alert("Number not within parameters.");
		shape();
	}
	else if (sha == "" || !parseInt(sha)){
		alert("Sorry, has to be a valid number.");
		shape();
	} else {
		console.log("You have rated the shape as a " + sha + " on a scale of 1-20.");
	}
}

shape();
	
	// circularity
	var cir = prompt("On a scale of 1-20, rate it's circularity.");
	
	// bounciness
	var bou = prompt("On a scale of 1-20, rate it's bounciness.");
	
	// firmness
	var fir = prompt("On a scale of 1-20, rate it's firmness.");
	
	// texture
	var tex = prompt("On a scale of 1-20, rate it's texture.");

