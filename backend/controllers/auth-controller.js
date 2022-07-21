import User from '../models/User.js';

export const login = async (req, res) => {
  const { email_address, password } = req.body;

  try {
    const user = await User.findOne({ email: email_address });

    if (user === null) {
      return res.status(401).json({
        error: 'Credentials does not exists',
      });
    }
    if (password !== user.password) {
      return res.status(401).json({
        error: 'Invalid email/password',
      });
    }

    return res.status(200).json({
      message: 'You are now logged in',
      user: { id: user._id },
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Something went wrong during login, please try again!',
      message: err?.message,
    });
  }
};
