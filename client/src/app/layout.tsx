import './styles/globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import QueryProvider from '@/app/queryProvider';
import { Footer, GNB } from '@/components/layout';
import { Toaster } from '@/components/ui';
import { getSession } from '../api/auth';

export const metadata: Metadata = {
  title: 'Dashboard | Okto',
  description: 'Manage your todos with people!',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();
  return (
    <QueryProvider>
      <html lang='en'>
        <body>
          <GNB session={session} />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </QueryProvider>
  );
}
