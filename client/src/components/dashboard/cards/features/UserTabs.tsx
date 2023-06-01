'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TypographyMuted,
} from '@/components/ui';

export default function UserTabs() {
  return (
    <Tabs defaultValue='account' className='w-full'>
      <TabsList className='w-full'>
        <TabsTrigger className='w-full' value='account'>
          Details
        </TabsTrigger>
        <TabsTrigger className='w-full' value='password'>
          Etc
        </TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <TypographyMuted>User name</TypographyMuted>
      </TabsContent>
      <TabsContent value='password'>Change your password here.</TabsContent>
    </Tabs>
  );
}
