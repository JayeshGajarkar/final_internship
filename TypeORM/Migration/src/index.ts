import express  from "express";
import { dbconnect } from "./config/db";
import registerRouter from "./routes/registerRoutes";
import studentRotuer from "./routes/studentRoutes";
import courseRouter from "./routes/courseRouter";

const app=express();
app.use(express.json());

dbconnect();

app.use("/",registerRouter);
app.use('/student',studentRotuer);
app.use('/course',courseRouter)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});




