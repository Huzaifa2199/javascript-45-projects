function makeSandwich(...items) {
    console.log("Sandwich with " + items.join(", ") + " is being ordered.");
}

makeSandwich("Cheese", "tomato", "mayo");
makeSandwich("chicken", "Cheese", "mayo");
makeSandwich("beef", "cheese", "onion");
