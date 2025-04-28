import { Router } from "express";
import { showAllUsers, showUserById, createNewUser, updateUserData, deleteUserData } from "./controllers/userController";

const router = Router();

router.get('/', showAllUsers);
router.get('/:id', showUserById);
router.post('/add', createNewUser);
router.patch('/update/:id', updateUserData);
router.delete('/delete/:id', deleteUserData);

export default router;