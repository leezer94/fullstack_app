import { getSession } from '@/api';
import { Card, DropDownAvatar, TypographyH3 } from '@/components/ui';

export default async function Page() {
  const session = await getSession();

  return (
    <div className='p-0 lg:p-10 w-full h-screen'>
      <div className='border-2 h-full rounded-md'>
        <Card className='flex flex-row justify-between p-5 items-center'>
          <TypographyH3 className='mb-5'>{session.firstName}</TypographyH3>
          <DropDownAvatar
            avatarLink={session.profileImage}
            userName={session.lastName}
          />
        </Card>
      </div>
    </div>
  );
}
