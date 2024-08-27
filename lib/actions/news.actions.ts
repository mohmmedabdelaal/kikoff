'use server';

import News from '@/database/News.model';
import { connectToDatabase } from '../db';
import { revalidatePath } from 'next/cache';
import User, { IUser } from '@/database/User.model';
import { Schema } from 'mongoose';
import { CreateNewsParams, GetNewsByIdParams } from './types.shared';

export async function createNews(params: CreateNewsParams) {
  try {
    // Connect to the database
    connectToDatabase();

    const { slug, image, content, title, path, author } = params;

    const newNews = await News.create({
      slug,
      image,
      content,
      title,
      author,
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

    const news = await News.find({}).sort({ createdDate: -1 });

    return { news };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getNewsById(params: GetNewsByIdParams) {
  try {
    await connectToDatabase();
    const { newsId } = params;
    const news = await News.findById(newsId).populate({
      path: 'author',
      model: User,
      select: '_id clerkId name picture username',
    });

    return news;
  } catch (error) {
    console.log(error);
  }
}
