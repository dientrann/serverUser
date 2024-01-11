import express from 'express';

import userModule from './modules/user.module.js'

const router = express.Router();

router.use('/users', userModule)

export default router;