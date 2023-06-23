var utl = require("./utility");

var arr = ["apple","banana","cherry"];
var arr2 = ["cuttack","bhubaneswar","Banki"];

utl.printf(arr);
utl.printf(arr2);

utl.getCount(arr);
utl.removeItem(arr,1);
utl.getCount(arr);
utl.printf(arr);

// declaring a global variable
// global variable can not access inside the local function
this.name = "Sunil";

myOldFunction = function(){
    console.log(this.name);   // this will return as undefined
}

myOldFunction();

// arrow function
myfunction = (a,b)=> {
    this.name = "Sunil Kumar Das";
    console.log(this.name);
    return a+b;
}

console.log(myfunction(10,23));  
