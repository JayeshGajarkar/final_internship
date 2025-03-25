"use strict";
function divide(a, b) {
    if (b == 0) {
        throw new Error("Can't divide zero");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
}
catch (error) {
    console.log(error.message);
}
