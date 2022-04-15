import express from 'express';
import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(authMiddleware, getGoals)
  .post(authMiddleware, createGoal);
router
  .route('/:id')
  .put(authMiddleware, updateGoal)
  .delete(authMiddleware, deleteGoal);

export default router;
