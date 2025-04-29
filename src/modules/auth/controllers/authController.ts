import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authService';

export async function register(req: Request, res: Response) {
  const { username, email, password } = req.body;

  try {
    const newUser = await registerUser(username, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Gagal register', error: err });
  }
}

export async function login(req: any, res: any) {
  const { email, password } = req.body;

  try {
    const result = await loginUser(email, password);
    if (!result) return res.status(401).json({ message: 'Email atau password salah' });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Gagal login', error: err });
  }
}
