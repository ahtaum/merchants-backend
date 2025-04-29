import bcrypt from 'bcrypt';
import crypto from 'crypto';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    username: string,
    email: string,
    password: string,
    created_at: Date,
    updated_at: Date
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static async create(
    id: number,
    username: string,
    email: string,
    password?: string,
    created_at = new Date(),
    updated_at = new Date()
  ): Promise<User> {
    const rawPassword = password ?? User.generateRandomPassword();
    const hashedPassword = await bcrypt.hash(rawPassword, 10);

    return new User(id, username, email, hashedPassword, created_at, updated_at);
  }

  static generateRandomPassword(length: number = 12): string {
    return crypto.randomBytes(length).toString('base64').slice(0, length);
  }

  updatePassword(newPassword: string): void {
    this.password = newPassword;
  }
}
