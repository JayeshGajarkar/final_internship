"use strict";
function printLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(printLastElement([1, 5, 2, 7, 9]));
;
function displayDetails(item) {
    return "".concat(item.id, "|").concat(item.name, "|").concat(item.price, "|");
}
;
var product = { id: 1, name: "Mobile", price: 5000 };
console.log(displayDetails(product));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Deliverd"] = 2] = "Deliverd";
})(OrderStatus || (OrderStatus = {}));
;
function orderStatus(status) {
    switch (status) {
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
