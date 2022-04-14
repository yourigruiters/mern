import asyncHandler from 'express-async-handler';
import GoalsModel from '../models/goalModel.js';

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await GoalsModel.find();

  res.status(200).json(goals);
});

// @desc    Create goals
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    // 400 - Bad request
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await GoalsModel.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await GoalsModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await GoalsModel.findByIdAndUpdate(
    req.params.id,
    {
      text: req.body.text,
    },
    {
      new: true,
    },
  );

  res.status(200).json(updatedGoal);
});

// @desc    Delete goals
// @route   Delete /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await GoalsModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

export { getGoals, createGoal, updateGoal, deleteGoal };
