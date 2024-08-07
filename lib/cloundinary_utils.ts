// 'use server';

// // import cloudinary from './cloundinary';

// export async function uploadImageToCloudinary(image: File): Promise<string> {
//   const formData = new FormData();
//   formData.append('file', image);
//   formData.append('vjrled0a', 'vjrled0a');

//   const response = await fetch(`${process.env.CLOUDINARY_URL}`, {
//     method: 'POST',
//     body: formData,
//   });

//   if (!response.ok) {
//     throw new Error('Failed to upload image');
//   }

//   const data = await response.json();
//   console.log(data);
//   return data.secure_url;
// }

// // Helper function (no changes needed)
// async function convertFileToBase64(file: File): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });
// }
