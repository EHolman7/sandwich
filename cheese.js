console.log("linked to cheese.js");

var SandwichMaker = (function(maker) {

  var cheesePrices = {
                    "American": 0.75,
                    "Cheddar": 0.75,
                    "Pepperjack": 0.75;
                    "Provolone": 0.75,
                    "none": 0
                  };

  maker.getCheese = function() {
    return cheesePrices;
  };

  return maker;
})(SandwichMaker || {});