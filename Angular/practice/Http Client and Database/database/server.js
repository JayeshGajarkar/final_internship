var express = require("express")
var cors = require('cors')
var db = require("./sqlitedb.js")

var app = express()
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000 
app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});


app.get('/users', (req, res, next) => {
    var query='SELECT * FROM USER';
    var params=[];
    console.log("Hello");

    db.all(query,params,(err,rows)=>{
        if(err){
            res.status(400).json({"error":err.message});
            return;
        }

        res.json(rows);
    });
});

app.get('/user/:id', (req, res, next) => {
    var query = 'SELECT * FROM USER WHERE id = ?';
    var params = [req.params.id];
    db.get(query, params, (err, user) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            user
        });
    });
});

app.post('/users', (req, res, next) => {
    console.log("Hello Post");
    var data = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password : req.body.password
    }
    var query = 'INSERT INTO USER (id,name, email, password) VALUES (?,?,?,?)'
    var params = [data.id,data.name, data.email, data.password]
    db.run(query, params,(err, result)=> {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }

        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});

app.put('/user/:id', (req, res, next) => {
    var data = {
        name: req.body.name,
        email: req.body.email,
        password : req.body.password
    }
    db.run(
        `UPDATE USER set 
           name = ?, 
           email = ?, 
           password = ?
           WHERE id = ?`,
        [data.name, data.email, data.password, req.params.id],
        (err, result)=> {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
});


app.delete("/user/:id", (req, res, next) => {
    db.run(
        'DELETE FROM USER WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
});
