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
// import { Input } from '@/components/ui/input';
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
      ></form>
      ;
    </Form>
  );
};

export default NewsForm;
