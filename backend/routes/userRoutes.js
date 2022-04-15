import express from 'express';
import {
  registerUser,
  loginUser,
  getMe,
} from '../controllers/userController.js';
import authHandler from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', authHandler, getMe);

export default router;
