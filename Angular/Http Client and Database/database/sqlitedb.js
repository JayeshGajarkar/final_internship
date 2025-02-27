var sqlite3 = require('sqlite3').verbose();
var DBSOURCE = "mydb.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
        throw err;
    } else {
        console.log("Database created successfully");
    }
});

db.run(`CREATE TABLE IF NOT EXISTS USER (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
)`, (err) => {
    if (err) {
        console.error("Table creation error:", err.message);
    } else {
        console.log('Table created successfully');
        var query = 'INSERT INTO USER (id,name, email, password) VALUES (?,?, ?, ?)';
        db.run(query, [1,'jayesh', 'jayeshgajarkar@gmail.com', 'jayesh123'], (err) => {
            if (err) {
                console.error("Data insertion error:", err.message);
            } else {
                console.log('Data inserted successfully');
            }
        });
    }
});


module.exports = db;