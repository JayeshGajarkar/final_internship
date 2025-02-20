CREATE TABLE Bookings_J (
    BookingID INT IDENTITY(1,1) PRIMARY KEY,
    CustomerName VARCHAR(30),
    MovieName VARCHAR(30),
    SeatsBooked INT,
    TotalPrice DECIMAL(10, 2)
);


INSERT INTO Bookings_J (CustomerName, MovieName, SeatsBooked, TotalPrice) VALUES
('Amit Sharma', 'Inception', 2, 500.00),
('Priya Singh', 'The Dark Knight', 3, 750.00),
('Rajesh Kumar', 'Interstellar', 1, 250.00),
('Anita Desai', 'Dunkirk', 4, 1000.00),
('Vikram Patel', 'Tenet', 2, 500.00),
('Suresh Reddy', 'Memento', 1, 250.00),
('Neha Verma', 'The Prestige', 3, 750.00);


BEGIN TRANSACTION ;
SAVE TRANSACTION BeforeUpdate;


UPDATE Bookings_J
SET SeatsBooked=5,TotalPrice=1250.0
WHERE CustomerName='Priya Singh';

ROLLBACK TRANSACTION BeforeUpdate;

COMMIT;


SELECT * FROM Bookings_J;
