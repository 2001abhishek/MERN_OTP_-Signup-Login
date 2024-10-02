import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

// Fetch Mongo URI and port from .env file
const mongoUri = process.env.MONGO_URI || '';
const port = process.env.PORT || 5000;

mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => console.log(err));
