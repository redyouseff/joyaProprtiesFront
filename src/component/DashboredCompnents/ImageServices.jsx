import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";  
import axiosInstance from "../../axios";  

const ImageServices = () => {
  const queryClient = useQueryClient();

  // Fetching image services
  const fetchImageServices = async () => {
    const response = await axiosInstance.get("/image-services");
    return response.data.data[0];  // Access the first item in the array
  };

  const {
    data: imageService = {},  
    isLoading: isImageServicesLoading,
    error: imageServicesError,
  } = useQuery({
    queryKey: ["image-services"],
    queryFn: fetchImageServices,
  });

  // Updating image service
  const updateImageService = useMutation({
    mutationFn: async (imageService) => {
      const formData = new FormData();
      formData.append("image", imageService.image);
      return axiosInstance.put(`/image-services/${imageService._id}`, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["image-services"]);
    },
  });

  // Handle image file change
  const handleImageServiceFileChange = (id, file) => {
    updateImageService.mutate({ _id: id, image: file });
  };

  if (isImageServicesLoading) {
    return <div className="text-gray-500 text-lg text-center">Loading...</div>;
  }

  if (imageServicesError) {
    console.error(imageServicesError);  
    return <div className="text-red-500 text-lg text-center">Error loading image services</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6bg-[#111612] rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-white mb-6">Image Service</h1>
      {imageService && imageService._id ? (
        <div className="flex flex-col items-center bg-[#111612] p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <img
              src={`https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app${imageService.image}`}  
              alt="Image Service"
              className="w-full h-72 object-cover rounded-lg shadow-md"  // Full width and fixed height for image
            />
          </div>
          <div className="mb-6">
            <label htmlFor={`image-upload-${imageService._id}`} className="text-lg text-white">
              Update Image
            </label>
            <input
              type="file"
              id={`image-upload-${imageService._id}`}
              className="mt-2 p-2 text-lg border border-gray-300 rounded-md"
              onChange={(e) =>
                handleImageServiceFileChange(imageService._id, e.target.files[0])
              }
            />
          </div>
          {updateImageService.isLoading && <p className="text-blue-500">Updating image...</p>}
          {updateImageService.isError && <p className="text-red-500">Error updating image</p>}
          {updateImageService.isSuccess && <p className="text-green-500">Image updated successfully!</p>}
        </div>
      ) : (
        <div className="text-gray-500 text-lg text-center">No image service available</div>
      )}
    </div>
  );
};

export default ImageServices;
