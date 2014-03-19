// Brittany Lonberger; March 19, 2014; Personal Condiditional Assignment
// This equation with a conditional will answer the question, "Can I afford this car?"


// Car price variable..
var _carPrice;
// To make sure a variable was entered correctly for the price of the car....
function carPrice(){
	_carPrice = prompt("How much is the total cost of the car you are looking to buy?");

	if(_carPrice == "" || !parseInt(_carPrice)){ // Gotta make sure it's actually a number...
		alert("It looks like you've entered something incorrectly... Please try again.");
		carPrice();
	} else {
		return _carPrice;
	}
}

carPrice();
console.log("$" + _carPrice + " is the total cost of the car.");

var _downPmnt;

// To make sure a variable was entered correctly for the down payment amount...
function downPmnt(){
	_downPmnt = prompt("What are you going to pay for your initial down payment?");
	
	if(_downPmnt == "" || !parseInt(_downPmnt)){ // Again, making sure the entered value is a number and is entered...
		alert("It looks like you've entered something incorrectly... Please try again.")
	} else {
		return _downPmnt;
	}

}

downPmnt();
console.log("$" + _downPmnt + " is your down payment.");

var _loanLife = prompt("What is the life of the loan you will recieve, (in months)?");
console.log(loanLife + " is the life of your loan in months.");

var total = (_carPrice - _downPmnt) / _loanLife;
alert("You would have to make monthly payments of $" + total);
console.log("You would have to make monthly payments of $" + total);

if(total >= 250){
	alert("It seems that you will not be able to afford this car.");
}else {
	alert("This car is totally affordable!");
}
