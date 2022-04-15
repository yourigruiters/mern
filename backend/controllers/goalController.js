import asyncHandler from 'express-async-handler';
import GoalModel from '../models/goalModel.js';
import UserModel from '../models/userModel.js';

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find({ user: req.user.id });

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

  const goal = await GoalModel.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await GoalModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const user = await UserModel.findById(req.user.id);

  // Check for user
  if (!user) {
    // Not autorized
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedGoal = await GoalModel.findByIdAndUpdate(
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
  const goal = await GoalModel.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  const user = await UserModel.findById(req.user.id);

  // Check for user
  if (!user) {
    // Not autorized
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

export { getGoals, createGoal, updateGoal, deleteGoal };
