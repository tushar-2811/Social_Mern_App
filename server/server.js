import express from 'express';
import db from './config/mongoose.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import indexRouter from './routes/route_index.js';


const app = express();

// config dotenv
dotenv.config();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Routes
app.use('/' , indexRouter);














app.listen(PORT , (err) => {
    if(err){
        console.log("error in connecting to express server",err);
    }
    console.log(`The server is connected on port ${PORT}`);
})