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
// adding a new fruits 
console.log(aFruits.push("mango"));   // array.push gives the lenghth of array
console.log(aFruits);

// inserting a new item in the middle
console.log(aFruits.splice(1,0,"Pinapple"));  // 0 is delete number - it will return empty array
console.log(aFruits);

// deleting a item from the middle 
console.log(aFruits.splice(2,1)); // it will return the deleted item/s in an array
console.log(aFruits);

// loop over array
aFruits.forEach(afruit => {
    const element = afruit;
    console.log(element);
});



