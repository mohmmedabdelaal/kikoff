'use server';

import User from '@/database/User.model';
import { connectToDatabase } from '../db';
import {
  CreateUserParams,
  DeleteUserParams,
  GetUserInfoParams,
  UpdateUserParams,
} from './types.shared';
import Replay from '@/database/Replay.model';

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    await connectToDatabase(); // Ensure database connection is established
    const user = await User.create(userData);
    console.log('User created:', user); // More informative log message
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Re-throw the error for proper handling
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

export async function getUserInfo(params: GetUserInfoParams) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.log(error);
  }
}
