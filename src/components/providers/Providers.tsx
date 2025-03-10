"use client";

import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { ReactNode } from "react";

import { FeedbackProvider } from "./FeedbackProvider";
import { PageLoadingProvider } from "./PageLoadingProvider";
import { ThemeProvider } from "./ThemeProvider";

type ProvidersProps = { children: ReactNode };

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <PageLoadingProvider>
        <FeedbackProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </FeedbackProvider>
      </PageLoadingProvider>
    </ThemeProvider>
  );
}
