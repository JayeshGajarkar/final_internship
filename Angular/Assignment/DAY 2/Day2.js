function change(){
    document.getElementsByClassName("my")[0].innerHTML="paragraph changed";
}


//closure
//Remember the parent function properties in child function even after the execution of parent function 

function outerfunction(outer){
    return function innerfunction(inner){
        console.log(outer);
        console.log(inner);
    };
}

let newfunction=outerfunction("Jayesh");
newfunction("Gajakar");

//closure help in encapsulation 

function counter(){
    let count=0;
    return  {
        increament :() => count++ ,
        decreament :() => count--,
        getcount :() => count,
    }
}

const mycounter=counter();
console.log(mycounter.getcount());
console.log(mycounter.increament());
console.log(mycounter.increament());
console.log(mycounter.decreament());
console.log(mycounter.getcount());



//closure help to create dynamic function with specific behaviour 

function multiplier(factor){
    return function(number){
        return number * factor;
    }
}

const double=multiplier(2);
const triple=multiplier(3);

console.log(double(4));
console.log(triple(6));

function attachEventHandlers(){ 
    let msg = "Button clicked"; 
    document.getElementById("mybutton").addEventListener('click', function() { alert(msg); }); 
}

//create the back account with help of closure
function create_account(initial_amt){
    let amt=initial_amt;
    return {
        deposit:(new_amt)=>amt=amt+new_amt,
        withdraw:(new_amt)=>(new_amt>amt)?"insufficient balance":amt=amt-new_amt,
        get_balance:()=>amt,
    };
}

let acc=create_account(10000);
console.log(acc.get_balance());
console.log(acc.deposit(5000));
console.log(acc.get_balance());
console.log(acc.withdraw(16000));
console.log(acc.withdraw(12000));
console.log(acc.get_balance());


//IIFE 
//Imediate invoke function expression 
/*let counter=(function(){
    let count=0; //private variable
    return {
        increament:()=>count++,
        decreament:()=>count--,
        get_count:()=>count,
    };
})()//callfunction;*/

/*console.log(counter.increament());
console.log(counter.increament());
console.log(counter.decreament());
console.log(counter.increament());
console.log(counter.increament());*/


//Dynamic Discount system

let discount=(function(){
    let r = 10; //private
    return {
        price:function(price){
            let cp=price-(price*(r/100));
            console.log(`Price after discount :`);
            return cp ;
        },
        set:function(rate){
            r=rate;
            console.log(`Discount rate adjusted to :`);
            return r;
        },
        get:function(){
            console.log(`Current discount rate :`);
            return r;
        },
    };
})();


console.log(discount.price(100));
console.log(discount.set(20));
console.log(discount.price(100));
console.log(discount.get());
console.log(discount.price(200));


