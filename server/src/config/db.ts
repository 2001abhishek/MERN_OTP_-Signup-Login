import mongoose from 'mongoose';


// MongoDB connection URL (replace with your own URI)
const MONGO_URI = process.env.MONGO_URI || '';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      // You no longer need to pass 'useNewUrlParser' and 'useUnifiedTopology'
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

connectDB();
