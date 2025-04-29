import { Router } from 'express';
import { createNewMerchant, getUserMerchants } from './controllers/merchantController';
import { authenticateToken } from '../../middleware/authMiddleware';

const router = Router();

// Protected routes
/**
 * @swagger
 * /merchants:
 *   post:
 *     summary: Membuat merchant baru untuk user yang login
 *     tags: [Merchant]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Berkah Jaya Batik
 *     responses:
 *       201:
 *         description: Merchant berhasil dibuat
 *       400:
 *         description: Gagal membuat merchant
 */
router.post('/', authenticateToken, createNewMerchant);

/**
 * @swagger
 * /merchants:
 *   get:
 *     summary: Mendapatkan daftar merchant milik user yang login
 *     tags: [Merchant]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar merchant berhasil diambil
 *       400:
 *         description: Gagal mengambil merchant
 */
router.get('/', authenticateToken, getUserMerchants);

export default router;
