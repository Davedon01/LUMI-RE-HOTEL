"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import React, { JSX } from "react";

export default function ThemeSwitch(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  console.log("Current theme:", theme);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="px-3 py-2 rounded-full
                 bg-gray-200 dark:bg-gray-700
                 text-sm font-medium transition"
    >
      {theme === "light" ? (
        <Moon size={18} />
      ) : (
        <Sun size={18} className="text-gray-200" />
      )}
    </button>
  );
}