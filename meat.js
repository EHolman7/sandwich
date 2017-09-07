console.log("linked to meats.js");

var SandwichMaker = (function(maker) {

  var meatPrices = {
                    "Bacon": 1.00,
                    "Ham": 1.50,
                    "Turkey": 1.50;
                    "Roast Beef": 2.00,
                    "none": 0
                  };

  maker.getMeat = function() {
    return meatPrices;
  };

  return maker;
})(SandwichMaker || {});