-- Create the Customers_J table
CREATE TABLE Customers_J (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(30) NOT NULL
);

-- Create the Books_J table
CREATE TABLE Books_J (
    BookID INT PRIMARY KEY,
    BookTitle VARCHAR(30) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL
);

-- Create the Orders_J table
CREATE TABLE Orders_J1 (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    BookID INT,
    OrderDate DATE NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES Customers_J(CustomerID),
    FOREIGN KEY (BookID) REFERENCES Books_J(BookID)
);

-- Insert sample data into the Customers_J table
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (3, 'Charlie Brown');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (1, 'Alice Johnson');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (5, 'Ethan Hunt');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (2, 'Bob Smith');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (4, 'Diana Prince');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (7, 'George Clooney');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (6, 'Fiona Gallagher');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (9, 'Ian Somerhalder');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (8, 'Hannah Montana');
INSERT INTO Customers_J (CustomerID, CustomerName) VALUES (10, 'Jack Sparrow');

-- Insert sample data into the Books_J table
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (4, 'Pride and Prejudice', 9.99, 120);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (1, 'The Great Gatsby', 10.99, 100);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (3, 'To Kill a Mockingbird', 12.99, 200);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (2, '1984', 8.99, 150);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (5, 'The Catcher in the Rye', 11.99, 80);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (7, 'Moby Dick', 13.99, 90);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (6, 'The Hobbit', 14.99, 60);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (9, 'The Odyssey', 15.99, 70);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (8, 'War and Peace', 19.99, 50);
INSERT INTO Books_J (BookID, BookTitle, Price, Stock) VALUES (10, 'Hamlet', 7.99, 110);

-- Insert sample data into the Orders_J table
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (5, 5, 5, '2025-01-05', 2);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (1, 1, 1, '2025-01-01', 2);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (3, 3, 3, '2025-01-03', 3);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (2, 2, 2, '2025-01-02', 1);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (4, 4, 4, '2025-01-04', 1);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (7, 7, 7, '2025-01-07', 4);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (6, 6, 6, '2025-01-06', 1);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (9, 9, 9, '2025-01-09', 2);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (8, 8, 8, '2025-01-08', 1);
INSERT INTO Orders_J1 (OrderID, CustomerID, BookID, OrderDate, Quantity) VALUES (10, 10, 10, '2025-01-10', 1);

-- Select all data from the tables
SELECT * FROM Customers_J;
SELECT * FROM Books_J;
SELECT * FROM Orders_J1;



-- Select distinct customer names who have placed orders
SELECT DISTINCT CustomerName 
FROM Customers_J 
WHERE CustomerID IN (SELECT CustomerID FROM Orders_J1);

-- Select book titles that have not been ordered
SELECT BookTitle 
FROM Books_J 
WHERE BookID NOT IN (SELECT DISTINCT BookID FROM Orders_J1);

-- Select book titles where stock is zero
SELECT BookTitle 
FROM Books_J 
WHERE Stock = 0;

-- Corrected query to select the book with the highest price
SELECT BookTitle, Price 
FROM Books_J 
WHERE Price = (SELECT MAX(Price) FROM Books_J);
