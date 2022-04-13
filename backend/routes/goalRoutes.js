import express from 'express';
import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';

const router = express.Router();

router.route('/').get(getGoals).post(createGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

// router.get('/', getGoals);

// router.post('/', createGoal);

// router.put('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

export default router;
