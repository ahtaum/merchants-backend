import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'default_jwt_secret';

export async function registerUser(username: string, email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.users.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) return null;

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;

  const token = jwt.sign(
    { id: user.id, email: user.email, username: user.username },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
}
