-- Create the Employee_J table
CREATE TABLE Employee_J (
    id INT PRIMARY KEY,
    name NVARCHAR(50),
    salary DECIMAL(10, 2),
    city NVARCHAR(50)
);

-- Insert sample data into the Employee_J table
INSERT INTO Employee_J (id, name, salary, city) VALUES (20, 'Benjamin Wright', 75000.00, 'Los Angeles');
INSERT INTO Employee_J (id, name, salary, city) VALUES (1, 'John Doe', 50000.00, 'New York');
INSERT INTO Employee_J (id, name, salary, city) VALUES (2, 'Jane Smith', 60000.00, 'Los Angeles');
INSERT INTO Employee_J (id, name, salary, city) VALUES (3, 'Michael Johnson', 55000.00, 'Chicago');
INSERT INTO Employee_J (id, name, salary, city) VALUES (4, 'Emily Davis', 70000.00, 'Houston');
INSERT INTO Employee_J (id, name, salary, city) VALUES (5, 'David Brown', 65000.00, 'Phoenix');
INSERT INTO Employee_J (id, name, salary, city) VALUES (6, 'Sophia Wilson', 72000.00, 'Philadelphia');
INSERT INTO Employee_J (id, name, salary, city) VALUES (7, 'James Taylor', 58000.00, 'San Antonio');
INSERT INTO Employee_J (id, name, salary, city) VALUES (8, 'Olivia Martinez', 63000.00, 'San Diego');
INSERT INTO Employee_J (id, name, salary, city) VALUES (9, 'Liam Anderson', 54000.00, 'Dallas');
INSERT INTO Employee_J (id, name, salary, city) VALUES (10, 'Emma Thomas', 75000.00, 'San Jose');
INSERT INTO Employee_J (id, name, salary, city) VALUES (21, 'Jayesh Gajarkar', 71000.00, 'San Jose');
INSERT INTO Employee_J (id, name, salary, city) VALUES (11, 'Ava White', 68000.00, 'New York');
INSERT INTO Employee_J (id, name, salary, city) VALUES (12, 'Noah Harris', 62000.00, 'Los Angeles');
INSERT INTO Employee_J (id, name, salary, city) VALUES (13, 'Isabella Clark', 59000.00, 'Chicago');
INSERT INTO Employee_J (id, name, salary, city) VALUES (14, 'Mason Lewis', 71000.00, 'Houston');
INSERT INTO Employee_J (id, name, salary, city) VALUES (15, 'Mia Walker', 53000.00, 'New York');
INSERT INTO Employee_J (id, name, salary, city) VALUES (16, 'Lucas Hall', 56000.00, 'Los Angeles');
INSERT INTO Employee_J (id, name, salary, city) VALUES (17, 'Amelia Allen', 67000.00, 'Chicago');
INSERT INTO Employee_J (id, name, salary, city) VALUES (18, 'Ethan Young', 64000.00, 'Houston');
INSERT INTO Employee_J (id, name, salary, city) VALUES (19, 'Harper King', 60000.00, 'New York');

-- Select all records from the Employee_J table
SELECT * FROM Employee_J;



SELECT name, salary,city
FROM Employee_J WHERE salary IN(SELECT MAX(e.salary) FROM Employee_J e GROUP BY e.city);



SELECT e.city,MAX(e.salary) FROM Employee_J e GROUP BY e.city;

TRUNCATE TABLE Employee_J;


