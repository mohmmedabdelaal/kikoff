'use server'

import cloudinary from "./cloundinary";

export async function uploadImageToCloudinary(
    image: File | string
  ): Promise<string | undefined> {
    try {
      let cloudinaryResult;
  
      // Check if 'image' is a base64 data URL (string starting with 'data:image')
      if (typeof image === 'string' && image.startsWith('data:image')) {
        // Directly upload the base64 data URL
        cloudinaryResult = await cloudinary.uploader.upload(image, {
          folder: 'news',
        });
      } else if (image instanceof File) {
        // Convert File object to base64 data URL before uploading
        const base64Image = await convertFileToBase64(image);
        cloudinaryResult = await cloudinary.uploader.upload(base64Image, {
          folder: 'news',
        });
      } else {
        throw new Error(
          'Invalid image format. Must be a File object or a base64 data URL.'
        );
      }
  
      return cloudinaryResult?.secure_url;
    } catch (error) {
      // Log the error for debugging
      console.error('Error uploading image to Cloudinary:', error);
      return undefined; // Indicate failure
    }
  }
  
  // Helper function (no changes needed)
  async function convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }