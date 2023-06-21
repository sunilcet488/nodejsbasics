console.log("hello testing");

var x = 10; // number type variable
console.log(x);
console.log(typeof(x));

var y = "10";
console.log("Type of Y " + typeof(y));

console.log("Type of Y after conversion " + typeof(parseInt(y)));

var z = false;

console.log(typeof(z));

// Array is a collection of values
// () - parenthesis
// {} - braces
// [] - bracket

var aFruits = ["Apple","Banana","Cherry"];
console.log(aFruits);
console.log(aFruits[0]);   // apple --- index of array starts with zero
console.log(aFruits[aFruits.length-1]);
console.log(typeof(aFruits));