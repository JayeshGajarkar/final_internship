CREATE TABLE Employees_J (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(30) UNIQUE,
    Email VARCHAR(30),
    Department VARCHAR(30),
    Salary DECIMAL(10, 2),
    JoiningDate DATE
);

INSERT INTO Employees_J (EmployeeID, Name, Email, Department, Salary, JoiningDate) VALUES
(1, 'Amit Sharma', 'amit.sharma@example.com', 'HR', 50000.00, '2023-01-15'),
(2, 'Priya Singh', 'priya.singh@example.com', 'IT', 60000.00, '2023-02-20'),
(3, 'Rajesh Kumar', 'rajesh.kumar@example.com', 'Finance', 55000.00, '2023-03-10'),
(4, 'Anita Desai', 'anita.desai@example.com', 'HR', 52000.00, '2023-04-05'),
(5, 'Vikram Patel', 'vikram.patel@example.com', 'IT', 58000.00, '2023-05-01');

select * from Employees_J;

ALTER TABLE Employees_J
ADD Phonenumber int;

select * from Employees_J;
