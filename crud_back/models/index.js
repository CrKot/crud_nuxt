import mongoose from 'mongoose';

const schema = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  }
};

export default mongoose.model('task', schema);
