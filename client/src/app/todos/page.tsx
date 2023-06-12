import { getSession } from '@/api';
import {
  Card,
  CardContent,
  DropDownAvatar,
  Separator,
  TypographyH3,
  TypographyMuted,
} from '@/components/ui';

export default async function Page() {
  const session = await getSession();

  return (
    <div className='p-0 lg:p-10 w-full h-screen'>
      <div className='border-2 h-full rounded-md'>
        <div className='flex flex-row justify-between p-10 items-center'>
          <div className='flex flex-col'>
            <TypographyMuted>Welcome Back</TypographyMuted>
            <TypographyH3 className='mb-5'>{session.firstName}</TypographyH3>
          </div>
          <DropDownAvatar
            avatarLink={session.profileImage}
            userName={session.lastName}
          />
        </div>
        <Separator />
        <Card className='flex flex-col mt-5'>
          <div>
            <CardContent>Create Room</CardContent>
          </div>
          <div>
            <CardContent></CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
