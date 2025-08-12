kkimport express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import formRoutes from './routes/formRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Be careful with uploads on Vercel

// Routes
app.use('/api', formRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Connect to MongoDB once when the function is cold-started
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error(err));

// **Do not call app.listen() on Vercel serverless!**
// Instead, export the app for serverless handler:
export default app;

