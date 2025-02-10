"use strict";
//typeof Type Guard 
function printValue(value) {
    if (typeof value == 'string') {
        console.log(value.toLocaleUpperCase());
    }
    else if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
}
printValue("jayesh");
printValue(12.24578);
//instance of 
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Dog bark");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Cat meow");
    };
    return Cat;
}());
function makeSound(animal) {
    //animal.bark();
    //animal.meow();               compile time error
    if (animal instanceof Dog) {
        animal.bark();
    }
    else if (animal instanceof Cat) {
        animal.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());
function operateVehicle(vehicle) {
    if ("drive" in vehicle) {
        vehicle.drive();
    }
    else if ("sail" in vehicle) {
        vehicle.sail();
    }
}
var car = { drive: function () { return console.log("Driving car"); } };
var boat = { sail: function () { return console.log("Sailing the boat"); } };
operateVehicle(car);
operateVehicle(boat);
