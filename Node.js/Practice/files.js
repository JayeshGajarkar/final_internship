const { error } = require('console');
const fs =require('fs');
const multer=require('multer');
const path=require('path');
const express=require('express');
const app=express();


// fs.writeFile("example.txt","Hello from...",(err)=>{
//     if(err){
//         console.log(err);
//     }

//     console.log("Data added");
// })

// fs.appendFile("example.txt","...jayesh",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Data appended sucessfully")
// })


// fs.truncate("example.txt",5,(err)=>{
//     if(err){
//         console.log(err)
//     }
// });


const storage = multer.diskStorage({
    destination: "Uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload=multer({storage:storage});

app.post("/upload",upload.single('file'),(req,res)=>{
    if(!req.file){
        return res.status(400).send("No file uploaded");
    }

    res.send("file uploaded sucessfully");
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})