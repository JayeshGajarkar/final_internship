import express from 'express';
import adminRouter from './routes/adminRoutes';
import authRouter from './routes/authRoute';


const app = express();
app.use(express.json());


app.use('/admin',adminRouter)
app.use('/user',authRouter)

export default app;