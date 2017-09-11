// Variable to hold the final price. Default to 0.
let finalSandwichPrice = 0; 
let breadPrices = 0; 
let meatPrices = 0; 
let cheesePrices = 0; 
let veggiePrices = 0; 
let condimentsPrices = 0;

//function to determine price and define getPrice
function getPrice(objectArray, topping) {
	for(let i in objectArray) {
		if(i === topping) {
			return objectArray[i];
		}
	}
};

// Variable to hold topping that the user selects
let selectedTopping;

// Get a reference to the <select> element that has all the meat options
let meatChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
	// Get the value chosen from the DOM
let selectedTopping = event.target.value;

	if (selectedTopping === "none") {
		document.getElementById("bacon").checked = false;
		document.getElementById("ham").checked = false;
		document.getElementById("turkey").checked = false;
		document.getElementById("roastBeef").checked = false;
		meatPrices = 0;
	} else {
	document.getElementById("none").checked = false;
	}

	// Determine the price of the topping chosen
let selectedMeatPrice = getPrice(myMeat, selectedTopping);
	// Add the topping to the SandwichMaker to increase the total price
	if (event.target.checked) {
	meatPrices += selectedMeatPrice; 
	} else { 
	eatPrices -= selectedMeatPrice; 
	}; 
return meatPrices; 
});

//Sandwich Total
let total = document.getElementById("total");

window.addEventListener("change", function(event) { 
	total.value = breadPrices + meatPrices + cheesePrices + veggiePrices + condimentsPrices; 
 });
