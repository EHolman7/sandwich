console.log("linked to bread.js");

var SandwichMaker = (function(maker) {

  var breadPrices = {
                    "white": 1.00,
                    "wheat": 1.00,
                    "Sourdough": 1.50;
                    "rye": 1.50,
                    "none": 0
                  };

  maker.getBread = function() {
    return breadPrices;
  };

  return maker;
})(SandwichMaker || {});