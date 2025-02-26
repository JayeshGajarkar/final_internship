SELECT * FROM Employees_J3;

CREATE FUNCTION dbo.GetFullName (@FirstName NVARCHAR(50), @LastName NVARCHAR(50))
RETURNS NVARCHAR(100)
AS
BEGIN
    RETURN @FirstName + ' ' + @LastName
END

-- Using the GetFullName function in a SELECT statement
SELECT EmployeeID, dbo.GetFullName(FirstName, LastName) AS FullName
FROM Employees_J3;

CREATE FUNCTION dbo.GetEmployeesByID (@EmployeeID INT)
RETURNS TABLE
AS
RETURN
(
    SELECT EmployeeID, FirstName, LastName
    FROM Employees_J3
    WHERE EmployeeID = @EmployeeID
);

SELECT * FROM dbo.GetEmployeesByID(6);

--PROCEDURES

CREATE PROCEDURE GetEmployeeByName @EmployeeName VARCHAR(30) 
AS 
BEGIN
	SELECT * FROM Employees_J3 WHERE firstname=@EmployeeName;
END;

EXEC GetEmployeeByName 'John';


CREATE PROCEDURE GetTotalSalary_J @TotalSalary INT OUTPUT
AS 
BEGIN
	SELECT @TotalSalary=SUM(Salary) FROM Employees_J3 ;
	PRINT @TotalSalary;
END;




DECLARE @Salary INT;


EXEC GetTotalSalary_J @TotalSalary=@Salary OUTPUT;
SELECT @Salary As TotalSalary;


