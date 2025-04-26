import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { FiUpload, FiX, FiCheck, FiImage } from "react-icons/fi";

const ImageUploadDialog = ({ open, onClose, onSave }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast.error("Please select an image file");
      return;
    }

    // Check file size
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
    }

    setSelectedImage(file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      toast.error("Please select an image first.");
      return;
    }

    try {
      setIsUploading(true);
      await onSave(selectedImage);
      setSelectedImage(null);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset file input
      }
      onClose();
    } catch (error) {
      console.error("Upload failed in dialog:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.match('image.*')) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          <FiX size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Upload Image</h2>
          <p className="text-gray-500 mt-1">Select an image from your gallery</p>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-6 mb-6 text-center transition-all ${
            imagePreview ? "border-gray-200" : "border-blue-400 bg-blue-50"
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={!imagePreview ? triggerFileInput : undefined}
        >
          {imagePreview ? (
            <div className="relative group">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-64 object-contain rounded-lg mb-4"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                  setImagePreview(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="absolute top-2 right-2 bg-white text-gray-700 p-1 rounded-full shadow hover:bg-gray-100 transition z-10"
              >
                <FiX size={16} />
              </button>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all rounded-lg">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerFileInput();
                  }}
                  className="bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
                >
                  <FiUpload className="text-blue-600" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <FiImage className="text-blue-500 text-4xl mb-3" />
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  triggerFileInput();
                }}
              >
                <FiUpload className="mr-2" />
                Select from Gallery
              </button>
              <p className="text-xs text-gray-400 mt-3">
                Supports: JPG, PNG, WEBP (Max 5MB)
              </p>
            </div>
          )}
        </div>

        {/* Key change: Removed the 'capture' attribute to allow gallery selection */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition flex items-center"
          >
            <FiX className="mr-2" />
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!selectedImage || isUploading}
            className={`px-5 py-2.5 rounded-lg text-white transition flex items-center ${
              !selectedImage || isUploading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isUploading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <FiCheck className="mr-2" />
                Upload Image
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadDialog;