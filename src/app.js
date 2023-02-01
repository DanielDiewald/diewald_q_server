import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { errorHandler, notFoundHandler } from '../middleware/errorHandler.js';
import articlesRoute from './api/routes/articles.js';
import productsRoute from './api/routes/products.js';

dotenv.config();

const dirname = path.resolve();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(express.static(path.join(dirname, '/public')));

app.use(express.json());

app.use('/articles', articlesRoute);
app.use('/products', productsRoute);

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running'));
