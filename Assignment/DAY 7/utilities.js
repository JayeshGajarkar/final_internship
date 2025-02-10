"use strict";
//partial utility
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateUser(user, update) {
    return __assign(__assign({}, user), update);
}
var user = { id: 1, name: "jayesh", email: "jayeshgajarkar@gmail.com" };
var update = { name: "dnyanadev", email: "jayeshgajarkar2002@gmail.com" };
console.log(user);
var user2 = updateUser(user, update);
console.log(user2);
var userPreview = { name: "Jayesh", email: "jayeshgajarkar@gmail.com" };
console.log(userPreview);
var userWithoutEmail = { id: 2, name: 'Kartik' };
console.log(userWithoutEmail);
