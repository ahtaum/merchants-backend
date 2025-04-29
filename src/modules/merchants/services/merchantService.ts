import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createMerchant(userId: string, name: string) {
    return prisma.merchants.create({
        data: {
            name,
            id_user: parseInt(userId),
        },
    });
}

export async function getMerchantsByUser(userId: string) {
    return prisma.merchants.findMany({
        where: { id_user: parseInt(userId) },
            include: {
                products: true,
            },
    });
}