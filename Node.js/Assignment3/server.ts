import express from "express";
import employeeRoutes from "./routes/employee.routes"
const app=express();
app.use(express.json());


app.use("/",employeeRoutes)


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})