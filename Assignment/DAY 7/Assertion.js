"use strict";
var myName = "jayesh";
console.log(myName.length);
var value = "Hello";
value = 10;
//console.log(value.toUpperCase());  //does not give error at compile time but give error at runtime
var value2 = "Hello";
//value2=10;
//console.log(value2.toUpperCase()); //give error at compile time -- type safety
console.log(value2.toUpperCase()); //using as keyword 
console.log(value2.toLocaleUpperCase()); //using brackets
if (typeof value2 === 'string') {
    console.log(value2.toLocaleUpperCase()); //type checking
}
function getLength(input) {
    /*if((input as string[]).length !== undefined){
        return (input as string[]).length;
    }*/
    return input.length;
}
console.log(getLength(["jayesh", "kartik"]));
console.log(getLength("jayesh"));
// Using type assertion to assign an object to the Employee interface
var employee = {};
employee.name = "John"; //if assign number will give and error
employee.code = 123;
console.log(employee.name); // Output: John
console.log(employee.code); // Output: 123
var num = "42";
console.log(typeof num);
var newVal = num;
console.log(typeof newVal);
var str = "123";
console.log(typeof str);
