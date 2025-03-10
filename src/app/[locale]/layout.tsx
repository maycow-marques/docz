import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

import { Providers } from "@/components/providers/Providers";
import { routing } from "@/i18n/routing";

const inter = Inter({
  variable: "--font-plus-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = { title: "Docz" };

type Props = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) notFound();

  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.variable} bg-surface-100 text-foreground min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
