import express from 'express';
const app=express();
app.use(express.json());

import { Request,Response } from 'express';

import jwt from 'jsonwebtoken';

const secretKey="jyeshgajarkar";


app.post('/user/generateToken',(req:Request,res:Response)=>{
    const data=req.body;
    const token=jwt.sign(data,secretKey);
    res.send(token);
})

app.get("/user/validToken",(req:Request,res:Response)=>{
    
    const token = req.headers['authorization']?.split(' ')[1];
   

    if (!token) {
      res.status(403).json('A token is required for authentication');
    }
  
    try {
      const decoded = jwt.verify(token!, secretKey);
      console.log(decoded);
      res.json("validate token !")
    } catch (err) {
        console.log(err);
        
      res.status(401).json('Invalid Token');
    }


});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

