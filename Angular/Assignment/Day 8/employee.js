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
var Role;
(function (Role) {
    Role["manager"] = "Manager";
    Role["developer"] = "Developer";
    Role["intern"] = "Intern";
})(Role || (Role = {}));
var employees = [];
function addEmployee(emp) {
    employees.push(emp);
}
function updateEmployee(id, update) {
    var employeeIndex = employees.findIndex(function (emp) { return emp.id === id; });
    if (employeeIndex !== -1) {
        var updatedEmployee = __assign(__assign({}, employees[employeeIndex]), update);
        employees[employeeIndex] = updatedEmployee;
        return updatedEmployee;
    }
    else {
        console.log("Employee with ID ".concat(id, " not found"));
        return undefined;
    }
}
function generateEmployeeSummary(employee) {
    return "ID: ".concat(employee.id, ", Name: ").concat(employee.name, ", Email: ").concat(employee.email, ", Role: ").concat(employee.role, ", Status: ").concat(employee.status);
}
function groupEmployeesByRole(employees) {
    return employees.reduce(function (acc, emp) {
        if (!acc[emp.role]) {
            acc[emp.role] = [];
        }
        acc[emp.role].push(emp);
        return acc;
    }, {});
}
function isManager(emp) {
    return emp.role === Role.manager;
}
function isActive(employee) {
    return employee.status === "active";
}
var logDataEmp = [];
function logActivity(data) {
    var employee = employees.find(function (emp) { return emp.id === data.id; });
    if (!employee) {
        console.error("Employee with ID ".concat(data.id, " not found"));
        return;
    }
    if (!isActive(employee)) {
        console.error("Inactive employee ".concat(employee.name, " cannot log activities"));
        return;
    }
    if (data.task === "approve loan" && !isManager(employee)) {
        console.error("Only managers can approve loans");
        return;
    }
    console.log("Activity logged for ".concat(employee.name, ": ").concat(data.task));
    logDataEmp.push(data);
}
addEmployee({ id: 1, name: "Alice", email: "alice@example.com", role: Role.manager, status: "active" });
addEmployee({ id: 2, name: "Bob", email: "bob@example.com", role: Role.developer, status: "inactive" });
addEmployee({ id: 3, name: "Jayesh", email: "jayesh@example.com", role: Role.developer, status: "active" });
addEmployee({ id: 4, name: "Kartik", email: "kartik@example.com", role: Role.developer, status: "inactive" });
addEmployee({ id: 5, name: "Shri", email: "shri@example.com", role: Role.intern, status: "active" });
console.log(generateEmployeeSummary(employees[0]));
console.log(generateEmployeeSummary(employees[1]));
console.log(generateEmployeeSummary(employees[2]));
console.log(generateEmployeeSummary(employees[3]));
console.log(generateEmployeeSummary(employees[4]));
logActivity({ id: 1, task: "approve loan", date: "23 jan" });
logActivity({ id: 2, task: "submit report", date: "24 jan" });
logActivity({ id: 3, task: "review application", date: "25 jan" });
logActivity({ id: 4, task: "update records", date: "26 jan" });
logActivity({ id: 5, task: "attend meeting", date: "27 jan" });
logActivity({ id: 6, task: "prepare presentation", date: "28 jan" });
// Group employee role
console.log(groupEmployeesByRole(employees));
console.log(isManager(employees[1]));
console.log(isActive(employees[2]));
// Analytics Dashboard
function countTotalEmployees() {
    return employees.length;
}
function countActiveEmployees() {
    return employees.filter(isActive).length;
}
function displayTask() {
    console.table(logDataEmp);
}
function displayRoleDistribution() {
    var roleCount = {};
    employees.forEach(function (emp) {
        roleCount[emp.role] = (roleCount[emp.role] || 0) + 1;
    });
    console.log("Role Distribution:", roleCount);
}
//Dashboard
console.log("Total Employees:", countTotalEmployees());
console.log("Active Employees:", countActiveEmployees());
console.log("Task records:");
displayRoleDistribution();
displayTask();
function displayEmployeeData() {
    console.group("Employee Data");
    console.table(employees);
    //employees.forEach(emp => console.table(emp));
}
displayEmployeeData();
