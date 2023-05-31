import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Todos | Okto',
  description:
    'Share your todo lists and work on it with people who might interest!',
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
