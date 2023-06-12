import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'My Page | Okto',
  description: 'Edit Your Page and Check out your user status !!',
};

export default async function TodoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main>{children}</main>;
}
