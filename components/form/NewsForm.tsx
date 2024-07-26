'use client';
import { createNews } from '@/lib/actions/news.actions';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { NewsSchema } from '@/lib/validations';

const NewsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState('');

  const form = useForm<z.infer<typeof NewsSchema>>({
    resolver: zodResolver(NewsSchema),
    defaultValues: {
      slug: '',
      image: '',
      title: '',
      content: '',
    },
  });
  const handleOnSubmit = async () => {
    setIsSubmitting(true);
    try {
      await createNews({});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleOnSubmit}
        className="flex w-full flex-col gap-10 space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                News title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      </form>
      ;
    </Form>
  );
};

export default NewsForm;
