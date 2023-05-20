import './styles/globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import QueryProvider from '@/app/queryProvider';
import { Toaster } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Dashboard | Okto',
  description: 'Manage your todos with people!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <html lang='en'>
        <body>
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </QueryProvider>
  );
}
