'use client';

import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { postSignUp } from '@/api';
import { Button } from '@/components/ui';
import { Form, FormField, ItemField } from '@/components/ui/form';
import { useCustomMutation } from '@/lib/hooks/query';
import { toast } from '@/lib/hooks/toast';
import { UserInformationType } from '@/types';

export const FormSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: 'This field has to be filled.',
      })
      .email('This is not a valid email'),
    password: z.string().min(6, {
      message: 'This field has to be filled.',
    }),
    'confirm-password': z.string().min(6, {
      message: 'This field has to be filled.',
    }),
    firstName: z.string().min(2, {
      message: 'First name must be at least 2 characters.',
    }),
    lastName: z.string().min(2, {
      message: 'Last name must be at least 2 characters.',
    }),
  })
  .refine((data) => data.password === data['confirm-password'], {
    path: ['confirm-password'],
    message: 'password must be matched with the password you have typed',
  });

export default function SignupForm({
  setIsSubmitted,
}: {
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { mutate } = useCustomMutation(postSignUp, {
    onSuccess: ({ firstName }: Pick<UserInformationType, 'firstName'>) => {
      toast({ title: `Hello, ${firstName} welcome to Okto` });
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({ title: error.message, variant: 'destructive' });
      setIsSubmitted(false);
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => mutate(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex justify-between'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <ItemField
                field={field}
                label='First name'
                placeholder='Keonhee'
              />
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <ItemField field={field} label='Last name' placeholder='Lee' />
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <ItemField
              field={field}
              label='Enter your email'
              placeholder='example@gmail.com'
            />
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <ItemField
              type='password'
              field={field}
              label='Enter Password'
              placeholder='enter your password'
            />
          )}
        />
        <FormField
          control={form.control}
          name='confirm-password'
          render={({ field }) => (
            <ItemField
              type='password'
              field={field}
              label='Confirm Password'
              placeholder='Confirm your password'
            />
          )}
        />
        <Button className='mt-10' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
}
