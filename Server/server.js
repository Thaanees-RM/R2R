import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from './routes/formRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// NOTE: Vercel filesystem is read-only — avoid saving files locally.
// Commenting out static serving of uploads folder if you don't have persistent storage.
// app.use('/uploads', express.static('uploads')); 

// Routes
app.use('/api', formRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Connect to MongoDB once at cold start
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Export app for serverless
export default app;
