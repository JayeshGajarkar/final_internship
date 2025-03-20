import { DataSource } from "typeorm";
import "reflect-metadata";
import { User} from "../entities/user";
import { Profile } from "../entities/profile";
import { Order } from "../entities/order";
import { Product } from "../entities/product";

 
export const AppDataSource = new DataSource({
    type:'mssql',
    host:'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port:1982,
    username:'j2',
    password:'123456',
    database:'JIBE_MAIN_TRAINING',
    synchronize:true,
    entities: [User,Profile,Order,Product],
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
})
 
 
export const dbconnect = async()=>{
    await AppDataSource.initialize()
    console.log("Database connected");
}