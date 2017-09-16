var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();

// let myBread = SandwichMaker.getBread();
// 	console.log("myBread", myBread);
// let myMeat = SandwichMaker.getMeat();
// 	console.log("myMeat", myMeat);
// let myVeggies = SandwichMaker.getVeggies();
// 	console.log("myVeggies", myVeggies);
// let myCheese = SandwichMaker.getCheese();
// 	console.log("myCheese", myCheese);
// let myCondiments = SandwichMaker.getCondiments();
// 	console.log("myCondiments", myCondiments);