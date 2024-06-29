import React, { useState, useEffect } from "react";

const Photogallery = () => {
  const [images, setImages] = useState([]);

  // Fetch uploaded images from API on component mount
  useEffect(() => {
    // Replace with actual API call to fetch images
    const fetchImages = async () => {
      try {
        // Example fetch call
        const response = await fetch("/api/images");
        const data = await response.json();
        setImages(data.images); // Assuming API returns an array of image objects
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Function to handle image upload
  const handleUpload = async (formData) => {
    try {
      // Example fetch call to upload image
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setImages([...images, data.image]); // Assuming API returns uploaded image object
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const UploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);
        handleUpload(formData);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="file" onChange={handleFileChange} className="mb-2" />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Upload
        </button>
      </form>
    );
  };

  const ImageGallery = ({ images }) => {
    return (
      <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.url} alt={`Image ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="photo-gallery p-4 mt-16">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <UploadForm />
      <ImageGallery images={images} />
    </div>
  );
};

export default Photogallery;
