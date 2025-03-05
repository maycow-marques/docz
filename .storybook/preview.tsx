import "../src/app/globals.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

import enMessages from "../messages/en.json";
import esMessages from "../messages/es.json";
import ptMessages from "../messages/pt.json";

const messagesByLocale = {
  en: enMessages,
  es: esMessages,
  pt: ptMessages,
};

// 📌 Adicionamos o menu de idiomas no Storybook
export const globalTypes = {
  locale: {
    name: "Idioma",
    description: "Selecione o idioma",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "es", title: "Español" },
        { value: "pt", title: "Português" },
      ],
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { locale } = context.globals; // Obtém o idioma do menu
      const messages = messagesByLocale[locale] || enMessages; // Define fallback para inglês

      return (
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="font-sans text-slate-900 antialiased dark:text-neutral-400">
            <Story />
          </div>
        </NextIntlClientProvider>
      );
    },
    withThemeByDataAttribute({
      themes: {
        dark: "dark",
        light: "light",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
