"use client";

import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { ReactNode } from "react";

import { ModalProvider } from "./ModalProvider";
import { PageLoadingProvider } from "./PageLoadingProvider";
import { ThemeProvider } from "./ThemeProvider";

type ProvidersProps = { children: ReactNode };

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <PageLoadingProvider>
        <ModalProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </ModalProvider>
      </PageLoadingProvider>
    </ThemeProvider>
  );
}
