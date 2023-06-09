'use client';

import { Input, TypographyH1, TypographyMuted } from '@/components/ui';

export default async function Page() {
  return (
    <div className='p-10 w-full h-screen'>
      <div className='border-2 h-full rounded-md'>
        <div className='flex flex-col p-10 '>
          <TypographyH1 className='mb-5'>Welcome back name</TypographyH1>
          <TypographyMuted className='text-3xl '>Welcome back</TypographyMuted>
        </div>

        <form className='flex'>
          <Input type='text' placeholder='Filter tasks...' />
        </form>
      </div>
    </div>
  );
}
