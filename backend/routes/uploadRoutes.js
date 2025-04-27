import express from 'express';
import { createUpload, getUploads, getUploadById, updateUpload, deleteUpload } from '../controllers/uploadController.js';
import { protect, admin } from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.route('/')
  .post(protect, admin, createUpload)  // No multer middleware needed
  .get(getUploads);

router.route('/:id')
  .get(getUploadById)
  .put(protect, admin, updateUpload)
  .delete(protect, admin, deleteUpload);

export default router;
