import {
  GossipCard,
  GithubTrends,
  FeArticles,
  GoodsCard,
  TodosCard,
  UserStatus,
} from '@/components/dashboard';

export default function Home() {
  return (
    <div className='p-10 w-full h-full border-2'>
      <div className='flex gap-5 mb-5'>
        <GossipCard />
        <FeArticles />
        <UserStatus />
      </div>
      <div className='flex gap-5 '>
        <div className='flex flex-col w-2/6  gap-y-5'>
          <GithubTrends />
          <TodosCard />
        </div>
        <GoodsCard />
      </div>
    </div>
  );
}
