"use client"

import { SessionProvider } from "next-auth/react";
import React from "react";

interface ProvidersProps {
  children?: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
