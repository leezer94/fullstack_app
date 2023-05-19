import './styles/globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard | Okto',
  description: 'Manage your todos with people!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        {/* <div className='p-10 w-screen h-screen'>
          <div className='flex flex-row justify-between'>
            <TypographyH2>Dashboard</TypographyH2>
            <Link href='/login'>
              <Button variant='ghost'>Login</Button>
            </Link>
          </div> */}
        {/* </div> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
