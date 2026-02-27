import { createContext, useState, useEffect, type ReactNode } from "react";

export type Theme = "light" | "dark" | "auto";
export type FontSize = "small" | "medium" | "large";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;

  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},

  fontSize: "medium",
  setFontSize: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Theme State
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "light";
  });

  // Font Size State
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem("fontSize") as FontSize) || "medium";
  });

  // Theme Effect
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else if (theme === "light") root.classList.remove("dark");
    else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      systemDark ? root.classList.add("dark") : root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Font Size Effect
  useEffect(() => {
    const root = document.documentElement;

    const sizeMap: Record<FontSize, string> = {
      small: "14px",
      medium: "16px",
      large: "18px",
    };

    root.style.setProperty("--base-font-size", sizeMap[fontSize]);
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
