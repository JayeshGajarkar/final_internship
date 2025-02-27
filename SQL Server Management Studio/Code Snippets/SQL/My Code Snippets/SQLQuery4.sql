CREATE TABLE Patients_J (
    PatientID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(30),
    Age INT,
    Disease VARCHAR(30),
    DoctorsAssigned VARCHAR(30)
);


INSERT INTO Patients_J(Name, Age, Disease, DoctorsAssigned) VALUES
('Ravi Kumar', 45, 'Diabetes', 'Dr. Mehta'),
('kartikeya Kumar', 50, 'Diabetes', 'Dr. Mehta'),
('Anita Sharma', 30, 'Hypertension', 'Dr. Rao'),
('Sunil Verma', 61, 'Asthma', 'Dr. Gupta'),
('Priya Singh', 25, 'Migraine', 'Dr. Patel'),
('Amit Joshi', 66, 'Arthritis', 'Dr. Desai'),
('Neha Kapoor', 35, 'Thyroid', 'Dr. Reddy'),
('Rajesh Khanna', 73, 'Cardiovascular Disease', 'Dr. Shah');

SELECT * FROM Patients_J AS P  WHERE P.Age>=60;

SELECT * FROM Patients_J AS P  WHERE P.DoctorsAssigned ='Dr. Desai';

SELECT P.Disease,COUNT(*)
FROM Patients_J AS P
GROUP BY P.Disease;



