'use server';

import User from '@/database/User.model';
import { connectToDatabase } from '../db';
import { revalidatePath } from 'next/cache';
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from './types.shared';
import { useStyleRegistry } from 'styled-jsx';
import Replay from '@/database/Replay.model';

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData } = params;
    const user = await User.findByIdAndUpdate(clerkId, updateData, {
      new: true,
    });
    if (!user) {
      throw new Error('User no found');
    }
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;
    const user = await User.findByIdAndDelete({ clerkId });
    if (!user) {
      throw new Error('User not found');
    }
    await Replay.deleteMany({ author: user._id });
    const deletedUser = await User.findByIdAndDelete({ clerkId });
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
}
