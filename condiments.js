console.log("linked to condiments.js");

var SandwichMaker = (function(maker) {

  var condimentPrices = {
                    "Mustard": 0.25,
                    "Mayonnaise": 0.25,
                    "Oil": 0.25,
                    "Vinegar": 0.25,
                    "None": 0
                  };

  maker.getCondiments = function() {
    return condimentPrices;
  };

  return maker;
})(SandwichMaker || {});