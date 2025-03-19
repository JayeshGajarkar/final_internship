import { RegisterService } from "../services/registerServices";

export class RegisterController{
    static async registerUser(req:any,res:any){
        try{
            const {name,email,bio}=req.body;
            const user=await RegisterService.registerUser(name,email,bio);
            res.status(201).json(user);
        }catch(err){
            console.log(err);
            res.send({"error":err});
        }
    }
}