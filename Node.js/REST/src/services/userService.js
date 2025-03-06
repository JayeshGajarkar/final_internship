const userRepositories = require("../repositories/userRepositories");

class UserService{
    async getAllUsers(){
        return await userRepositories.getAllUsers();
    }

    async getUser(id){
        return await userRepositories.getUser(id);
    }
}

module.exports=new UserService();