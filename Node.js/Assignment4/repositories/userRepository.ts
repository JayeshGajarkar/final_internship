import {poolPromise} from '../config/db'
import sql from 'mssql'

class UserRepository {

  async getUserByEmail(email: string) {
    const pool:any = await poolPromise;
    const result = await pool
      .request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM users_2009 WHERE email = @email');
    return result.recordset[0];
  }

}

module.exports = new UserRepository();