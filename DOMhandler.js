let myBread = SandwichMaker.getBread();
	console.log("myBread", myBread);
let myMeat = SandwichMaker.getMeat();
	console.log("myMeat", myMeat);
let myVeggies = SandwichMaker.getVeggies();
	console.log("myVeggies", myVeggies);
let myCheese = SandwichMaker.getCheese();
	console.log("myCheese", myCheese);
let myCondiments = SandwichMaker.getCondiments();
	console.log("myCondiments", myCondiments);

	let meatSelect = document.getElementsByName('meatSelection');
	console.log('meatSelect', meatSelect);
	for (let i = 0; i < meatSelect.length; i ++){
		meatSelect[i].addEventListener("change", (event) =>{
			console.log('event', event);
			myMeat(event.target.value);
		})
	}
	