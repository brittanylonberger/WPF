//Personal Function
// Brittany Lonberger
// March 26, 2014
// This will calculate your monthly budget based on monthly income and monthly expenses.

// This function will identify the user's monthly income and monthly expenses
function _monBudg(){
	// monthly income (monIn)
	var monIn = prompt("Please input your average monthly income in a whole dollar amount."); 
	
	// making sure the input of monIn is a valid number
	if (monIn == "" || !parseFloat(monIn)) {
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else{
		// print monIn to console permitting valid input
		console.log("Your monthly income is $" + monIn);
	}

	// monthly expenses (monEx)
	var monEx = prompt("Please input your average monthly expenses in a whole dollar amount.");
	// making sure the input of monEx is a valid number
	if (monEx == "" || !parseFloat(monEx)){
		alert("It looks like your input was in an incorrect format. Please go back and try again.");
		_monBudg();
	} else {
		// print monEx to console permitting valid input
		console.log("Your monthly expenses total $" + monEx);
	}
	
	// calculate the amount of income left over after monIn - monEx
	var leftOver = monIn - monEx;
	
	// can you afford your monthly expenses?
	var _result = leftOver > 0 ? true : false;
	if(_result)
	console.log("You should be able to manage your monthly expenses. Yay!");
	else 
	console.log("I think you've bit off more than you can chew on expenses..");
	return;
}

// run the budget calculating funtion
_monBudg();
