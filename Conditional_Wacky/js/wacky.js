// Brittany Lonberger; March 20, 2014; Wacky conditional
// This script will answer the age old, high school question, "Did I bring enough gum to school?"

// Identify amount of gum variable
var packGum;
// Validation
function _packGum(){
	packGum = prompt("How many packs of gum do you have?");
	
	if(packGum == "" || !parseInt(packGum)){
	alert("I know you have some gum.. go back and tell me how much!");
	_packGum;
	} else {
		return packGum;
	}
}

// run pack gum
_packGum();
console.log("Ok, so you have " + packGum + " pack(s) of gum.");

// Identify number of people you walk by on a daily basis
var peepPass;
// Validation
function _peepPass(){
	peepPass = prompt("How many people do you usually walk by throughout the day?");
	
	if(peepPass == "" || !parseInt(peepPass)){
	_peepPass;
	} else {
		return peepPass;
	}
}

// run people passed
_peepPass();
console.log("Well, if " + peepPass + " is how many people you pass in a day...");

// reminder of information
console.log("So, if you have " + packGum + " and you walk by " + peepPass + " in a day...");
alert("So, if you have " + packGum + " pack(s) of gum and you walk by " + peepPass + " people in a day...");
console.log("... and, we'll say that each (full) pack of gum has 15 pieces... ");

// total calcultion
var total = (packGum * 15 / peepPass;
console.log(total);

if(total < peepPass + 1){
	alert("I don't think you're going to have enough gum.. You better keep your pack hidden until after school.");
	console.log("I don't think you're going to have enough gum.. You better keep your pack hidden until after school.");
} else {
	alert("You might just have enough gum.. But word spreads fast, so I'd still hide it until after school.");
	console.log("You might just have enough gum.. But word spreads fast, so I'd still hide it until after school.");
}
