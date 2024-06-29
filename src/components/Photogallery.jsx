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
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    );
  };

  const ImageGallery = ({ images }) => {
    return (
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.url} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="photo-gallery">
      <h1>Photo Gallery</h1>
      <UploadForm />
      <ImageGallery images={images} />
    </div>
  );
};

export default Photogallery;
