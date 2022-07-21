import { Router } from 'express';
import { userList } from '../controllers/user-controller.js';

const router = Router();

router.get('/', userList);

export default router;
