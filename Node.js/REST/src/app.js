const express=require('express')
const userRoutes=require("../src/routes/userRoutes");
const app =express();
app.use(express.json());

app.use("/users",userRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})