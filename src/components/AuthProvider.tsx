// src/components/AuthProvider.tsx

"use client";

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;
