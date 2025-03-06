const userController =require("../controllers/userController")


const express=require('express');

const router=express.Router();

router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUser);


module.exports=router;