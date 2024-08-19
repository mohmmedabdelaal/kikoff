'use server';
import Replay from '@/database/Replay.model';
import { connectToDatabase } from '../db';
import { createReplaysParams } from './types.shared';
import { revalidatePath } from 'next/cache';

export async function createReplays(params: createReplaysParams) {
  try {
    connectToDatabase();
    const { content, author, news, path } = params;

    const newReplay = await Replay.create({
      content,
      author,
      news,
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
