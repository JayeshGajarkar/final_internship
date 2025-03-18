import { DataSource } from "typeorm";
import "reflect-metadata";
import { Recipe_J } from "../entities/recipe";
 
export const AppDataSource = new DataSource({
    type:'mssql',
    host:'dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com',
    port:1982,
    username:'j2',
    password:'123456',
    database:'JIBE_MAIN_TRAINING',
    synchronize:false,
    entities: [Recipe_J],
    options:{
        encrypt:true,
        trustServerCertificate:true
    }
})
 
 
export const dbconnect = async()=>{
    await AppDataSource.initialize()
    console.log("Database connected");
}