import express from 'express';
import asyncHandler from 'express-async-handler';

import getAllProducts from '../controllers/products.js';

const router = express.Router();

router.get('/', asyncHandler(getAllProducts));

export default router;
