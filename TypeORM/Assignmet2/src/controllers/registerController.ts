import { RegisterService } from "../services/registerServices";
import { Response, Request } from "express";

export class RegisterController {
    static async registerUser(req: any, res: any) {
        try {
            const { name, email, bio } = req.body;
             await RegisterService.registerUser(name, email, bio);
            res.status(201).send("User registered successfully");
        } catch (err) {
            console.log(err);
            res.send({ "error": err });
        }
    }

    static async deleteUser(req:Request,res:Response){ {
        const id = parseInt(req.params.id);
        try {
            await RegisterService.deleteUser(id);
            res.status(200).send("User deleted successfully");
        } catch (err) {
            console.log(err);
            res.send({ "error": err });
        }
    }
}
}