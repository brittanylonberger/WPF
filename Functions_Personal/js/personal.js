//Personal Function
// Brittany Lonberger
// March 26, 2014
// This will calculate your monthly budget based on monthly income and monthly expenses.

// This function will identify the user's monthly income and monthly expenses
function _monBudg(){
	// monthly income (monIn)
	var monIn = prompt("Please input your average monthly income in a whole dollar amount."); 
	// monthly expenses (monEx)
	var monEx = prompt("Please input your average monthly expenses in a whole dollar amount.");
	
	// making sure the input of monIn is a valid number
	if (monIn == "" || !parseFloat(monIn)) {
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else{
		// print monIn to console permitting valid input
		console.log("Your monthly income is $" + monIn);
	}

	// making sure the input of monEx is a valid number
	if (monEx == "" || !parseFloat(monEx)){
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else {
		// print monEx to console permitting valid input
		console.log("Your monthly expenses total $" + monEx);
		return;
	}

}

_monBudg();
