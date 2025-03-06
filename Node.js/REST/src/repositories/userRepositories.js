const {poolPromise}=require("../config/database")

class UserRepository {
    async getAllUsers(){
        const pool =await poolPromise;
        const result=await pool.request().query("SELECT * FROM User_J");
        return result.recordset;
    }

    async getUser(id){
        const pool =await poolPromise;
        const result=await pool.request().query(`SELECT * FROM User_J WHERE id=${id}`);
        return result.recordset;
    }
}

module.exports=new UserRepository();