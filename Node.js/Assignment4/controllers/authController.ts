import { Request, Response } from 'express';
import { AuthService } from '../services/authService';
import { libraryService } from '../services/libraryServices';

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await AuthService.loginUser(email, password);
      res.status(200).json({ message: 'Login successful', ...data });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) res.status(401).json({ error: error.message });
    }
  }

  static async viewBook(req:Request,res:Response){
    const id =parseInt(req.params.id);
    try{
      const book=await libraryService.viewBook(id);
      res.status(200).json(book.recordset);
    }catch (error) {
      console.log(error);
      if (error instanceof Error) res.status(401).json({ error: error.message });
    }
  }

  static async searchBook(req:Request,res:Response){
    const key =req.params.key;
    try{
      const book=await libraryService.searchBook(key);
      res.status(200).json(book.recordset);
    }catch (error) {
      console.log(error);
      if (error instanceof Error) res.status(401).json({ error: error.message });
    }
  }

  static async borrowBook(req:Request,res:Response){
    const id =parseInt(req.params.id);
    try{
      const book=await libraryService.borrowBook(id);
      res.status(200).json("Book Borrowed sucessfully");
    }catch (error) {
      console.log(error);
      if (error instanceof Error) res.status(401).json({ error: error.message });
    }
  }


  
}

