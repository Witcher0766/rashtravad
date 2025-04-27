import { apiSlice } from "./apiSlice";
import { UPLOADS_URL } from "../constants";

export const uploadApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new image upload
    createUpload: builder.mutation({
      query: (data) => ({
        url: `${UPLOADS_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Uploads"],
    }),

    // Get all uploaded items
    // getUploads: builder.query({
    //   query: () => ({
    //     url: `${UPLOADS_URL}`,
    //   }),
    //   providesTags: ['Uploads'],
    //   keepUnusedDataFor: 5,
    // }),
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
      query: (data) => ({
        url: `${UPLOADS_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Uploads"],
    }),

    // Delete a specific upload by ID
    deleteUpload: builder.mutation({
      query: (uploadId) => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const token = userInfo?.token;

        return {
          url: `${UPLOADS_URL}/${uploadId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ["Uploads"],
    }),
  }),
});

export const {
  useCreateUploadMutation,
  useGetUploadsQuery,
  useGetUploadByIdQuery,
  useUpdateUploadMutation,
  useDeleteUploadMutation, // Export the delete mutation
} = uploadApiSlice;
