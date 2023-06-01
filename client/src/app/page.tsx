import { Suspense } from 'react';
import {
  GossipCard,
  GithubTrends,
  FeArticles,
  ArticlesCard,
  TodosCard,
  UserStatus,
} from '@/components/dashboard';
import { CategoryContextProvider } from '../contexts/categoryContext';

export default function Home() {
  return (
    <div className='p-10 w-full h-full border-2'>
      <div className='flex gap-5 mb-5'>
        {/* @ts-expect-error Async Server Component */}
        <GossipCard />
        {/* @ts-expect-error Async Server Component */}
        <FeArticles />
        <UserStatus />
      </div>
      <div className='flex gap-5 '>
        <div className='flex flex-col w-2/6  gap-y-5'>
          <GithubTrends />
          <TodosCard />
        </div>
        <CategoryContextProvider>
          <ArticlesCard />
        </CategoryContextProvider>
      </div>
    </div>
  );
}
