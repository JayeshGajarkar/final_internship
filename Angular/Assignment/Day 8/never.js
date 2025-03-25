"use strict";
function throwError(msg) {
    throw new Error(msg);
}
throwError("Something went worng");
function infiniteLoop() {
    while (true) {
        console.log("runnnig");
    }
}
infiniteLoop();
