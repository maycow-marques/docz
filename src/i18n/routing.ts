import { defineRouting } from "next-intl/routing";

export const countryLocale = { en: "us", es: "es", pt: "br" };

export const locales = ["en", "es", "pt"] as const;
export const defaultLocale = "pt";
export const localePrefix = "never";

export const langs = {
  es: { name: "Espanhõl", flag: "py" },
  en: { name: "English", flag: "us" },
  pt: { name: "Português", flag: "br" },
};

// Define your pathnames
export const pathnames = {
  "/": "/",
  "/dashboard": {
    en: "/dashboard",
    es: "/panel",
    pt: "/painel",
  },
} as const;

export const routing = defineRouting({
  locales: locales, // List of supported locales
  pathnames: pathnames, // Your localized pathnames
  localePrefix: localePrefix, // Locale prefix
  defaultLocale: defaultLocale, // Default locale
});
