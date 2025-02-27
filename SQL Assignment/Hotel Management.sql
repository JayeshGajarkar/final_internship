-- Create Tables
CREATE TABLE Hotel_Customers_J5(
	CustomerId INT PRIMARY KEY,
	Name VARCHAR(50),
	Email VARCHAR(50),
	Phone CHAR(10),
	Address VARCHAR(100)
);

CREATE TABLE Hotel_Rooms_J5(
	RoomId INT PRIMARY KEY,
	RoomType VARCHAR(20),
	PricePerNight DECIMAL(10, 2),
	Status VARCHAR(20) CHECK(Status IN ('Available', 'NotAvailable'))
);

CREATE TABLE Hotel_Bookings_J5(
	BookingId INT IDENTITY(1,1) PRIMARY KEY,
	CustomerId INT,
	RoomId INT,
	CheckInDate DATE,
	CheckOutDate DATE,
	TotalAmount DECIMAL(10, 2),
	FOREIGN KEY (CustomerId) REFERENCES Hotel_Customers_J5(CustomerId),
	FOREIGN KEY (RoomId) REFERENCES Hotel_Rooms_J5(RoomId)
);

CREATE TABLE Hotel_Payments_J5(
	PaymentId INT IDENTITY(1,1) PRIMARY KEY,
	BookingId INT,
	PaymentDate DATE,
	Amount DECIMAL(10, 2),
	PaymentMethod VARCHAR(20),
	FOREIGN KEY (BookingId) REFERENCES Hotel_Bookings_J5(BookingId)
);

CREATE TABLE Hotel_Employee_J5(
	EmployeeId INT PRIMARY KEY,
	Name VARCHAR(50),
	Position VARCHAR(20),
	Salary DECIMAL(10, 2),
	HireDate DATE,
	ManagerId INT,
	FOREIGN KEY (ManagerId) REFERENCES Hotel_Employee_J5(EmployeeId)
);

CREATE TABLE Hotel_Services_J5(
	ServiceId INT PRIMARY KEY,
	ServiceName VARCHAR(50),
	Price DECIMAL(10, 2)
);

CREATE TABLE Hotel_HotelBranch_J5(
	BranchId INT PRIMARY KEY,
	BranchName VARCHAR(50),
	LocationDecription VARCHAR(100)
);

-- Data Insertion
INSERT INTO Hotel_Customers_J5 (CustomerId, Name, Email, Phone, Address) VALUES
(1, 'Virat Kohli', 'virat@gmail.com', '1234567890', '123 Main St'),
(2, 'Rohit Sharma', 'rohit@gmail.com', '0987654321', '456 Elm St'),
(3, 'K. L. Rahul', 'rahul@gmail.com', '1112223333', '789 Oak St'),
(4, 'Rishab Pant', 'rishab@gmail.com', '4445556666', '321 Pine St'),
(5, 'Axar Patel', 'axar@gmail.com', '7778889999', '654 Cedar St');

INSERT INTO Hotel_Rooms_J5 (RoomId, RoomType, PricePerNight, Status) VALUES
(101, 'Single', 500.00, 'Available'),
(102, 'Double', 750.00, 'NotAvailable'),
(103, 'Suite', 1500.00, 'Available'),
(104, 'Single', 500.00, 'Available'),
(105, 'Double', 750.00, 'NotAvailable'),
(106, 'Double', 750.00, 'Available');

INSERT INTO Hotel_Bookings_J5 (CustomerId, RoomId, CheckInDate, CheckOutDate, TotalAmount) VALUES
(1, 101, '2025-01-01', '2025-01-05', 2000.00),
(2, 102, '2025-02-01', '2025-02-05', 3000.00),
(2, 101, '2025-06-01', '2025-02-05', 2000.00),
(3, 103, '2025-03-01', '2025-03-05', 6000.00),
(4, 104, '2025-04-01', '2025-04-05', 2000.00),
(5, 105, '2025-05-01', '2025-05-05', 3000.00);

INSERT INTO Hotel_Payments_J5 (BookingId, PaymentDate, Amount, PaymentMethod) VALUES
(1, '2025-01-06', 2000.00, 'Credit Card'),
(2, '2025-02-06', 3000.00, 'UPI'),
(3, '2025-03-06', 6000.00, 'Cash'),
(4, '2025-04-06', 2000.00, 'Credit Card'),
(5, '2025-05-06', 3000.00, 'UPI');

INSERT INTO Hotel_Employee_J5 (EmployeeId, Name, Position, Salary, HireDate, ManagerId) VALUES
(1, 'Shri Nashte', 'Manager', 50000.00, '2020-01-01', NULL),
(2, 'Jay Gajarkar', 'Receptionist', 30000.00, '2021-02-01', 1),
(3, 'Omkar Bagal', 'Housekeeper', 25000.00, '2021-03-01', 1),
(4, 'Auysh Koli', 'Chef', 35000.00, '2022-04-01', 1),
(5, 'Lavanya Satpute', 'Security', 30000.00, '2022-05-01', 1);

INSERT INTO Hotel_HotelBranch_J5 (BranchId, BranchName, LocationDecription) VALUES
(1, 'Mumbai Central', 'Near Central Station, Mumbai'),
(2, 'Pune West', 'Next to Pune University, Pune'),
(3, 'Kohapur', 'Mahalakshi Temple, Rankala Lake, Mountans,Kohapur'),
(4, 'Chennai Beach', 'Close to Marina Beach, Chennai'),
(5, 'Navi Mumbai', 'Near Flemingo point Beach, Navi Mumbai');

-- Queries using joins
-- Customer Booking Details
SELECT Hotel_Customers_J5.Name, Hotel_Rooms_J5.RoomType, Hotel_Bookings_J5.CheckInDate, Hotel_Bookings_J5.TotalAmount
FROM Hotel_Customers_J5 
INNER JOIN Hotel_Bookings_J5 ON Hotel_Customers_J5.CustomerId = Hotel_Bookings_J5.CustomerId
INNER JOIN Hotel_Rooms_J5 ON Hotel_Bookings_J5.RoomId = Hotel_Rooms_J5.RoomId;

-- Employee list with managers
SELECT emp.Name AS Employee, emp.Position, man.Name AS Manager
FROM Hotel_Employee_J5 AS emp
LEFT JOIN Hotel_Employee_J5 AS man ON emp.ManagerId = man.EmployeeId;

-- Rooms that never booked
SELECT Hotel_Rooms_J5.RoomId, Hotel_Rooms_J5.RoomType, Hotel_Rooms_J5.PricePerNight
FROM Hotel_Rooms_J5
LEFT JOIN Hotel_Bookings_J5 ON Hotel_Rooms_J5.RoomId = Hotel_Bookings_J5.RoomId
WHERE Hotel_Bookings_J5.RoomId IS NULL;

-- Subqueries
-- Customers with multiple bookings
SELECT c.CustomerId, c.Name, c.Email, c.Phone, c.Address, b.BookingCount
FROM Hotel_Customers_J5 c
INNER JOIN (
    SELECT CustomerId, COUNT(*) AS BookingCount
    FROM Hotel_Bookings_J5
    GROUP BY CustomerId
    HAVING COUNT(*) > 1
) b ON c.CustomerId = b.CustomerId;

-- Most Expensive Room booked
SELECT *
FROM Hotel_Rooms_J5
WHERE PricePerNight = (
    SELECT MAX(PricePerNight)
    FROM Hotel_Rooms_J5
    WHERE RoomId IN (
        SELECT RoomId
        FROM Hotel_Bookings_J5
    )
);

-- Views
GO
CREATE VIEW ActiveBooking_J5 AS
SELECT 
	Hotel_Customers_J5.Name,
	Hotel_Rooms_J5.RoomType, 
	Hotel_Bookings_J5.CheckInDate,
	Hotel_Bookings_J5.CheckOutDate
FROM Hotel_Customers_J5 
INNER JOIN Hotel_Bookings_J5 ON Hotel_Customers_J5.CustomerId = Hotel_Bookings_J5.CustomerId
INNER JOIN Hotel_Rooms_J5 ON Hotel_Bookings_J5.RoomId = Hotel_Rooms_J5.RoomId;
GO
	
SELECT * FROM ActiveBooking_J5;

-- Indexing
-- Create Index on RoomType
CREATE INDEX idx_Rooms_J5 ON Hotel_Rooms_J5(RoomType);

-- Create Composite index on CheckInDate, CheckOutDate
CREATE INDEX idx_CheckInAndOut_J5 ON Hotel_Bookings_J5(CheckInDate, CheckOutDate);

-- Stored Procedures and Functions
-- Create Stored procedure to get total revenue generated in a month
GO
CREATE PROCEDURE sp_CalculateMonthlyRevenue_J5(
    @Year INT,
    @Month INT
)
AS
BEGIN
    SELECT SUM(Amount) AS TotalRevenue_In_Month
    FROM Hotel_Payments_J5
    WHERE YEAR(PaymentDate) = @Year AND MONTH(PaymentDate) = @Month;
END;
GO


EXEC sp_CalculateMonthlyRevenue_J5
	@Year = 2025,
    @Month = 3;

-- Create UD Function to calculate the total number of days customer stayed
GO
CREATE FUNCTION fn_CalculateTotalDays_J5(
    @CustomerId INT
)
RETURNS INT
AS
BEGIN
    DECLARE @TotalDays INT;

    SELECT @TotalDays = SUM(DATEDIFF(DAY, CheckInDate, CheckOutDate))
    FROM Hotel_Bookings_J5
    WHERE CustomerId = @CustomerId;

    RETURN @TotalDays;
END;
GO

SELECT dbo.fn_CalculateTotalDays_J5(3);

-- Triggers 
GO
CREATE TRIGGER trg_CancelBooking_J5
ON Hotel_Bookings_J5
INSTEAD OF DELETE
AS 
BEGIN
	UPDATE Hotel_Rooms_J5
	SET Status = 'NotAvailable'
	WHERE RoomId = (SELECT RoomId FROM deleted);
	PRINT 'Booking Cancelled!';
END;
GO

DROP TRIGGER trg_CancelBooking_J5;

-- Full Text Search
SELECT * FROM Hotel_HotelBranch_J5
WHERE LocationDecription LIKE '%Beach%';

EXEC sp_help Hotel_HotelBranch_J5;

CREATE FULLTEXT INDEX ON Hotel_HotelBranch_J5(LocationDecription)
KEY INDEX PK__Hotel_Ho__A1682FC5A5F257EC;

SELECT * FROM Hotel_HotelBranch_J5
WHERE CONTAINS(LocationDecription, 'Beach');

-- Execute

SELECT * FROM Hotel_Bookings_J5;
SELECT * FROM Hotel_Rooms_J5;

DELETE 
FROM Hotel_Bookings_J5
WHERE BookingID = 2;