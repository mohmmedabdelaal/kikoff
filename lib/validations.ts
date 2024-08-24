import * as z from 'zod';

export const NewsSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters long')
    .max(150, 'Title must be at most 150 characters long'),
  slug: z
    .string()
    .min(5, 'Slug must be at least 5 characters long')
    .max(130, 'Slug must be at most 130 characters long'),
  content: z.string().min(90, 'Content must be at least 90 characters long'),
  image: z.any().optional(),
});

export const ReplaySchema = z.object({
  replay: z.string().min(4, 'Replay must be at least 4 characters long'),
});
