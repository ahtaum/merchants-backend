import { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService';

export async function showAllUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data pengguna', error });
  }
}

export async function showUserById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const user = await getUserById(Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data pengguna', error });
  }
}

export async function createNewUser(req: Request, res: Response) {
  const { username, email, password } = req.body;
  try {
    const newUser = await createUser(username, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat membuat pengguna baru', error });
  }
}

export async function updateUserData(req: Request, res: Response) {
  const { id } = req.params;
  const { username, email, password } = req.body;
  try {
    const updatedUser = await updateUser(Number(id), username, email, password);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui data pengguna', error });
  }
}

export async function deleteUserData(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await deleteUser(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pengguna', error });
  }
}
