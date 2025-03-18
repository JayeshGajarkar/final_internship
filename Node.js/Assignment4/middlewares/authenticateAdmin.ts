import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../types/authRequest';

const secretKey = process.env.SECRET_KEY || 'jayesh';

export const authenticateAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authtoken =req.headers.authorization;
  if (!authtoken) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  try {
    const decoded:any = jwt.verify(authtoken, secretKey);
    if(decoded.role!="admin") throw new Error('You are not admin to acess this');
    console.log(decoded);
    next();
  } catch (error:any) {
    console.log(error);
    res.status(401).json({ error:error.message });
  }
};