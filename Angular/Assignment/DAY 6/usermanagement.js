"use strict";
// Enum for predefined roles
var role;
(function (role) {
    role["Admin"] = "Admin";
    role["Manager"] = "Manager";
    role["Employee"] = "Employee";
})(role || (role = {}));
// Array to store users
var users = [];
// Function to create a new user
function createUser(user) {
    users.push(user);
    console.log("User created Sucessfully");
    return user;
}
// Function to get users by role
function getUsersByRole(role) {
    return users.filter(function (user) { return user.role === role; });
}
// Example usage
console.table(createUser({ id: 1, name: 'jayesh', email: 'jayeshgajarkar@gmail.com', role: role.Admin, phoneNumber: 9307297339 }));
console.table(createUser({ id: 2, name: 'xyz', email: 'xyz@example.com', role: 'CustomRole' }));
// Display users by role in a table format
console.table(getUsersByRole(role.Admin));
console.table(getUsersByRole('CustomRole'));
