import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';


dotenv.config({ path: '../.env' });

const app = express();

app.use(cors());

app.use(postRoutes);
app.use(userRoutes);

app.use(express.json());

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
};
start()