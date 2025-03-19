import { DataSource } from "typeorm";
import "reflect-metadata";
import { User_J3} from "../entities/user";
import { Profile_J3 } from "../entities/profile";
 
export const AppDataSource = new DataSource({
    type:'mssql',
    host:'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port:1982,
    username:'j2',
    password:'123456',
    database:'JIBE_MAIN_TRAINING',
    synchronize:false,
    entities: [User_J3,Profile_J3],
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
})
 
 
export const dbconnect = async()=>{
    await AppDataSource.initialize()
    console.log("Database connected");
}