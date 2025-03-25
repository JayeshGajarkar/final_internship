/*function add(num1:number,num2:number):number{
    return num1+num2;
}

console.log(add(10,5));*/

/*function greet(name: string, greeting?: string): string {
    return `Hello, ${name}! ${greeting}`;
}*/




//Arrow function 

const greet=(name:string,greeting?:string):string=>`Hello, ${name}! ${greeting}`;
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Good morning")); // Output: Good morning, Bob!


// Overload signatures
//function add(a: number, b: number): number;
//function add(a: string, b: string): string;

// Single implementation
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(5, 3)); // Output: 8
console.log(add("Hello, ", 5)); // Output: Hello, world!

//generic 

function identity<T>(value:T):T{
    return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Hello"));


