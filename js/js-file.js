const items = {
	food:1000,
	drinks:2000
};
// cart+=items.food;
// console.log("cart:",cart);
var cart=0;
var cart1=0;
/*function addToCart() {
	cart+=items.food;
}

addToCart();
addToCart();
console.log("cart:",cart)
function addToCart1(parameter) {
	cart1+=parameter;
}
addToCart1(items.food);
addToCart1(items.drinks);
console.log("cart1:",cart1);*/

// complex function

cart=0;
function tocart(item){
	return cart+item;
}
function addCartValue(item) {
	cart=tocart(item);
}
addCartValue(items.food);
console.log("cart:",cart);
var cart;

/* arrow functions 
   var tocart=(item)=>{ parameter
   return cart+item;
   };*/