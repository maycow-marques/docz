"use client";

import { useTheme } from "@/core/hooks/useTheme";

import { Icon } from "../icon";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-muted hover:text-primary-100 hover:bg-muted/10 cursor-pointer rounded-md border border-transparent p-1"
    >
      <Icon size={20} name={theme === "dark" ? "PiMoonDuotone" : "PiSunDimDuotone"} />
    </button>
  );
}
