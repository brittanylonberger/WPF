//Personal Function
// Brittany Lonberger
// March 26, 2014
// This will calculate your monthly budget based on monthly income and monthly expenses.

var monIn;
var monEx;

function _monBudg(){
	monIn = prompt("Please input your average monthly income (in dollars).");
	monEx = prompt("Please input your average monthly expenses (in dollars).");
	
	if (monIn == "" || !parseFloat(monIn, monEx)) {
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else{
		return;
	};
}
