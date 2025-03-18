import { AppDataSource, dbconnect } from "./config/db";
import { User_J } from "./models/user.model";

dbconnect();

const userRepository=AppDataSource.getRepository(User_J);

const user1=userRepository.create({
    name:'John',
    age:25
});


userRepository.save(user1);