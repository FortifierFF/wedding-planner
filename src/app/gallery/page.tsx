"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define the image type
interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // For this example, we'll use Unsplash API
    // In a real application, you would use your own API endpoint
    const fetchImages = async () => {
      try {
        setLoading(true);
        
        // This is an example. In a real app, you would use your own API endpoint
        // For demonstration, we'll create sample data
        // In production, replace with your actual API call:
        // const response = await axios.get('your-api-endpoint');
        
        // Simulate API response with sample data
        const sampleImages: GalleryImage[] = Array.from({ length: 20 }).map((_, i) => ({
          id: `img-${i + 1}`,
          // Using Unsplash source for random wedding images
          url: `https://source.unsplash.com/800x600/?wedding,bride,groom&sig=${i}`,
          alt: `Wedding gallery image ${i + 1}`,
          width: 800,
          height: 600,
        }));
        
        // Simulate API delay
        setTimeout(() => {
          setImages(sampleImages);
          setLoading(false);
        }, 1000);
        
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        setError("Failed to load gallery images. Please try again later.");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Wedding Inspiration Gallery</h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Browse our collection of beautiful wedding moments for inspiration for your own special day
      </p>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-600"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className={`mb-6 transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden ${
                index % 3 === 0 ? 'md:col-span-1' : 
                index % 5 === 0 ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className="relative rounded-lg overflow-hidden" style={{ 
                height: `${index % 2 === 0 ? '400px' : '320px'}` 
              }}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">Wedding Inspiration {index + 1}</h3>
                <p className="text-sm text-gray-500">Photo by Unsplash</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <p className="text-gray-600">Looking for more inspiration?</p>
        <button 
          className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors font-medium"
          onClick={() => {
            // In a real application, this would load more images
            alert("In a real application, this would load more images from your API!");
          }}
        >
          Load More Images
        </button>
      </div>
    </div>
  );
} 