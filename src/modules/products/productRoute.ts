import { Router } from 'express';
import {
  createProductController,
  getAllProductsController,
  updateProductController
} from './controllers/productController';
import { authenticateToken } from '../../middleware/authMiddleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Manajemen produk dan variasi
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Ambil semua produk beserta variasinya
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar produk berhasil diambil
 *       401:
 *         description: Unauthorized
 */
router.get('/', authenticateToken, getAllProductsController);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Tambah produk baru beserta variasinya
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - merchantId
 *               - name
 *               - location
 *               - price
 *               - colours
 *               - sizes
 *             properties:
 *               merchantId:
 *                 type: string
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               price:
 *                 type: number
 *               colours:
 *                 type: array
 *                 items:
 *                   type: string
 *               sizes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Produk berhasil dibuat
 *       400:
 *         description: Permintaan tidak valid
 *       401:
 *         description: Unauthorized
 */
router.post('/', authenticateToken, createProductController);

/**
 * @swagger
 * /products:
 *   put:
 *     summary: Update produk dan variasinya
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productId
 *               - name
 *               - price
 *               - colours
 *               - sizes
 *             properties:
 *               productId:
 *                 type: number
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               colours:
 *                 type: array
 *                 items:
 *                   type: string
 *               sizes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Produk berhasil diperbarui
 *       400:
 *         description: Permintaan tidak valid
 *       401:
 *         description: Unauthorized
 */
router.put('/', authenticateToken, updateProductController);

export default router;
