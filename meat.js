var SandwichMaker = (function(maker) {

  var meatPrices = {
                    "bacon": 1.00,
                    "ham": 1.50,
                    "turkey": 1.50,
                    "roast beef": 2.00,
                    "none": 0
                  };

  maker.getMeat = (meatSelected) =>{
  	return meatPrices[meatSelected];
  };

  return maker;
})(SandwichMaker || {});