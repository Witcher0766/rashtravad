import mongoose from "mongoose";

const adminUploadSchema = mongoose.Schema({
    heading: {
        type: String,
        required: false,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    image: {
        type: String, // You can use Buffer if storing the actual image or String for URL/path
        required: true,
    },
    type: {
        type: String,
        enum: ['team', 'event', 'gallery'], // Enums ensure the type is restricted to specific values
        required: true, // This is a required field to know which type of upload it is
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

const AdminUpload = mongoose.model("AdminUpload", adminUploadSchema);

export default AdminUpload;
