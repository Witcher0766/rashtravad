import React, { useState } from 'react';
import { useCreateUploadMutation, useGetUploadsQuery, useDeleteUploadMutation } from '../slices/uploadApiSlice';
import { FiUpload, FiTrash2, FiImage, FiType, FiAlignLeft, FiTag } from 'react-icons/fi';

const AdminGroup = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [type, setType] = useState('team');

  const { data: uploads, isLoading, error, refetch } = useGetUploadsQuery();
  const [createUpload, { isLoading: uploading }] = useCreateUploadMutation();
  const [deleteUpload, { isLoading: deleting }] = useDeleteUploadMutation();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);  // Base64 preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!preview) return alert('Please select an image');

    try {
      const payload = {
        heading,
        description,
        type,
        image: preview,  // 👈 sending base64 string
      };

      console.log('Uploading payload:', payload);
      await createUpload(payload).unwrap();

      setHeading('');
      setDescription('');
      setImageFile(null);
      setPreview('');
      refetch();
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    }
  };

  const handleDelete = async (uploadId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteUpload(uploadId).unwrap();
        refetch();
      } catch (error) {
        console.error('Error deleting upload:', error);
        alert('Error deleting upload');
      }
    }
  };

  const filteredUploads = uploads?.filter((upload) => upload.type === type);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Admin Upload Panel
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your team, events, group, and gallery content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiUpload className="mr-2" /> Upload New Content
              </h3>

              <form onSubmit={handleUpload} className="space-y-5">
                {/* Heading */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiType className="mr-2" /> Heading (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Team Member Name"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiAlignLeft className="mr-2" /> Description (optional)
                  </label>
                  <textarea
                    placeholder="e.g. Role or event details"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiTag className="mr-2" /> Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="team">Team</option>
                    <option value="event">Event</option>
                    <option value="gallery">Gallery</option>
                    <option value="group">Group</option>
                  </select>
                </div>

                {/* Image */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <FiImage className="mr-2" /> Image
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                        {preview ? (
                          <img src={preview} alt="Preview" className="h-32 object-contain mb-2 rounded" />
                        ) : (
                          <>
                            <FiImage className="w-8 h-8 text-gray-400" />
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                              Click to upload or drag and drop
                            </p>
                          </>
                        )}
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        className="hidden" 
                      />
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={uploading || !preview}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                    uploading || !preview
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {uploading ? 'Uploading...' : 'Upload Content'}
                </button>
              </form>
            </div>
          </div>

          {/* Uploaded Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">

              {/* Filter Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                {['team', 'event', 'gallery', 'group'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-4 py-2 rounded-full font-medium ${
                      type === t
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {type.charAt(0).toUpperCase() + type.slice(1)} Uploads
              </h3>

              {isLoading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="text-center py-10 text-red-600 dark:text-red-400">
                  Error loading content. Please try again.
                </div>
              ) : filteredUploads?.length === 0 ? (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                  No {type} content uploaded yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredUploads.map((upload) => (
                    <div key={upload._id} className="relative group bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                      {upload.imageUrl && (
                        <img
                          src={upload.imageUrl}  // 👈 Corrected
                          alt="Uploaded content"
                          className="h-48 w-full object-cover"
                        />
                      )}
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            {upload.heading && (
                              <h4 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                                {upload.heading}
                              </h4>
                            )}
                          </div>
                          <button
                            onClick={() => handleDelete(upload._id)}
                            disabled={deleting}
                            className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 dark:hover:bg-gray-600 transition-colors"
                            title="Delete"
                          >
                            {deleting ? (
                              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-red-500"></div>
                            ) : (
                              <FiTrash2 />
                            )}
                          </button>
                        </div>
                        {upload.description && (
                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {upload.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminGroup;
