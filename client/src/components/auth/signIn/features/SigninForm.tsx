'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { postSignin } from '@/api';
import { Button } from '@/components/ui';
import { Form, FormField, ItemField } from '@/components/ui/form';
import { useCustomMutation } from '@/lib/hooks/query';
import { toast } from '@/lib/hooks/toast';
import { AuthType } from '@/types';

export const FormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'This field has to be filled.',
    })
    .email('This is not a valid email'),
  password: z.string().min(6, {
    message: 'This field has to be filled.',
  }),
});

export default function SigninForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { mutate } = useCustomMutation(postSignin, {
    onSuccess: ({
      access_token,
    }: Pick<AuthType, 'access_token' | 'refresh_token'>) => {
      localStorage.setItem('access_token', access_token);
      router.push('/');
      toast({ title: 'Welcome!', description: 'Success to Login' });
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => mutate(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <ItemField
              type='email'
              field={field}
              label='email'
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
              label='password'
              placeholder='Enter Password'
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
