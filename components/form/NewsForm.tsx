'use client';
import { createNews } from '@/lib/actions/news.actions';
import { Editor } from '@tinymce/tinymce-react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import React, { useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { uploadImageToCloudinary } from '@/lib/cloundinary_utils';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';

const NewsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [imagePreview, setImagePreview] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const pathName = usePathname();
  const router = useRouter();
  const editorRef = useRef(null);
  function createSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  }

  const form = useForm<z.infer<typeof NewsSchema>>({
    resolver: zodResolver(NewsSchema),
    defaultValues: {
      slug: '',
      image: '',
      title: '',
      content: '',
    },
  });

  async function onSubmit(values: z.infer<typeof NewsSchema>) {
    setIsSubmitting(true);
    try {
      const slug = createSlug(values.title);

      // Create the news article
      await createNews({
        title: values.title,
        image: uploadedImageUrl,
        content: values.content,
        slug: slug,
        path: pathName,
      });

      router.push('/');
    } catch (e) {
      console.error(e);
      // Handle the error (e.g., display an error message to the user)
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                News Article Content <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINYMYCE_API_KEY}
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue={''}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'code',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table',
                      'code',
                      'help',
                      'wordcount',
                      'textcolor',
                    ],
                    toolbar:
                      'undo redo | formatselect | ' +
                      'bold italic underline strikethrough | forecolor backcolor | ' +
                      'alignleft aligncenter alignright alignjustify | ' +
                      'bullist numlist outdent indent | removeformat | ' +
                      'image media link | code | help',
                    content_style:
                      'body { font-family:Arial,Helvetica,sans-serif; font-size:14px }',
                    formats: {
                      h1: { block: 'h1', classes: 'text-4xl font-bold mb-4' },
                      h2: { block: 'h2', classes: 'text-3xl font-bold mb-3' },
                      h3: { block: 'h3', classes: 'text-2xl font-bold mb-2' },
                      h4: { block: 'h4', classes: 'text-xl font-bold mb-2' },
                    },
                  }}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Write your football news article here. Include match details,
                player performances, and any relevant statistics. Minimum 100
                words.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <CldUploadWidget
                  uploadPreset="vjrled0a"
                  onSuccess={(result: any) => {
                    if (result.event === 'success') {
                      setUploadedImageUrl(result.info?.secure_url);
                    }
                  }}
                  options={
                    {
                      // Add options object
                      acceptedFileTypes: 'image/*', // Restrict to image files
                    } as any
                  }
                >
                  {({ open }) => {
                    return (
                      <button
                        className="btn btn-primary p-2 rounded bg-orange-900"
                        onClick={() => open()}
                      >
                        Upload an Image
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </FormControl>
              {uploadedImageUrl ? (
                <Image
                  src={uploadedImageUrl}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="mt-4"
                />
              ) : null}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                News slug <span className="text-primary-500">*</span>
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
        <Button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
          disabled={isSubmitting}
        >
          Create News
        </Button>
      </form>
    </Form>
  );
};

export default NewsForm;
