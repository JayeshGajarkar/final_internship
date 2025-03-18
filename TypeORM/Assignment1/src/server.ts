import express from 'express';
import { dbconnect } from './config/db';
import recipeRouter from './routes/recipeRoutes';

const app = express();
app.use(express.json());

dbconnect();

app.use("/recipe", recipeRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});