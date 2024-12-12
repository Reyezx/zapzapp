// src\components\AuthGuard.tsx

"use client";

import React, { ReactNode, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: ReactNode }) {
  const { status } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (status === "unauthenticated" ) {
      router.push('/auth/prihlasenie');
    }
  }, [status, router]);

  return <>{children}</>;
}
