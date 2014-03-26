//Personal Function
// Brittany Lonberger
// March 26, 2014
// This will calculate your monthly budget based on monthly income and monthly expenses.


function _monBudg(){
	var monIn = prompt("Please input your average monthly income in a whole dollar amount.");
	var monEx = prompt("Please input your average monthly expenses in a whole dollar amount.");
	
	if (monIn == "" || !parseFloat(monIn)) {
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else{
		console.log("Your monthly income is $" + monIn);
		return;}

	if (monEx == "" || !parseFloat(monEx)){
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else {
		console.log("Your monthly expenses total $" + monEx);
		return;
	}

}

_monBudg();
