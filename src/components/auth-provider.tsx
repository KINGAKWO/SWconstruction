"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from 'react';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading indicator
  }

  return <SessionProvider>{children}</SessionProvider>;
}
