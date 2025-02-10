enum Category {
    Electronics,
    Clothing,
    Grocery
}

const product = {
    productName: "Sample Product",
    price: 100,
    isAvailable: false,
    category: Category.Electronics
};

const product2 = {
    productName: "Sample Product 2",
    price: 200,
    isAvailable: true,
    category: Category.Grocery
};
const arr: typeof product[] = [];

arr.push(product);
arr.push(product2);

console.table(arr);
