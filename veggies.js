console.log("linked to veggies.js");

var SandwichMaker = (function(maker) {

  const veggiePrices = {
                    "Lettuce": 0.50,
                    "Tomato": 0.75,
                    "Pickle": 0.75,
                    "Onion": 0.50,
                    "None": 0
                  };

  maker.getVeggies = function() {
    return veggiePrices;
  };

  return maker;
})(SandwichMaker || {});