import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Authentication | Okto',
  description: 'Create an Account with us!',
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div>Layout page</div>
      {children}
    </main>
  );
}