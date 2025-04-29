import { Request, Response } from 'express';
import { createProduct, updateProduct, getAllProducts } from '../services/productService';

export const getAllProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ products });
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

export const createProductController = async (req: any, res: any) => {
  const { merchantId, name, location, price, colours, sizes } = req.body;

  if (!merchantId || !name || !location || !price || !Array.isArray(colours) || !Array.isArray(sizes)) {
    return res.status(400).json({ error: 'Input tidak lengkap atau format salah' });
  }

  try {
    const newProduct = await createProduct(merchantId, name, location, price, colours, sizes);
    res.status(201).json({ product: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

export const updateProductController = async (req: any, res: any) => {
  const { productId, name, price, colours, sizes } = req.body;

  if (!productId || !name || !price || !Array.isArray(colours) || !Array.isArray(sizes)) {
    return res.status(400).json({ error: 'Input tidak lengkap atau format salah' });
  }

  try {
    const updatedProduct = await updateProduct(productId, name, price, colours, sizes);
    res.status(200).json({ product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
};
