-- Create Departments Table
CREATE TABLE Departments_J2 (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

-- Create Employees Table
CREATE TABLE Employees_J2 (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    DepartmentID INT,
    HireDate DATE,
    BaseSalary DECIMAL(10,2),
    Bonus DECIMAL(10,2),
    ManagerID INT NULL,
    FOREIGN KEY (DepartmentID) REFERENCES Departments_J2(DepartmentID),
    FOREIGN KEY (ManagerID) REFERENCES Employees_J2(EmployeeID)
);

-- Insert Data into Departments
INSERT INTO Departments_J2 (DepartmentID, DepartmentName) VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance'),
(4, 'Marketing');

-- Insert Data into Employees
INSERT INTO Employees_J2 (EmployeeID, EmployeeName, DepartmentID, HireDate, BaseSalary, Bonus, ManagerID) VALUES
(1, 'Alice Johnson', 1, '2018-06-15', 60000, 5000, NULL),
(2, 'Bob Smith', 2, '2019-07-20', 75000, 7000, 1),
(3, 'Charlie Brown', 3, '2020-08-25', 80000, 8000, 1),
(4, 'David White', 2, '2017-09-30', 70000, 6000, 2),
(5, 'Emily Green', 4, '2021-01-10', 50000, 4000, 3);

-- Task 1: Find Employees and Their Department Names Using INNER JOIN
SELECT e.EmployeeName, d.DepartmentName, e.HireDate
FROM Employees_J2 e
INNER JOIN Departments_J2 d ON e.DepartmentID = d.DepartmentID;

-- Task 2: List Employees Without a Manager (SELF JOIN or LEFT JOIN)
SELECT e.EmployeeName
FROM Employees_J2 e
LEFT JOIN Employees_J2 m ON e.ManagerID = m.EmployeeID
WHERE e.ManagerID IS NULL;

-- Task 3: Find Departments Without Any Employees (LEFT JOIN)
SELECT d.DepartmentName
FROM Departments_J2 d
LEFT JOIN Employees_J2 e ON d.DepartmentID = e.DepartmentID
WHERE e.EmployeeID IS NULL;

-- Task 4: Get the Total Salary (Base + Bonus) for Each Employee (JOIN + Calculation)
SELECT e.EmployeeID, e.EmployeeName, (e.BaseSalary + e.Bonus) AS TotalSalary
FROM Employees_J2 e;

-- Task 5: Identify the Employee with the Highest Salary (Subquery)
SELECT e.EmployeeID, e.EmployeeName, (e.BaseSalary + e.Bonus) AS TotalSalary
FROM Employees_J2 e
WHERE (e.BaseSalary + e.Bonus) = (
    SELECT MAX(BaseSalary + Bonus)
    FROM Employees_J2
);

-- Task 6: Find Employees Earning More Than Their Manager (SELF JOIN)
SELECT e.EmployeeID, e.EmployeeName, e.BaseSalary + e.Bonus AS EmployeeSalary,
       m.EmployeeName AS ManagerName, m.BaseSalary + m.Bonus AS ManagerSalary
FROM Employees_J2 e
JOIN Employees_J2 m ON e.ManagerID = m.EmployeeID
WHERE (e.BaseSalary + e.Bonus) > (m.BaseSalary + m.Bonus);

-- Task 7: Get Employees Who Have Been Working for More Than 3 Years (DATEDIFF)
SELECT e.EmployeeID, e.EmployeeName, e.HireDate
FROM Employees_J2 e
WHERE DATEDIFF(YEAR,e.HireDate, GETDATE()) > 3;

-- Task 8: Find the Number of Employees in Each Department (GROUP BY)
SELECT d.DepartmentName, COUNT(e.EmployeeID) AS EmployeeCount
FROM Departments_J2 d
LEFT JOIN Employees_J2 e ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentName;

-- Task 9: Create a View for HR to See Employee Salary Details
GO
CREATE VIEW EmployeeSalaryView_J2 AS
SELECT e.EmployeeID, e.EmployeeName, d.DepartmentName, e.BaseSalary, e.Bonus, (e.BaseSalary + e.Bonus) AS TotalSalary
FROM Employees_J2 e
JOIN Departments_J2 d ON e.DepartmentID = d.DepartmentID;