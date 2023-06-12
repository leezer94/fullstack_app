import { getUserById } from '@/api';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui';

interface Props {
  params: {
    slug: number;
  };
}

export default async function Page({ params }: Props) {
  const user = await getUserById(params.slug);

  return (
    <Card className='w-screen h-screen'>
      <CardHeader>
        <CardTitle>
          <div>{user.firstName}</div>
        </CardTitle>
        <CardDescription>Edit your</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
