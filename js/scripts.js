//Business Logic
function Pizza(size, toppings){
this.size = size
this.toppings = toppings;
}

Pizza.prototype.cost = function(pizzaSize, pizzaToppings){
let toppingsSum = 0;
const size = new Map ([
["Small", 10.00],
["Medium", 15.00],
["Large", 20.00]
]);
const toppings = new Map ([
["Pepperoni", 2.00],
["Sausage", 2.00],
["Ham", 2.00],
["Onions", 1.00],
["Peppers", 1.00],
["Olives", 1.00],
["Mushrooms", 2.00],
["Pineapple", 2.00],
["Extra Cheese", 2.00]
]);
pizzaToppings.forEach(function(element) {
  toppingsSum += toppings.get(element)
});

price = size.get(pizzaSize) + toppingsSum;
return price;
}


//User Interface

$(document).ready(function() {
  $("#startGame").submit(function(event){
  event.preventDefault();

  });
});