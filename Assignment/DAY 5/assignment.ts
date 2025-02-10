function printLastElement<T>(arr:T[]):T {
    return arr[arr.length-1];
}

console.log(printLastElement([1,5,2,7,9]));

interface products {
    id:number,
    name:string,
    price:number,
};

function displayDetails(item:products):string{
    return `${item.id}|${item.name}|${item.price}|`;
};

const product={id:1,name:"Mobile",price:5000};
console.log(displayDetails(product));

enum OrderStatus{
    Pending,
    Shipped,
    Deliverd,
};


function orderStatus(status:OrderStatus):void {
    switch(status){
        case 0:
            console.log("Pending......");
            break;
        case 1:
            console.log("Shipped.......");
            break;   
        case 2:
            console.log("Deliverd.....");
            break;
        default:
            console.log("Wrong status....");
            break;
    }
}

orderStatus(OrderStatus.Pending); 
orderStatus(OrderStatus.Shipped); 
orderStatus(OrderStatus.Deliverd); 