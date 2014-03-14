// Industry .js
// This script will calculate the aspect ratio of a resized image based on the wanted height in order to maintain image consistency. 
// Formula is: original height / original width x new width = new height

var aspectRatio = new Array();

	aspectRatio[0] = "800";
	aspectRatio[1] = "600";
	aspectRatio[2] = "300";

var newHeight = \(aspectRatio[0] / aspectRatio[1] \) x aspectRatio[2];

console.log(newHeight);



