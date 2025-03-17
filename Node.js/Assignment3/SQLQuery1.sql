CREATE TABLE Employee_J2 (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role VARCHAR(30) CHECK (role IN ('employee', 'manager', 'admin'))
);


CREATE TABLE Leave_J2 (
    id INT PRIMARY KEY,
    employee_id INT,
    start_date DATE,
    end_date DATE,
    leave_type VARCHAR(10),
    status VARCHAR(10),
    reason VARCHAR(255),
);


SELECT * FROM Leave_J2;
SELECT * FROM Employee_J2;



INSERT INTO Employee_J2 (id, name, email, role) VALUES
(1, 'John Doe', 'john.doe@example.com', 'employee'),
(2, 'Jane Smith', 'jane.smith@example.com', 'manager'),
(3, 'Alice Johnson', 'alice.johnson@example.com', 'admin'),
(4, 'Bob Brown', 'bob.brown@example.com', 'employee');


INSERT INTO Leave_J2 (id, employee_id, start_date, end_date, leave_type, status, reason) VALUES
(1, 1, '2025-03-10', '2025-03-15', 'Vacation', 'Pending', 'Family vacation'),
(2, 2, '2025-04-01', '2025-04-05', 'Sick', 'Approved', 'Medical leave'),
(3, 3, '2025-05-20', '2025-05-25', 'Vacation', 'Rejected', 'Personal reasons'),
(4, 4, '2025-06-10', '2025-06-12', 'Sick', 'Pending', 'Flu');