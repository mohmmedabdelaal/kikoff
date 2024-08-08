import { IUser } from "@/database/User.model";

export interface CreateUserParams {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    picture: string;
}

export interface CreateNewsParams {
    slug: string;
    image: string | null;
    content: string;
    title: string;
    path: string;
    author: Schema.Types.ObjectId | IUser;
  }

export interface UpdateUserParams {
    clerkId: string;
    updateData: Partial<IUser>;
    path: string;
}

export interface DeleteUserParams{
    clerkId: string;
}