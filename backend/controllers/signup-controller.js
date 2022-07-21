import User from '../models/User.js';

export const signup = async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;

  const user = new User({
    username,
    email,
    password,
    firstName,
    lastName,
  });
  try {
    await user.save(); // Let's try to save the user

    res.status(201).json({
      message: 'You are now part of the Chirp community! Yehey!',
    });
  } catch (error) {
    // Else, return a response that something happen
    // when trying we are trying to save the user
    res.status(400).json({
      error: 'Something went wrong on signup, please try again',
      message: error.message,
    });
  }
};
