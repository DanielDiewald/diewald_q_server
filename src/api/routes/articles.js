import express from 'express';
import asyncHandler from 'express-async-handler';

import getAllArticles from '../controllers/articles.js';

const router = express.Router();

router.get('/', asyncHandler(getAllArticles));

export default router;
