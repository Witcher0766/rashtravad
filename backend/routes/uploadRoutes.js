import express from 'express';
import {
  createUpload,
  getUploads,
  getUploadById,
  updateUpload,
  deleteUpload,  // Import the deleteUpload controller
} from '../controllers/uploadController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// @route   POST /api/uploads      → Create a new image upload
// @route   GET /api/uploads       → Get all uploads
router.route('/')
  .post(protect, admin, createUpload)
  .get(protect, admin, getUploads);

// @route   GET /api/uploads/:id   → Get a specific upload
// @route   PUT /api/uploads/:id   → Update a specific upload
// @route   DELETE /api/uploads/:id → Delete a specific upload
router.route('/:id')
  .get(protect, admin, getUploadById)
  .put(protect, admin, updateUpload)
  .delete(protect, admin, deleteUpload);  // Add DELETE route for deleting an upload

export default router;
