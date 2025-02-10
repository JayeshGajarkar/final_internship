function LogClass(target: Function) {
    console.log(`Class ${target.name} is being created`);
}

function LogMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} is called with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };
}



@LogClass
class Myclass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @LogMethod
    greet(greeting: string) {
        return `${greeting}, ${this.name}`;
    }
}

const obj = new Myclass("Jayesh");
console.log(obj.greet("Hello"));



function ReplaceWithProxy<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        proxyEnabled = true;
    };
}

interface Order {
    proxyEnabled: boolean;
}

@ReplaceWithProxy
class Order {
    constructor(public id: number, public amount: number) {}
}

const obj1: Order = new Order(1, 500);
console.log(obj1.proxyEnabled); // true


