import { ReactNode } from 'react';
import { getSession } from '@/api';
import PrivateRouter from '@/components/helper/PrivateRouter';

export const metadata: Metadata = {
  title: 'Todos | Okto',
  description:
    'Share your todo lists and work on it with people who might interest!',
};

export default async function TodoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
