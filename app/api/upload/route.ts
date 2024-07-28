// pages/api/upload.ts (API Route)
import { NextApiRequest, NextApiResponse } from 'next';
import { uploadImageToCloudinary } from '@/lib/utils'; // Your upload function

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const file = req.body.file;
      const imageUrl = await uploadImageToCloudinary(file);

      res.status(200).json(imageUrl);
    } catch (error) {
      res.status(500).json({ error: 'Image upload failed' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
