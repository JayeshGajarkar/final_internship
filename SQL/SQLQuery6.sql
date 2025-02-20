CREATE TABLE BankAccounts_J (
    AccountsID INT IDENTITY(1,1) PRIMARY KEY,
    CustomerName VARCHAR(30),
    AccountType VARCHAR(30),
    Balance DECIMAL(10, 2)
);


INSERT INTO BankAccounts_J (CustomerName, AccountType, Balance) VALUES
('Alice Johnson', 'Savings', 10500.00),
('Bob Smith', 'Checking', 22500.50),
('Charlie Brown', 'Savings', 13200.75),
('Diana Prince', 'Checking', 4500.00),
('Eve Adams', 'Savings', 15000.25);


BEGIN TRANSACTION 

DECLARE @Balance DECIMAL(10,2);

SELECT @Balance=Balance FROM BankAccounts_J WHERE CustomerName='Eve Adams' AND AccountType='Savings';

IF(@Balance<5000)
BEGIN
	PRINT 'Insufficient balance'
	ROLLBACK TRANSACTION
END

ELSE 
BEGIN
	UPDATE BankAccounts_J
	SET Balance=Balance-5000
	WHERE CustomerName='Eve Adams' AND AccountType='Savings';
	COMMIT TRANSACTION;
	PRINT 'Transaction Sucessful'
END

SELECT * FROM BankAccounts_J;
