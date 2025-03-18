import express from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoute';

const app = express();
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

export default app;