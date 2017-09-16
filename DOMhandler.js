

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementsByName('meatSelection');
	console.log('meatChooser', meatChooser);
	for (let i = 0; i < meatChooser.length; i ++){
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/		
	meatChooser[i].addEventListener("change", (event) =>{
	console.log('event', event);
  // Get the value chosen from the DOM
  	selectedTopping = event.target.value;
  	if (selectedTopping.checked) {
  		finalSandwich["meat"].push(selectedTopping.value);
  		myMeat(event.target.value);
  	}
  // Determine the price of the topping chosen
  // Add the topping to the SandwichMaker to increase the total price
	})
};

// let myBread = SandwichMaker.getBread();
// 	console.log("myBread", myBread);
 let myMeat = SandwichMaker.getMeat();
 	console.log("myMeat", myMeat);
// let myVeggies = SandwichMaker.getVeggies();
// 	console.log("myVeggies", myVeggies);
// let myCheese = SandwichMaker.getCheese();
// 	console.log("myCheese", myCheese);
// let myCondiments = SandwichMaker.getCondiments();
// 	console.log("myCondiments", myCondiments);