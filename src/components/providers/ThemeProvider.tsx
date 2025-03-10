"use client";

import { ReactNode, useEffect, useState } from "react";

import { Theme, ThemeContext } from "@/core/contexts/ThemeContext";

type Props = Readonly<{ children: ReactNode }>;

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Busca o tema salvo no localStorage
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(savedTheme);

    // Aplica a classe ao <html>
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  if (theme === null) return null; // Evita renderizar até definir o tema

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
