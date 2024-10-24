// src/app/page.tsx

"use client"

import { useSession } from 'next-auth/react';
import HomeLoggedIn from '@/sections/HomeLoggedIn';
import HomeNotLoggedIn from '@/sections/HomeNotLoggedIn';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Načítavanie...</p>;
  }

  return session ? <HomeLoggedIn /> : <HomeNotLoggedIn />;
}
