// Brittany Lonberger
// March 27, 2014
// Wacky Functions Assignment 

// According to an article found on cracked.com (http://www.cracked.com/article_19360_7-questions-you-didnt-know-could-be-answered-with-math.html), 
// This script will run an equation to determine the perfection, on a scale of 1-80 (80 being the highest), of a woman's hind-quarters. 

// The formula given is: (S+C) x (B+F)/T = V
// Each variable is to be given on a scale of 1-20 (20 is the highest)
// S=overall shape, C=circulatiry, B=bounciness, F=firmness, T=texture, V=ratio of hips to waist


// inital in-page description

(function(alert1, alert2, alert3){
	var alert1 = alert("Welcome to this nifty calculator!");
	var alert2 = alert("This script is designed to run and determine the supposed perfection of a woman's hind-quarters.");
	var alert3 = alert(" Please remember to keep your score ratings between 1 and 20 - 20 being the highest quality.");
})
();

	// shape
var sha;
function shape(){	
	sha = prompt("On a scale of 1-20, rate the shape of the behind in question.");
	
	// validation
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
		return;
	}
}
// run shape function
shape();
	
	// circularity
var cir;
function circle(){	
	cir = prompt("On a scale of 1-20, rate it's circularity.");
	
	// validation
	if (cir < 1) {
		alert("Number not within parameters.");
		circle();
	} 
	if (cir > 20) {
		alert("Number not within parameters.");
		circle();
	}
	else if (cir == "" || !parseInt(cir)){
		alert("Sorry, has to be a valid number.");
		circle();
	} else {
		console.log("You have rated the circularity as a " + cir + " on a scale of 1-20.");
		return;
	}
}
// run circularity function
circle();

var step1Tot = sha + cir;
	
	// bounciness
var bou;
function bounce(){	
	bou = prompt("On a scale of 1-20, rate it's bounciness.");
	
	// validation
	if (bou < 1) {
		alert("Number not within parameters.");
		bounce();
	} 
	if (bou > 20) {
		alert("Number not within parameters.");
		bounce();
	}
	else if (bou == "" || !parseInt(bou)){
		alert("Sorry, has to be a valid number.");
		bounce();
	} else {
		console.log("You have rated the bounce as a " + bou + " on a scale of 1-20.");
		return;
	}
}

// run bounciness function
bounce();
	
	// firmness
var fir;
function firm(){	
	fir = prompt("On a scale of 1-20, rate it's firmness.");
	
	// validation
	if (fir < 1) {
		alert("Number not within parameters.");
		firm();
	} 
	if (fir > 20) {
		alert("Number not within parameters.");
		firm();
	}
	else if (fir == "" || !parseInt(fir)){
		alert("Sorry, has to be a valid number.");
		firm();
	} else {
		console.log("You have rated the firmness as a " + fir + " on a scale of 1-20.");
		return;
	}
}
// run firmness function
firm();

var step2Tot = bou + fir;
	
	// texture
var text;
function texture(){	
	text = prompt("On a scale of 1-20, rate it's texture.");
	
	// validation
	if (text < 1) {
		alert("Number not within parameters.");
		texture();
	} 
	if (text > 20) {
		alert("Number not within parameters.");
		texture();
	}
	else if (text == "" || !parseInt(text)){
		alert("Sorry, has to be a valid number.");
		texture();
	} else {
		console.log("You have rated the shape as a " + text + " on a scale of 1-20.");
		return;
	}
}
// run texture function
texture();


// calculate total score
// REMEMBER: (S+C) x (B+F)/T = V
var total = (sha + cir) * (bou + fir) / text;
console.log("The score of the hind-quater you are rating is " + total);

