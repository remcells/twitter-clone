import mongoose from 'mongoose';

const { model } = mongoose;

// Normally, each field have their own options
// For now, we accept String
const option = {
  type: String,
  required: true,
};
const optionUnique = {
  ...option,
  unique: true,
};

export default model('User', {
  username: optionUnique,
  email: optionUnique,
  password: option,
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});
