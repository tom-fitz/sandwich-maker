// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // var meatPrices;

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    var cheesePrices = {
      Lettuce: 0.30,
      Tomato: 0.20,
      Onion: 0.25,
      Pickles: 0.75
    }
    return cheesePrices;
    var userCheeseSelect = options[cheese];
    console.log("Cheese", userCheeseSelect);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
