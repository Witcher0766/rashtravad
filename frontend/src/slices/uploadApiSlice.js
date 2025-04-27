import { apiSlice } from "./apiSlice";
import { UPLOADS_URL } from "../constants";

export const uploadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new image upload
    createUpload: builder.mutation({
      query: (formData) => ({
        url: `${UPLOADS_URL}`,
        method: "POST",
        body: formData,
        formData: true, // Add this line to properly handle FormData
      }),
      invalidatesTags: ["Uploads"],
    }),

    // Get all uploaded items
    getUploads: builder.query({
      query: (type) => ({
        url: type ? `${UPLOADS_URL}?type=${type}` : `${UPLOADS_URL}`,
      }),
      providesTags: ["Uploads"],
      keepUnusedDataFor: 5,
    }),

    // Get a specific upload by ID
    getUploadById: builder.query({
      query: (uploadId) => ({
        url: `${UPLOADS_URL}/${uploadId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    // Update a specific upload
    updateUpload: builder.mutation({
      query: ({ id, formData }) => ({
        url: `${UPLOADS_URL}/${id}`,
        method: "PUT",
        body: formData,
        formData: true, // Add this line to properly handle FormData
      }),
      invalidatesTags: ["Uploads"],
    }),

    // Delete a specific upload by ID
    deleteUpload: builder.mutation({
      query: (uploadId) => ({
        url: `${UPLOADS_URL}/${uploadId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Uploads"],
    }),
  }),
});

export const {
  useCreateUploadMutation,
  useGetUploadsQuery,
  useGetUploadByIdQuery,
  useUpdateUploadMutation,
  useDeleteUploadMutation,
} = uploadApiSlice;