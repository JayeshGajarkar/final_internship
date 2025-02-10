class User {
    constructor(public id: number, public name: string, public role: string) {}
}

const permissions: { [key: string]: string[] } = {
    Admin: ['viewReports', 'editReports', 'deleteReports'],
    Manager: ['viewReports', 'editReports'],
    Employee: ['viewReports']
};

function Authorize(action: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const user: User = args[0]; // Assuming the first argument is the user

            if (permissions[user.role] && permissions[user.role].includes(action)) {
                return originalMethod.apply(this, args);
            } else {
                console.error(`User ${user.name} does not have permission to ${action}`);
                return null; // or throw an error
            }
        };

        return descriptor;
    };
}

class ReportService {
    @Authorize('viewReports')
    viewReports(user: User) {
        console.log(`${user.name} is viewing reports.`);
    }

    @Authorize('editReports')
    editReports(user: User) {
        console.log(`${user.name} is editing reports.`);
    }

    @Authorize('deleteReports')
    deleteReports(user: User) {
        console.log(`${user.name} is deleting reports.`);
    }
}

// Test the system
const admin = new User(1, 'Alice', 'Admin');
const manager = new User(2, 'Bob', 'Manager');
const employee = new User(3, 'Charlie', 'Employee');

const reportService = new ReportService();

reportService.viewReports(admin); // Alice is viewing reports.
reportService.editReports(manager); // Bob is editing reports.
reportService.deleteReports(employee); // User Charlie does not have permission to deleteReports