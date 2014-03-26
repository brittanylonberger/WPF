//Personal Function
// Brittany Lonberger
// March 26, 2014
// This will calculate your monthly budget based on monthly income and monthly expenses.


function _monBudg(){
	var monIn = prompt("Please input your average monthly income (in dollars).");
	var monEx = prompt("Please input your average monthly expenses (in dollars).");
	
	if (monIn == "" || !parseFloat(monIn) || !parseInt(monIn)) {
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else{
		console.log("Your monthly income is $" + monIn);
	}

	if (monEx == "" || !parseFloat(monEx) || !parseInt(monEx)){
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else {
		console.log("Your monthly expenses total $" + monEx);
	}

}

_monBudg();
