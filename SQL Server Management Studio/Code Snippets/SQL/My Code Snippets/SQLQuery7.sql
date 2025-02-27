CREATE TABLE Departments_J3(
	DepartmentID INT PRIMARY KEY,
	DepartmentName VARCHAR(30)
);

CREATE TABLE Employees_J3 (
	EmpoyeeID INT PRIMARY KEY,
	Name VARCHAR(30),
	Age INT CHECK(Age>=18),
	Salary DECIMAL (10,2) DEFAULT 5000,
	DepartmentID INT,
	FOREIGN KEY (DepartmentID) REFERENCES Departments_J3(DepartmentID)
);

INSERT INTO Departments_J3 VALUES (1,'AIML');
INSERT INTO Departments_J3 VALUES (2,'DS');
INSERT INTO Departments_J3 VALUES (3,'CSE');

SELECT  * FROM Departments_J3;
SELECT  * FROM Employees_J3;

INSERT INTO Employees_J3 VALUES (1,'JAYESH',22,50000,1);
INSERT INTO Employees_J3 VALUES (2,'PRAVIN',25,50000,2);
INSERT INTO Employees_J3 VALUES (3,'PRAVIN',25,50000,3);

UPDATE Departments_J3
SET DepartmentID = 3 
WHERE DepartmentID = 2;

DELETE FROM Employees_J3
WHERE DepartmentID = 1;

