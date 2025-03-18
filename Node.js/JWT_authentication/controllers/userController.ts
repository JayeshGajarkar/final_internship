import { Request, Response } from 'express';
const authService = require('../services/authService');

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users= await authService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      if (error instanceof Error) res.status(500).json({ error: error.message });
    }
  }
}

