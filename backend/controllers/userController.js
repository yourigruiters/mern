import asyncHandler from 'express-async-handler';
import GoalsModel from '../models/goalModel.js';

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const goals = await GoalsModel.find();

  res.status(200).json(goals);
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const goals = await GoalsModel.find();

  res.status(200).json(goals);
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const goals = await GoalsModel.find();

  res.status(200).json(goals);
});

export { registerUser, loginUser, getMe };
