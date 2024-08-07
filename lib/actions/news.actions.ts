'use server';

import News from '@/database/News.model';
import { connectToDatabase } from '../db';
import { revalidatePath } from 'next/cache';
import mongoose from 'mongoose';

export interface CreateNewsParams {
  slug: string;
  image: string | null;
  content: string;
  title: string;
  path: string;
}

export async function createNews(params: CreateNewsParams) {
  try {
    // Connect to the database
    connectToDatabase();

    const { slug, image, content, title, path } = params;

    const newNews = await News.create({
      slug,
      image,
      content,
      title,
    });
    console.log(newNews);

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

    const news = await News.find({}).sort({ createdDate: -1 });

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
