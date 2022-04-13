import asyncHandler from 'express-async-handler';

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
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

  res.status(200).json({ message: `Create goal` });
});

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update goal with id ${req.params.id}` });
});

// @desc    Delete goals
// @route   Delete /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Deleted goal with id ${req.params.id}` });
});

export { getGoals, createGoal, updateGoal, deleteGoal };
