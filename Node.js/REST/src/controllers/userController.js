const userService=require('../services/userService');

class UserController{
    async getAllUsers(req,res){
        try{
            const users=await userService.getAllUsers();
            res.json(users);
        }catch(err){
            console.log(err);
            res.status(500).json({error:err.message})
        }
    }

    async getUser(req,res){
        const id=req.params.id;
        try{
            const user=await userService.getUser(id); 
            res.json(user);
        }catch(err){
            console.log(err);
            res.status(500).json({error:err.message});
        }
    }
}

module.exports=new UserController();