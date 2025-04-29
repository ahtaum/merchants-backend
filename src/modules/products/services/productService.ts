import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProduct(merchantId: string, name: string, location: string, price: number, colours: string[], sizes: string[]) {
  const merchantIdNumber = parseInt(merchantId, 10);

  if (isNaN(merchantIdNumber)) {
    throw new Error('merchantId harus berupa angka');
  }

  const product = await prisma.products.create({
    data: {
      name,
      location,
      price,
      id_merchant: merchantIdNumber,
    },
  });

  const colourIds = await Promise.all(
    colours.map(async (colour) => {
      return await prisma.product_colours.create({
        data: { name: colour, id_product: product.id },
      });
    })
  );

  const sizeIds = await Promise.all(
    sizes.map(async (size) => {
      return await prisma.product_sizes.create({
        data: { name: size, id_product: product.id },
      });
    })
  );

  for (let colour of colourIds) {
    for (let size of sizeIds) {
      await prisma.product_variants.create({
        data: {
          id_product: product.id,
          id_product_colour: colour.id,
          id_product_size: size.id,
        },
      });
    }
  }

  return product;
}

export async function getAllProducts() {
  return prisma.products.findMany({
    include: {
      colours: true,
      sizes: true,
      variants: true,
    },
  });
}
  
export async function updateProduct(productId: number, name: string, price: number, colours: string[], sizes: string[]) {
  const updatedProduct = await prisma.products.update({
    where: { id: productId },
    data: {
      name,
      price,
    },
  });

  await prisma.product_colours.deleteMany({ where: { id_product: productId } });
  await prisma.product_sizes.deleteMany({ where: { id_product: productId } });

  const colourIds = await Promise.all(
    colours.map(async (colour) => {
      return await prisma.product_colours.create({
        data: { name: colour, id_product: productId },
      });
    })
  );

  const sizeIds = await Promise.all(
    sizes.map(async (size) => {
      return await prisma.product_sizes.create({
        data: { name: size, id_product: productId },
      });
    })
  );

  await prisma.product_variants.deleteMany({ where: { id_product: productId } });

  for (let colour of colourIds) {
    for (let size of sizeIds) {
      await prisma.product_variants.create({
        data: {
          id_product: productId,
          id_product_colour: colour.id,
          id_product_size: size.id,
        },
      });
    }
  }

  return updatedProduct;
}