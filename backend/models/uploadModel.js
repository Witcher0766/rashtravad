import mongoose from "mongoose";

const adminUploadSchema = mongoose.Schema({
  heading: { type: String, trim: true },
  description: { type: String, trim: true },
  imageUrl: { type: String, required: true }, // Cloudinary URL
  publicId: { type: String, required: true }, // Cloudinary public_id
  type: { 
    type: String, 
    enum: ['team', 'event', 'gallery', 'group'],
    required: true,
  },
}, {
  timestamps: true,
});

const AdminUpload = mongoose.model("AdminUpload", adminUploadSchema);

export default AdminUpload;
