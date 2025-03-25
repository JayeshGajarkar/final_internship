//typeof Type Guard 

function printValue(value:string|number){
    if(typeof value=='string'){
        console.log(value.toLocaleUpperCase());
    }else if(typeof value==='number'){
        console.log(value.toFixed(2));
    }
}

printValue("jayesh");
printValue(12.24578);

//instance of 

class Dog{
    bark(){
        console.log("Dog bark");
    }
}

class Cat {
    meow(){
        console.log("Cat meow");
    }
}

function makeSound(animal:Dog|Cat):void{

    //animal.bark();
    //animal.meow();               compile time error
    if(animal instanceof Dog){
        animal.bark();
    }else if(animal instanceof Cat){
        animal.meow();
    }
}


makeSound(new Dog());
makeSound(new Cat());


//in operator 

interface Car {
    drive():void;
}

interface Boat {
    sail():void;
}

function operateVehicle(vehicle:Car|Boat) {
    if ("drive" in vehicle){
        vehicle.drive();
    }else if("sail" in vehicle){
        vehicle.sail();
    }
}


const car:Car={drive: ()=> console.log("Driving car")};
const boat:Boat={sail:()=>console.log("Sailing the boat")};

operateVehicle(car);
operateVehicle(boat);
