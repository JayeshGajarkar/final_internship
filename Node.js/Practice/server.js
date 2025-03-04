const express=require('express');
const {sql,poolPromise}=require("./databse")
const app=express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World!");
})

app.get('/jayesh',(req,res)=>{
    res.send("Hello Jayesh");
})



app.get('/student',async (req,res)=>{
    try{
        const pool=await poolPromise;
        const result=await pool.request().query("SELECT * FROM student_1");
        res.json(result.recordset);
    }catch(err){
        console.log("Error",err);
    }
})

app.post("/student",async (req,res)=>{
    try{
        const {roll,name}=req.body;
        const pool= await poolPromise;
        await pool.request().input("roll",sql.Int,roll).input("name",sql.NVarChar,name)
            .query("INSERT INTO student_1 (roll,name) VALUES(@roll,@name)");
        res.send("Data added sucessfully");
    }catch(err){
        console.log("Error",err);
        res.status(500).send(err);
    }
})


app.put("/student/:roll",async(req,res)=>{
    try{
     const roll=parseInt(req.params.roll);
     console.log(req.params.roll);
     const {name}=req.body;
     const pool=await poolPromise;
     await pool.request().input("roll",sql.Int,roll).input("name",sql.NVarChar,name)
     .query("UPDATE student_1 SET name=(@name) WHERE roll=(@roll)");
     res.send("Data updated sucessfully");
    }catch(err){
        console.log("Error",err);
        res.status(500).send(err);
    } 
})

app.listen(3000,()=>{
    console.log("Runing on port 3000");
});