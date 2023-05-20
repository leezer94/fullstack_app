import { TypographyP } from '@/components/ui';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function GossipCard({ className }: { className?: string }) {
  return (
    <Card className={cn('flex flex-col w-3/6 hover:border-red-200', className)}>
      <CardHeader>
        <CardTitle>Today&apos;s Gossip</CardTitle>
        <CardDescription>BBC Football Gossip</CardDescription>
      </CardHeader>
      <CardContent className='overflow-auto'>
        <p>
          Arsenal are preparing a club record £92m offer for West Ham&apos;s
          24-year-oldEngland midfielder Declan Rice.
        </p>
        <TypographyP>
          Manchester United have agreed personal terms with Napoli&apos;s
          26-year-old South Korea defender Kim Min-jae.
        </TypographyP>
        <p className='flex justify-center'>...</p>
      </CardContent>
      <CardFooter>
        <p>Read more...</p>
      </CardFooter>
    </Card>
  );
}

GossipCard.displayName = 'GossipCard';
