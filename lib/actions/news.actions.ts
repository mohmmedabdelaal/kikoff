'use server';

import News from '@/database/News.model';
import { connectToDatabase } from '../db';
import { revalidatePath } from 'next/cache';
import mongoose from 'mongoose';
import cloudinary from '../cloundinary';

export interface CreateNewsParams {
  slug: string;
  image: string;
  content: string;
  title: string;
  path: string;
}

export async function createNews(params: CreateNewsParams) {
  try {
    // Connect to the database
    await connectToDatabase();

    const { slug, image, content, title, path } = params;
    let cloudinaryResult;
    if (image.startsWith('data:image')) {
      // If image is a base64 string
      cloudinaryResult = await cloudinary.uploader.upload(image, {
        folder: 'news', // Optional: specify a folder in your Cloudinary account
      });
    } else {
      // If image is a file path
      cloudinaryResult = await cloudinary.uploader.upload(image, {
        folder: 'news',
      });
    }

    const newNews = await News.create({
      slug,
      image: cloudinaryResult.secure_url,
      content,
      title,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export interface GetNewsParams {
  page?: number;
  pageSize?: number;
}

export async function getNews(params: GetNewsParams) {
  try {
    await connectToDatabase();

    // const { page = 1, pageSize = 10 } = params;

    const news = await News.find({});

    return { news };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

interface GetNewsByIdParams {
  id: string;
}

export async function getNewsById(params: GetNewsByIdParams) {
  try {
    await connectToDatabase();
    const { id } = params;
    const convertedId = new mongoose.Types.ObjectId(id);

    const news = await News.findById(id);

    if (!news) {
      throw new Error('Article Not found');
    }
    return { news };
  } catch (error) {
    console.log(error);
  }
}
