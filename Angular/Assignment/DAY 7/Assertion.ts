const myName:unknown="jayesh";
console.log((myName as string).length);


let value:any="Hello";
value=10;
//console.log(value.toUpperCase());  //does not give error at compile time but give error at runtime

let value2:unknown="Hello";
//value2=10;
//console.log(value2.toUpperCase()); //give error at compile time -- type safety

console.log((value2 as string).toUpperCase()); //using as keyword 
console.log((<string>value2).toLocaleUpperCase());//using brackets


if(typeof value2==='string'){
    console.log(value2.toLocaleUpperCase()); //type checking
}



function getLength(input: string | string[]):number {
    /*if((input as string[]).length !== undefined){
        return (input as string[]).length;
    }*/

    return (input as string).length;
}

console.log(getLength(["jayesh","kartik"]));
console.log(getLength("jayesh"));


interface Employee {
    name: string;
    code: number;
}

// Using type assertion to assign an object to the Employee interface
let employee = {} as Employee;
employee.name = "John"; //if assign number will give and error
employee.code = 123;




console.log(employee.name); // Output: John
console.log(employee.code); // Output: 123

let num:unknown="42";
console.log(typeof num);
let newVal=(num as number);
console.log(typeof newVal);

let str="123" as unknown as string;
console.log(typeof str);