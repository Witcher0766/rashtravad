import express from 'express';
import {
  createUpload,
  getUploads,
  getUploadById,
  updateUpload,
  deleteUpload,
} from '../controllers/uploadController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/uploads      → Create a new image upload (protected)
// @route   GET /api/uploads       → Get all uploads (public)
router.route('/')
  .post(protect, admin, createUpload)
  .get(getUploads);

// @route   GET /api/uploads/:id   → Get a specific upload (protected)
// @route   PUT /api/uploads/:id   → Update a specific upload (protected)
// @route   DELETE /api/uploads/:id → Delete a specific upload (protected)
router.route('/:id')
  .get(protect, admin, getUploadById)
  .put(protect, admin, updateUpload)
  .delete(protect, admin, deleteUpload);

export default router;
