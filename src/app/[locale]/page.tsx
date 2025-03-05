"use client";

import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PiMoonDuotone, PiSunDimDuotone } from "react-icons/pi";

import { LoginForm } from "@/components/forms/LoginForm";
import { Orbit } from "@/components/layouts/Orbit";
import { Card } from "@/components/ui/Card";
import { ContactAction, ContactActions } from "@/components/ui/ContactActions";
import { Dropdown, DropdownItem } from "@/components/ui/Dropdown";
import { useTheme } from "@/core/hooks/useTheme";
import { Link, redirect } from "@/i18n/navigation";
import { langs, locales } from "@/i18n/routing";
import SosdocsBlue from "@/public/logo-sosdocs-blue.svg";
import SosdocsWhite from "@/public/logo-sosdocs-white.svg";

export default function LoginPage() {
  const t = useTranslations();
  const { theme, toggleTheme } = useTheme();
  const { locale } = useParams<{ locale: (typeof locales)[number] }>();
  const { status } = useSession();

  if (status === "authenticated") redirect({ href: "/dashboard", locale });

  return (
    <div className="relative flex min-h-screen flex-col">
      <ContactActions>
        <ContactAction action="bitrix" />
        <ContactAction action="email" />
        <ContactAction action="phone" />
        <ContactAction action="whatsapp" />
      </ContactActions>

      <header className="px-10 pt-5">
        <Card className="flex items-center justify-between px-6 py-4">
          <div className="w-32">
            <Link href="/">
              {theme === "dark" ? (
                <Image src={SosdocsWhite} alt="Grupo Sosdocs" />
              ) : (
                <Image src={SosdocsBlue} alt="Grupo Sosdocs" />
              )}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="cursor-pointer text-yellow-500 hover:text-yellow-600 dark:text-neutral-400 dark:hover:text-neutral-500"
            >
              {theme === "dark" ? <PiMoonDuotone size={20} /> : <PiSunDimDuotone size={20} />}
            </button>

            <Dropdown
              label={
                <>
                  <span className={`fi fi-${langs[locale].flag}`} />
                  {langs[locale].name}
                </>
              }
              direction="bottom-right"
            >
              <DropdownItem>
                <Link href="/" locale="pt">
                  <span className="fi fi-br"></span> Português
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/" locale="en">
                  <span className="fi fi-us"></span> English
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/" locale="es">
                  <span className="fi fi-py"></span> Espanhõl
                </Link>
              </DropdownItem>
            </Dropdown>
          </div>
        </Card>
      </header>
      <main className="flex flex-1 items-center px-10">
        <section className="w-96">
          <Card className="p-10">
            <h1 className="mb-1 text-4xl font-semibold text-blue-950 dark:text-white">
              {t("login-page.title")}
            </h1>
            <p>{t("login-page.text")}</p>

            <LoginForm />
          </Card>
        </section>
        <section className="relative flex flex-1 items-center justify-center">
          <Orbit />
        </section>
      </main>
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
