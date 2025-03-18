import {poolPromise} from '../config/db'
import sql from 'mssql'

class UserRepository {
  async createUser(name: string, email: string, password: string) {
    const pool:any = await poolPromise;
    const result = await pool
      .request()
      .input('name', sql.VarChar, name)
      .input('email', sql.VarChar, email)
      .input('password', sql.VarChar, password)
      .query('INSERT INTO Users (name, email, password) VALUES (@name, @email, @password)');
    return result;
  }

  async getUserByEmail(email: string) {
    const pool:any = await poolPromise;
    const result = await pool
      .request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM Users WHERE email = @email');
    return result.recordset[0];
  }

  async getAllUsers(){
    const pool:any = await poolPromise;
    const result = await pool
      .request()
      .query('SELECT * FROM Users');
    return result.recordset;
  }
}

module.exports = new UserRepository();