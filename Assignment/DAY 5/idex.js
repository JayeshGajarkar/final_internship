"use strict";
/*function add(num1:number,num2:number):number{
    return num1+num2;
}

console.log(add(10,5));*/
/*function greet(name: string, greeting?: string): string {
    return `Hello, ${name}! ${greeting}`;
}*/
//Arrow function 
var greet = function (name, greeting) { return "Hello, ".concat(name, "! ").concat(greeting); };
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Good morning")); // Output: Good morning, Bob!
// Overload signatures
//function add(a: number, b: number): number;
//function add(a: string, b: string): string;
// Single implementation
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
console.log(add("Hello, ", 5)); // Output: Hello, world!
//generic 
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("Hello"));
