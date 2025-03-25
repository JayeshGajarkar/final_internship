import express  from "express";
import { dbconnect } from "./config/db";
import queryRouter from "./routes/queryRoutes";



const app=express();
app.use(express.json());

dbconnect();

app.use("/query",queryRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});




