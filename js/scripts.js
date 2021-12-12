//Business Logic
function Pizza(size, toppings){
this.size = size
this.toppings = toppings;
}

Pizza.prototype.cost = function(){
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
this.toppings.forEach(function(element) {
  toppingsSum += toppings.get(element)
});
price = size.get(this.size) + toppingsSum;
return price;
}


//User Interface

$(document).ready(function() {
  $("#new-pizza").submit(function(event){
  event.preventDefault();
  let pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
  let pizzaToppings = [];
  $("input:checkbox[name=Toppings]:checked").each(function(){
  pizzaToppings.push($(this).val());
  });
  newPizza = new Pizza(pizzaSize, pizzaToppings);
  $("#cost").text(newPizza.cost());
  $("#pizzaOrder").text(pizzaSize + " " + "pizza");
  $("#pizzaDetails").text(pizzaToppings);
  });
});