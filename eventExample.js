let event = require("events");

var myEvent = new event.EventEmitter();
// Event handler

myEvent.on("senseEvent",() => { 
    console.log("Event Fired");
})

// Raising an event
myEvent.emit("senseEvent");


// Creating a class in node js
var Person = function(name){
    this.name = name;
}

let utl = require("util");

// inheritance in class

utl.inherits(Person,event.EventEmitter);

var sunil = new Person("Sunil");
var samir = new Person("Samir");

var people = [sunil,samir];

people.forEach(element => {
    element.on("talk", (msg)=>{
        console.log(element.name + " Said " +msg);
    })
})


sunil.emit("talk","Hi");
samir.emit("talk","Hello");

