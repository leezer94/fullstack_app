'use client';

import type { SessionType } from '@/types';
import { ReactNode, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useToast } from '@/lib/hooks/toast';

export default function PrivateRouter({
  children,
  session,
}: {
  children: ReactNode;
  session: SessionType;
}) {
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (session.statusCode === 401) {
      toast({
        title: 'UnAuthorized',
        variant: 'destructive',
      });
      redirect('/login');
    }
  }, [router, session, toast]);

  return <div>{children}</div>;
}
