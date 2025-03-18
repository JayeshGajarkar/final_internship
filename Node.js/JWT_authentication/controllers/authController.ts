import { Request, Response } from 'express';
const authService = require('../services/authService');

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      await authService.registerUser(name, email, password);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
      if (error instanceof Error) res.status(500).json({ error: error.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await authService.loginUser(email, password);
      res.status(200).json({ message: 'Login successful', ...data });
    } catch (error) {
        console.log(error);
      if (error instanceof Error) res.status(401).json({ error: error.message });
    }
  }
}

