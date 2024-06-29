import React, { useState, useEffect } from "react";

const Photogallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        const data = await response.json();
        setImages(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleUpload = async (formData) => {
    setLoading(true);
    setProgress(0);

    // Simulate fake processing time
    const fakeUpload = () => {
      setProgress((prev) => {
        if (prev < 100) {
          setTimeout(fakeUpload, 100);
          return prev + 10;
        } else {
          return 100;
        }
      });
    };

    fakeUpload();

    try {
      // Simulate server response delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mocked response for the purpose of this example
      const data = {
        image: { url: URL.createObjectURL(formData.get("image")) },
      };
      setImages((prevImages) => [...prevImages, data.image]);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
      setProgress(0);
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
      <form
        onSubmit={handleSubmit}
        className="upload-form mb-4 p-4 rounded-lg bg-white bg-opacity-30 backdrop-blur-md"
      >
        <button
          type="submit"
          className="upload-button px-4 py-2 mb-2 bg-blue-500 text-white rounded"
        >
          Upload
        </button>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input mb-2"
        />
      </form>
    );
  };

  const LoadingBar = ({ progress }) => {
    return (
      <div className="loading-bar w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };

  const ImageGallery = ({ images }) => {
    return (
      <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.url}
              alt={`Image ${index}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="photo-gallery p-4 mt-16 flex flex-col items-center justify-center py-20">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      {loading && <LoadingBar progress={progress} />}
      <UploadForm />
      <ImageGallery images={images} />
    </div>
  );
};

export default Photogallery;
