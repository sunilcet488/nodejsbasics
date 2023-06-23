// Asyunchronous behaviours


const myFunction = () =>{
    console.log("Before calling a module");
    setTimeout(() => {
        console.log("after 5 second time out");
    }, 5000);
    console.log("after calling a module");
}

// myFunction();

// make the asynchronous to syncronous and use of promise
const myPromiseFunction = ms => new Promise(resolve => setTimeout(resolve, ms));

const mytimeoutFunction = () => {
    return myPromiseFunction(5000).then(()=>{console.log("after 5 second wait")});
}
const myFunction2 = async () => {
    console.log("Testing promise/syncronous behaviour of JS");
    await mytimeoutFunction();
    console.log("After call finish");
}

// myFunction2();

// other way using the promisfy concept using node js=== bug in the code
let util = require("util");
let callMyFunction = util.promisify((ms,f)=>setTimeout(f,ms));

console.log("before calling the promise");
callMyFunction(5000).then(() => { console.log("waited")});
console.log("after promise");






