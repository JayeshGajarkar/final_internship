"use strict";
var Category;
(function (Category) {
    Category[Category["Electronics"] = 0] = "Electronics";
    Category[Category["Clothing"] = 1] = "Clothing";
    Category[Category["Grocery"] = 2] = "Grocery";
})(Category || (Category = {}));
var product = {
    productName: "Sample Product",
    price: 100,
    isAvailable: false,
    category: Category.Electronics
};
var product2 = {
    productName: "Sample Product 2",
    price: 200,
    isAvailable: true,
    category: Category.Grocery
};
var arr = [];
arr.push(product);
arr.push(product2);
console.table(arr);
