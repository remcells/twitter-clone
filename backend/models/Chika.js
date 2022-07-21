import mongoose from 'mongoose';
import User from './User.js';

const { model, Schema } = mongoose;

export default model(
  'Chika',
  {
    content: {
      type: String,
    },
    date: {
      type: Date,
      default: () => Date.now(),
    },
  }

  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: User,
  // },
);
