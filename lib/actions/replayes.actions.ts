'use server';
import Replay from '@/database/Replay.model';
import { connectToDatabase } from '../db';
import { createReplaysParams } from './types.shared';
import { revalidatePath } from 'next/cache';
import News from '@/database/News.model';

export async function createReplays(params: createReplaysParams) {
  try {
    connectToDatabase();
    const { content, author, news, path } = params;

    const newReplay = await Replay.create({
      content,
      author,
      news,
    });
    const newsObject = await News.findByIdAndUpdate(news, {
      $push: { replays: newReplay._id },
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}

export async function getReplayById(params: any) {
  try {
    await connectToDatabase(); // Ensure database connection is established

    const { replayId } = params;

    const replay = await Replay.findById(replayId).populate('author news');

    if (!replay) {
      throw new Error('Replay not found');
    }

    return replay;
  } catch (error) {
    console.error('Error fetching replay:', error);
    throw error; // Re-throw the error for proper handling
  }
}
