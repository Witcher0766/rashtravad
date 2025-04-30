import cloudinary from '../config/cloudinary.js';  // Cloudinary configuration
import asyncHandler from '../middleware/asyncHandler.js';  // Async error handler middleware
import AdminUpload from '../models/uploadModel.js';  // Admin Upload model

// @desc    Upload new image to Cloudinary and save URL in MongoDB
// @route   POST /api/uploads
// @access  Private/Admin
// @desc    Upload new image to Cloudinary and save URL in MongoDB
// @route   POST /api/uploads
// @access  Private/Admin
const createUpload = asyncHandler(async (req, res) => {
  const { heading, description, type, image } = req.body;
  if (!image) {
    res.status(400);
    throw new Error('Image data is required');
  }
  const validTypes = ['team', 'event', 'gallery', 'group', 'statePresident'];
  if (!type || !validTypes.includes(type)) {
    res.status(400);
    throw new Error(`Valid type is required. Accepted types are: ${validTypes.join(', ')}`);
  }
  const result = await cloudinary.uploader.upload(image, {
    folder: 'uploads/',
  });
  const upload = await AdminUpload.create({
    heading,
    description,
    imageUrl: result.secure_url,
    publicId: result.public_id,
    type,
  });

  res.status(201).json(upload);
});


// @desc    Get all uploads
const getUploads = asyncHandler(async (req, res) => {
  const { type } = req.query;
  let filter = {};

  if (type) {
    filter.type = type;  // Filter uploads by type if provided
  }

  try {
    const uploads = await AdminUpload.find(filter);  // Query MongoDB for uploads
    res.status(200).json(uploads);
  } catch (error) {
    res.status(500);
    throw new Error('Error fetching uploads');
  }
});

// @desc    Get single upload by ID
const getUploadById = asyncHandler(async (req, res) => {
  try {
    const upload = await AdminUpload.findById(req.params.id);

    if (upload) {
      res.status(200).json(upload);
    } else {
      res.status(404);
      throw new Error('Upload not found');
    }
  } catch (error) {
    res.status(500);
    throw new Error('Error fetching upload by ID');
  }
});

// @desc    Update an upload
const updateUpload = asyncHandler(async (req, res) => {
  const { heading, description, type } = req.body;

  try {
    const upload = await AdminUpload.findById(req.params.id);

    if (!upload) {
      res.status(404);
      throw new Error('Upload not found');
    }

    // Update upload fields if provided
    upload.heading = heading || upload.heading;
    upload.description = description || upload.description;
    upload.type = type || upload.type;

    const updatedUpload = await upload.save();
    res.status(200).json(updatedUpload);
  } catch (error) {
    res.status(500);
    throw new Error('Error updating upload');
  }
});

// @desc    Delete an upload and its image from Cloudinary
const deleteUpload = asyncHandler(async (req, res) => {
  try {
    const upload = await AdminUpload.findById(req.params.id);

    if (!upload) {
      res.status(404);
      throw new Error('Upload not found');
    }

    // Delete the image from Cloudinary using the publicId stored in MongoDB
    if (upload.publicId) {
      await cloudinary.uploader.destroy(upload.publicId);
    }

    // Delete the upload document from MongoDB
    await AdminUpload.deleteOne({ _id: upload._id });

    res.status(200).json({ message: 'Upload deleted successfully' });
  } catch (error) {
    res.status(500);
    throw new Error('Error deleting upload');
  }
});

export {
  createUpload,
  getUploads,
  getUploadById,
  updateUpload,
  deleteUpload,
};
