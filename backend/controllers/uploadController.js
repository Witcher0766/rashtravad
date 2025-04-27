import asyncHandler from '../middleware/asyncHandler.js';
import AdminUpload from '../models/uploadModel.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// @desc    Upload new image
// @route   POST /api/uploads
// @access  Private/Admin
const createUpload = asyncHandler(async (req, res) => {
  const { heading, description, image, type } = req.body;

  if (!image) {
    res.status(400);
    throw new Error('Image field is required');
  }

  if (!type || !['team', 'event', 'gallery', 'group'].includes(type)) {
    res.status(400);
    throw new Error('Valid type (team, event, gallery, group) is required');
  }

  const upload = await AdminUpload.create({
    heading,
    description,
    image,
    type,
  });

  res.status(201).json(upload);
});

// @desc    Get all uploads
// @route   GET /api/uploads
// @access  Public or Private based on requirement
// const getUploads = asyncHandler(async (req, res) => {
//   const uploads = await AdminUpload.find({});
//   res.status(200).json(uploads);
// });
// @desc    Get uploads (optionally filtered by type)
// @route   GET /api/uploads
// @access  Public or Private based on requirement
const getUploads = asyncHandler(async (req, res) => {
  const { type } = req.query;
  let filter = {};
  if (type) {
    filter.type = type; 
  }
  const uploads = await AdminUpload.find(filter);
  res.status(200).json(uploads);
});


// @desc    Get single upload by ID
// @route   GET /api/uploads/:id
// @access  Public or Private based on requirement
const getUploadById = asyncHandler(async (req, res) => {
  const upload = await AdminUpload.findById(req.params.id);

  if (upload) {
    res.status(200).json(upload);
  } else {
    res.status(404);
    throw new Error('Upload not found');
  }
});

// @desc    Update upload
// @route   PUT /api/uploads/:id
// @access  Private/Admin
const updateUpload = asyncHandler(async (req, res) => {
  const { heading, description, image, type } = req.body;

  const upload = await AdminUpload.findById(req.params.id);

  if (upload) {
    upload.heading = heading || upload.heading;
    upload.description = description || upload.description;
    upload.image = image || upload.image;
    upload.type = type || upload.type;  // Update type if provided

    const updatedUpload = await upload.save();
    res.status(200).json(updatedUpload);
  } else {
    res.status(404);
    throw new Error('Upload not found');
  }
});

// @desc    Delete upload
// @route   DELETE /api/uploads/:id
// @access  Private/Admin
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @desc    Delete upload
// @route   DELETE /api/uploads/:id
// @access  Private/Admin
const deleteUpload = asyncHandler(async (req, res) => {
  const upload = await AdminUpload.findById(req.params.id);

  if (!upload) {
    res.status(404);
    throw new Error('Upload not found');
  }

  // Assuming image path is stored in `upload.image`
  const imagePath = path.join(__dirname, '..', upload.image);

  // Delete the file if it exists
  if (fs.existsSync(imagePath)) {
    try {
      await fs.promises.unlink(imagePath); // 👈 use fs.promises for better async/await
    } catch (error) {
      console.error('Error deleting file:', error);
      res.status(500);
      throw new Error('Error deleting image file');
    }
  }

  // Delete the document from MongoDB
  await AdminUpload.deleteOne({ _id: upload._id }); // 👈 FIXED

  res.status(200).json({ message: 'Upload deleted successfully' });
});

export {
  createUpload,
  getUploads,
  getUploadById,
  updateUpload,
  deleteUpload,
};
