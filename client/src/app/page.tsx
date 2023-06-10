import { getSession } from '@/api';
import { GithubTrends, TodosCard, UserStatus } from '@/components/dashboard';
import { Articles } from '@/components/dashboard/articles';

export default async function Home() {
  const userSession = await getSession();

  return (
    <div className='p-10 w-full h-full border-2 '>
      <div className='flex flex-col gap-y-5 mb-5'>
        <UserStatus
          session={userSession}
          className='sm:w-3/6 md:w-2/4 lg:w-3/6'
        />
        {/* @ts-expect-error Async Server Component */}
        <Articles />
      </div>
      <div className='flex gap-5 w-full'>
        <div className='flex flex-col w-full gap-y-5'>
          <GithubTrends />
          <TodosCard />
          {/* <ArticlesCard className='w-full' /> */}
        </div>
      </div>
    </div>
  );
}
