CREATE TABLE Orders_J2(
	OrderID int PRIMARY KEY,
	CustomerName varchar(30),
	ProductName varchar(30),
	Quantity  varchar(30),
	Price decimal,
	OrderDate Date,
);

INSERT INTO Orders_J2 (OrderID, CustomerName, ProductName, Quantity, Price, OrderDate) VALUES
(1, 'Amit Sharma', 'Laptop', '2', 50000.00, '2025-01-15'),
(2, 'Priya Singh', 'Smartphone', '1', 30000.00, '2025-01-20'),
(3, 'Rajesh Kumar', 'Tablet', '3', 15000.00, '2025-01-25'),
(4, 'Anita Desai', 'Monitor', '2', 10000.00, '2025-01-30'),
(5, 'Vikram Patel', 'Keyboard', '5', 2000.00, '2025-02-05'),
(6, 'Suresh Reddy', 'Mouse', '4', 1500.00, '2025-02-10'),
(7, 'Neha Verma', 'Printer', '1', 8000.00, '2025-02-15'),
(8, 'Ravi Gupta', 'Scanner', '1', 7000.00, '2025-02-20'),
(9, 'Kiran Rao', 'Webcam', '3', 2500.00, '2025-02-25'),
(10, 'Sunita Joshi', 'Headphones', '2', 3000.00, '2025-03-01');


SELECT * FROM Orders_J2;

UPDATE Orders_J2
set Quantity='5' WHERE CustomerName='Amit Sharma';