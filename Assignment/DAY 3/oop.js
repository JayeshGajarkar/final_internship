class Car {
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    
    getDetails() {
        return `${this.brand}`;
    };
}

/*let obj=new Car("BMW",'xyz',2001);
console.log(obj.getDetails());*/

class BankAccount {
    #balance;

    constructor(name,initial_bal){
        this.name=name;
        this.#balance=initial_bal;
    }

    deposit(amount){
        if(amount<0){
            return `Invalid amount`;
        }
        this.#balance+=amount;
        return `Current balance is ${this.#balance}`;
    }

    withdraw(amount){
        if(amount<0){
            return `Invalid amount`;
        }
        if(amount>this.#balance){
            return "Insufficient balance";
        }

        this.#balance-=amount;
        return `Current balance is ${this.#balance}`;
    }

    getBalance(){
        return `Current balance is ${this.#balance}`;
    }
};

let bacc=new BankAccount("Jayesh",10000);
console.log(bacc.getBalance());
console.log(bacc.deposit(5000));
console.log(bacc.withdraw(-16000));
console.log(bacc.withdraw(6000));
console.log(bacc.withdraw(10000));


