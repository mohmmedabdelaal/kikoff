'use client';
import React, { useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { ReplaySchema } from '@/lib/validations';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/textarea';
import { usePathname } from 'next/navigation';
import { getUserInfo } from '@/lib/actions/users.actions';
import { createReplays } from '@/lib/actions/replayes.actions';
import { Button } from '../ui/button';

interface Props {
  newsId: string;
  authorId: string;
  news: string;
  username: string;
}

const ReplayFrom = ({ newsId, authorId, news, username }: Props) => {
  // const user = await getUserInfo({u})
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(username);

  const pathname = usePathname();
  const form = useForm<z.infer<typeof ReplaySchema>>({
    resolver: zodResolver(ReplaySchema),
    defaultValues: {
      replay: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ReplaySchema>) {
    setIsSubmitting(true);
    try {
      await createReplays({
        content: values.replay,
        author: JSON.parse(authorId),
        news: JSON.parse(newsId),
        path: pathname,
      });
      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div>
      <div className="text-dark500_light700 flex justify-between gap-5"></div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5 space-y-6"
        >
          <FormField
            control={form.control}
            name="replay"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold ml-8 text-dark400_light800">
                  {username} <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <Textarea
                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[100px] border"
                    {...field}
                    placeholder="What do you think..."
                  />
                </FormControl>

                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="primary-gradient w-fit text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ReplayFrom;
