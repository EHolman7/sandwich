var SandwichMaker = (function(maker) {

  var meatPrices = {
                    "Bacon": 1.00,
                    "Ham": 1.50,
                    "Turkey": 1.50,
                    "Roast Beef": 2.00,
                    "None": 0
                  };

  maker.getMeat = function() {
    return meatPrices;
  };

  return maker;
})(SandwichMaker || {});