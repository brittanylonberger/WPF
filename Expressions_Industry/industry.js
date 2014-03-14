// Industry .js
// This script will calculate the aspect ratio of a resized image based on the wanted height in order to maintain image consistency. 
// Formula is: original height / original width x new width = new height

var aspectRatio = new Array();

	aspectRatio[0] = prompt("Original Height (in pixels) of Image Being Rescaled", 800);
	aspectRatio[1] = prompt("Original Width (in pixels) of Image Being Rescaled", 600);
	aspectRatio[2] = prompt("How Wide (in pixels) Will the Image Be After Rescaling?", 450);

var newHeight = aspectRatio[0] / aspectRatio[1] * aspectRatio[2];

console.log(newHeight);

alert("The new height of your image is: " + newHeight + " pixels.");



