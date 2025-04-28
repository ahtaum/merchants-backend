import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserById(userId: number) {
  return prisma.users.findUnique({
    where: { id: userId },
  });
}

export async function getAllUsers() {
  return prisma.users.findMany();
}

export async function createUser(username: string, email: string, password: string) {
  return prisma.users.create({
    data: {
      username,
      email,
      password,
    },
  });
}

export async function updateUser(userId: number, username?: string, email?: string, password?: string) {
  return prisma.users.update({
    where: { id: userId },
    data: {
      username: username ?? undefined,
      email: email ?? undefined,
      password: password ?? undefined,
    },
  });
}

export async function deleteUser(userId: number) {
  return prisma.users.delete({
    where: { id: userId },
  });
}
