// Brittany Lonberger; March 20, 2014; Wacky conditional
// This script will answer the question, "Did I bring enough gum for everyone?"

// Identify amount of gum variable
var packGum;
// Validation
function _packGum(){
	packGum = prompt("How many packs of gum do you have?");
	
	if(packGum == "" || !parseInt(packGum));
	alert("I know you have some gum.. go back and tell me how much!");
	_packGum;
	} else {
		return packGum;
	}
}

// run pack gum
_packgum;
console.log("Ok, so you have " + packGum + " pack(s) of gum.");

