import { motion, Variants } from 'framer-motion';
import { Selection } from '@/components/dashboard/features';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { cn } from '@/lib';

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 20,
    // rotate: -10,
    transition: {
      duration: 0.8,
    },
  },
};
export default function GithubTrends({ className }: { className?: string }) {
  return (
    <motion.div variants={cardVariants}>
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <CardTitle>Trending on Github</CardTitle>
            <Selection
              className='hidden'
              placeholder='Language'
              items={['Javascript', 'Go', 'Java']}
              button={<Button variant='outline'>Search</Button>}
            />
          </div>
          <CardDescription>Popular repositories on Github</CardDescription>
        </CardHeader>
        <CardContent className='overflow-auto'>
          https://docs.github.com/en/rest/search?apiVersion=2022-11-28#about-search
        </CardContent>
        <CardFooter className='flex justify-end'></CardFooter>
      </Card>
    </motion.div>
  );
}
