import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import corsOptions from './src/cors/cors.config.js';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import path from 'path';
import errorMiddleware from './src/middlewares/error-middleware.js';
import {authRouter, userRouter, dealRouter, realtyRouter, serviceRouter, reviewRouter} from './src/routes/index.js';

const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api', authRouter, userRouter, dealRouter, realtyRouter, serviceRouter, reviewRouter);
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server listens http://${HOST}:${PORT}/`);
});