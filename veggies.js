console.log("linked to veggies.js");

var SandwichMaker = (function(maker) {

  var veggiePrices = {
                    "Lettuce": 0.50,
                    "Tomato": 0.75,
                    "Pickle": 0.75;
                    "Onion": 0.50,
                    "none": 0
                  };

  maker.getVeggies = function() {
    return veggiePrices;
  };

  return maker;
})(SandwichMaker || {});