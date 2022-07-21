import User from '../models/User.js';

const resolveUserMiddleware = async (req, res, next) => {
  // PSEUDOCODE:
  // IF `x-user-id` exists in req.headers
  // THEN Find that ID from database
  // THEN add it in req.user
  // ELSE, response a Unauthorize 401

  if (!req.headers.hasOwnProperty('x-user-id')) {
    return res.status(401).json({
      error: 'Header is required',
    });
  }

  const user = await User.findById(req.headers['x-user-id']);

  if (user === null) {
    return res.status(401).json({
      error: 'Invalid user ID',
    });
  }

  req.user = user;

  next(); // this is needed so req.user will pass to the next middleware
};

export default resolveUserMiddleware;
