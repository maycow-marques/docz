import { defineRouting } from "next-intl/routing";

export const countryLocale = { en: "us", es: "es", pt: "br" };

export const locales = ["en", "es", "pt"] as const;
export const defaultLocale = "pt";
export const localePrefix = "never";

export const langs = {
  en: { name: "English", flag: "us" },
  es: { name: "Espanhõl", flag: "py" },
  pt: { name: "Português", flag: "br" },
};

export type Pathnames = keyof typeof pathnames;

export const pathnames = {
  "/": "/",
  "/dashboard": {
    en: "/dashboard",
    es: "/panel",
    pt: "/painel",
  },
  "/dashboard/reports": {
    en: "/dashboard/reports",
    es: "/panel/informes",
    pt: "/painel/relatorios",
  },
  "/dashboard/configurations/users": {
    en: "/dashboard/configurations/users",
    es: "/panel/ajustes/usuarios",
    pt: "/painel/configuracoes/usuarios",
  },
  "/dashboard/release-notes": {
    en: "/dashboard/release-notes",
    es: "/panel/notas-de-la-version",
    pt: "/painel/notas-da-versao",
  },
} as const;

export const routing = defineRouting({
  locales: locales, // List of supported locales
  pathnames: pathnames, // Your localized pathnames
  localePrefix: localePrefix, // Locale prefix
  defaultLocale: defaultLocale, // Default locale
});
