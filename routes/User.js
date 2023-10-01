import express from 'express';
import { createUser, fetchAllUsers, fetchUserById, updateUser, deleteUser, updateAndReplaceUser } from '../controller/User.js'

const router = express.Router();

router.post('/', createUser)
    .get('/', fetchAllUsers)
    .get('/:id', fetchUserById)
    .put('/:id', updateAndReplaceUser)
    .patch('/:id', updateUser)
    .delete('/:id', deleteUser);

export default router;