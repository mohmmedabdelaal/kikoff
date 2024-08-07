'use client';
import { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const Page = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  return (
    <div>
      <CldUploadWidget
        uploadPreset="vjrled0a"
        onSuccess={(result: any) => {
          if (result.event === 'success') {
            setUploadedImageUrl(result.info?.secure_url);
          }
        }}
        options={
          {
            // Add options object
            acceptedFileTypes: 'image/*', // Restrict to image files
          } as any
        }
      >
        {({ open }) => {
          return (
            <button
              className="btn btn-primary p-2 rounded bg-orange-900"
              onClick={() => open()}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>

      {uploadedImageUrl && (
        <div>
          <p>Uploaded Image URL:</p>
          <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer">
            {uploadedImageUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;
