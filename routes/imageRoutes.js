import express from 'express';
const router = express.Router();
import { upload } from '../middleware/upload.js'
import { processImage } from '../controllers/imageController.js'

router.post('/upload', upload.single('image'), processImage);

export { router };
