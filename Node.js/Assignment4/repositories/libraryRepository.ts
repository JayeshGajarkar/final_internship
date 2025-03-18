import {poolPromise} from "../config/db"
import sql from 'mssql'

export class libraryRepository{

    static async addBook(title: string, author: string, email: string) {
    try {
      const pool:any = await poolPromise;
      await pool.request()
        .input('title', sql.NVarChar, title)
        .input('author', sql.NVarChar, author)
        .input('email', sql.NVarChar, null)
        .query('INSERT INTO book2009 (title, author, userEmail) VALUES (@title, @author, @email)');
    } catch (error) {
      console.error('Error adding book:', error);
      throw new Error('Error adding book');
    }
  }

  static async updateBook(title: string, author: string, email: string, id: number) {
    try {
      const pool:any = await poolPromise;
      await pool.request()
        .input('title', sql.NVarChar, title)
        .input('author', sql.NVarChar, author)
        .input('email', sql.NVarChar, null)
        .input('id', sql.Int, id)
        .query('UPDATE book2009 SET title = @title, author = @author, userEmail = @email WHERE id = @id');
    } catch (error) {
      console.error('Error updating book:', error);
      throw new Error('Error updating book');
    }
  }

  static async removeBook(id: number) {
    try {
      const pool:any = await poolPromise;
      await pool.request()
        .input('id', sql.Int, id)
        .query('DELETE FROM book2009 WHERE id = @id');
    } catch (error) {
      console.error('Error removing book:', error);
      throw new Error('Error removing book');
    }
  }


  static async viewBook(id:number){
    try {
      const pool:any = await poolPromise;
      return await pool.request()
        .input('id', sql.Int, id)
        .query('SELECT * FROM book2009 WHERE id = @id;');
    } catch (error) {
      console.error('Error in getting  book:', error);
      throw new Error('Error in getting  book:');
    }
  }

  static async searchBook(key:string){
    try {
      const pool:any = await poolPromise;
      return await pool.request()
        .input('key', sql.NVarChar, key)
        .query(`SELECT * FROM book2009 WHERE title LIKE '%${key}%';`);
    } catch (error) {
      console.error('Error in getting  book:', error);
      throw new Error('Error in getting  book:');
    }
  }

  static async borrowBook(id:number){
    try {
      const pool:any = await poolPromise;
      const result=await pool.request()
        .input('id', sql.Int, id)
        .query('SELECT * FROM book2009 WHERE id = @id;');
      console.log(result.recordset);
    } catch (error) {
      console.error('Error in getting  book:', error);
      throw new Error('Error in getting  book:');
    }
  }
}