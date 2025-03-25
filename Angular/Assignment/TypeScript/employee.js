"use strict";
var Role;
(function (Role) {
    Role["Manager"] = "manager";
    Role["Developer"] = "deveoper";
    Role["Designer"] = "designer";
    Role["Tester"] = "tester";
    Role["Hr"] = "hr";
})(Role || (Role = {}));
;
;
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.addEmployee = function (emp) {
        if (this.employees.some(function (e) { return e.id === emp.id; })) {
            console.log("Employee ".concat(emp.id, ".").concat(emp.name, " already exist"));
        }
        if (emp.salary <= 0) {
            console.log("Salary must be greater than zero:");
        }
        else {
            this.employees.push(emp);
            console.log("Employee ".concat(emp.id, " ").concat(emp.name, " added sucessfully"));
        }
    };
    ;
    Company.prototype.listEmployee = function () {
        return this.employees;
    };
    ;
    Company.prototype.filterEmployeeByRole = function (key) {
        var result = this.employees.filter(function (e) { return e.role === key; });
        return result;
    };
    ;
    Company.prototype.filterEmployeeByStatus = function (key) {
        var result = this.employees.filter(function (e) { return e.isActive === key; });
        return result;
    };
    ;
    Company.prototype.updateStatus = function (status, id) {
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].id === id) {
                this.employees[i].isActive = status;
                return;
            }
        }
        console.log("Employee with id ".concat(id, " not found"));
    };
    Company.prototype.calculateTotalSalary = function () {
        return this.employees.reduce(function (total, emp) { return total + emp.salary; }, 0);
    };
    return Company;
}());
;
// Create a new Company
var company = new Company();
var emp1 = { id: 1, name: "Jayesh", role: Role.Developer, salary: 50000, isActive: true };
company.addEmployee(emp1);
var emp2 = { id: 2, name: "Kartik", role: Role.Designer, salary: 60000, isActive: false };
company.addEmployee(emp2);
var emp3 = { id: 3, name: "Anish", role: Role.Tester, salary: 0, isActive: true };
company.addEmployee(emp3);
var emp4 = { id: 4, name: "Shri", role: Role.Developer, salary: 55000, isActive: true };
company.addEmployee(emp4);
var emp5 = { id: 5, name: "Pratik", role: Role.Designer, salary: 65000, isActive: false };
company.addEmployee(emp5);
var emp6 = { id: 6, name: "Aush", role: Role.Tester, salary: 48000, isActive: true };
company.addEmployee(emp6);
console.log("List of all employees:");
console.table(company.listEmployee());
console.log("Employees filtered by role Developer:");
console.table(company.filterEmployeeByRole(Role.Developer));
console.log("Employees filtered by status active:");
console.table(company.filterEmployeeByStatus(true));
company.updateStatus(false, 1);
console.log("Updated list of employees after changing status of employee with id 1:");
console.table(company.listEmployee());
company.updateStatus(true, 7);
console.log("Trying to update status of non-existent employee with id 7:");
console.log("Total salary of all employees:");
console.table(company.calculateTotalSalary());
