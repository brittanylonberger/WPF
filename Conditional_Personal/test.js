// Brittany Lonberger; March 19, 2014; Personal Condiditional Assignment
// This equation with a conditional will answer the question, "Can I afford this car?"

var _carPrice;

// Recursive function until a value is entered
function carPrice(){
	_carPrice = prompt("How much is the total cost of the car you are looking to buy?");

	if(_carPrice == "" || !parseInt(_carPrice)){ // Make sure it's a number too..
		alert("It looks like you entered something incorrectly.. Please try again.");
		carPrice();
	} else {
		return _carPrice;
	}
}

carPrice();

console.log("$" + _carPrice + " is the total cost of the car.");

var downPmnt = prompt("What are you going to pay for your initial down payment?");
console.log("$" + downPmnt + " is your down payment.");

var loanLife = prompt("What is the life of the loan you will recieve, (in months)?");
console.log(loanLife + " is the life of your loan in months.");

var total = _carPrice - downPmnt / loanLife;
alert(total);
console.log("You would have to make monthly payments of $" + total);

if(total > 250){
	alert("It seems that you will not be able to afford this car.");
}else {
	alert("This car is totally affordable!")
}
