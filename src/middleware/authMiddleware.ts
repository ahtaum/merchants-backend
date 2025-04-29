import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';

export interface AuthRequest extends Request {
  user?: { id: string; username: string; email: string };
}

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Token tidak ditemukan' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === 'string') {
      res.status(403).json({ message: 'Token tidak valid' });
      return;
    }

    req.user = decoded as AuthRequest['user'];
    next();
  } catch (err) {
    res.status(403).json({ message: 'Token tidak valid' });
  }
}
