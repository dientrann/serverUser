import express from 'express';

import userController from '../../controllers/user.controller.js'

const router = express.Router();

router.get('/', userController.getAll)

router.post('/create', userController.create)

router.patch('/update/:id', userController.update)

router.delete('/delete/:id', userController.delete)

export default router;