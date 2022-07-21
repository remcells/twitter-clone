import { Router } from 'express';
import {
  addChika,
  deleteChika,
  getChika,
} from '../controllers/chika-controller.js';

const router = Router();

router.post('/', addChika);

router.get('/', getChika);

router.delete('/:id', deleteChika);

export default router;
