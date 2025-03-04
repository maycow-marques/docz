"use client";

import { ReactNode, useEffect, useState } from "react";

import { Theme, ThemeContext } from "@/core/contexts/ThemeContext";

type Props = Readonly<{ children: ReactNode }>;

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("light");

  // Carregar tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Aplicar a classe ao <html> e salvar no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Alternar entre os temas
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
