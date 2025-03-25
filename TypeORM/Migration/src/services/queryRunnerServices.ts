import { profile } from "console";
import { queryRunner } from "../repositories/queryRunner";
import { User } from "../entities/user";

export class queryRunnerServices {
    static async createUser(){
        await queryRunner.connect();
        await queryRunner.startTransaction()

        try{
            const user={
                name:"jayesh",
                email:"jayesh@gmail.com",
                profile:{
                    "bio":"I am developer"
                },
            };

            await queryRunner.manager.createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute()
            await queryRunner.commitTransaction();
            console.log("User inserted suceffully")
        }catch(error:any){
            await queryRunner.rollbackTransaction();
        }finally{
            await queryRunner.release();
        }
    }
}



queryRunnerServices.createUser();