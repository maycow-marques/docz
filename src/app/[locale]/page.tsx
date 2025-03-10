"use client";

import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Section } from "@/components/base/general/section";
import { ThemeToggle } from "@/components/base/general/theme-toggle";
import { Text, Title } from "@/components/base/general/typography";
import { ContactAction, Contacts } from "@/components/base/navigation/contacts";
import { LocaleDropdown } from "@/components/base/navigation/locale-dropdown";
import { LoginForm } from "@/components/forms/login";
import { Orbit } from "@/components/layout/orbit";
import { useTheme } from "@/core/hooks/useTheme";
import { Link } from "@/i18n/navigation";
import SosdocsBlue from "@/public/logo-sosdocs-blue.svg";
import SosdocsWhite from "@/public/logo-sosdocs-white.svg";

export default function LoginPage() {
  const t = useTranslations();
  const router = useRouter();

  const { theme } = useTheme();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-lg flex-col p-5 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
      <Contacts>
        <ContactAction action="bitrix" />
        <ContactAction action="email" />
        <ContactAction action="phone" />
        <ContactAction action="whatsapp" />
      </Contacts>

      <Section as="header" className="flex items-center justify-between p-3 lg:p-4">
        <div className="w-28 lg:w-32">
          <Link href="/">
            <Image src={theme === "dark" ? SosdocsWhite : SosdocsBlue} alt="Grupo Sosdocs" />
          </Link>
        </div>

        <div className="flex items-center">
          <ThemeToggle />

          <LocaleDropdown path="/" />
        </div>
      </Section>
      <div className="flex flex-1 items-center">
        <Section as="main" className="w-full px-5 py-10 lg:w-80">
          <Title as="h1" className="mb-1 text-3xl">
            {t("pages.login.title")}
          </Title>

          <Text>{t("pages.login.text")}</Text>

          <LoginForm />

          <p className="mt-4 text-center text-sm">
            {t.rich("pages.login.forget-password", {
              important: (chunks) => (
                <span className="text-info-300 dark:text-dark-accent cursor-pointer">{chunks}</span>
              ),
            })}
          </p>
        </Section>
        <section className="relative hidden flex-1 items-center justify-center lg:flex">
          <Orbit />
        </section>
      </div>
      <footer className="py-1 text-center">
        <small className="flex flex-wrap items-center justify-center gap-1">
          {t.rich("shared.copyright", {
            year: (chunks) => <span>{chunks}</span>,
            text: (chunks) => <span>{chunks}</span>,
            date: new Date().getFullYear(),
          })}
        </small>
      </footer>
    </div>
  );
}
