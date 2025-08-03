import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';


dotenv.config();

const app = express();

app.use(cors());

app.use(postRoutes);
app.use(userRoutes);

app.use(express.json());

const start = async () => {
    const connectDB = await mongoose.connect("mongodb+srv://nirupampal14:Y4uwgh81xbMF52Ui@linkedinclone.6licd8c.mongodb.net/?retryWrites=true&w=majority&appName=linkedInclone")

    app.listen(9080, ()=>{
        console.log("Server is running on port 9080");
    })
}
start()