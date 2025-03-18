import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../types/authRequest';

const secretKey = process.env.SECRET_KEY || 'jayesh';

export const authenticateUser = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authtoken =req.headers.authorization;
  if (!authtoken) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(authtoken, secretKey);
    req.user = decoded;
    next();
  } catch (error:any) {
    console.log(error);
    res.status(401).json({ error:error.message });
  }
};