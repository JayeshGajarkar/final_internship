// Enum for predefined roles
enum role {
    Admin = "Admin",
    Manager = "Manager",
    Employee = "Employee"
}

// Union type to allow both predefined roles and custom role strings
type Role = role | string;

// Interface for User object
interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
    phoneNumber?: number; // Optional phone number
}

// Array to store users
const users: User[] = [];

// Function to create a new user
function createUser(user: User): User {
    users.push(user);
    console.log("User created Sucessfully");
    return user;
}

// Function to get users by role
function getUsersByRole(role: Role): User[] {
    return users.filter(user => user.role === role);
}

// Example usage
console.table(createUser({ id: 1, name: 'jayesh', email: 'jayeshgajarkar@gmail.com', role: role.Admin, phoneNumber: 9307297339 }));
console.table(createUser({ id: 2, name: 'xyz', email: 'xyz@example.com', role: 'CustomRole' }));

// Display users by role in a table format
console.table(getUsersByRole(role.Admin));
console.table(getUsersByRole('CustomRole'));