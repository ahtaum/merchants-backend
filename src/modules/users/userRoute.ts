import { Router } from "express";
import { showAllUsers, showUserById, createNewUser, updateUserData, deleteUserData } from "./controllers/userController";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Ambil semua pengguna
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List semua pengguna
 */
router.get('/', showAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Ambil pengguna berdasarkan ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data pengguna ditemukan
 *       404:
 *         description: Pengguna tidak ditemukan
 */
router.get('/:id', showUserById);

/**
 * @swagger
 * /users/add:
 *   post:
 *     summary: Tambah pengguna baru
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pengguna berhasil dibuat
 */
router.post('/add', createNewUser);

/**
 * @swagger
 * /users/update/{id}:
 *   patch:
 *     summary: Update pengguna berdasarkan ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data pengguna berhasil diupdate
 */
router.patch('/update/:id', updateUserData);


/**
 * @swagger
 * /users/delete/{id}:
 *   delete:
 *     summary: Hapus pengguna berdasarkan ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Data pengguna berhasil dihapus
 */
router.delete('/delete/:id', deleteUserData);

export default router;