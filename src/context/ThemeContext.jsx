import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("darkMode");

    // If a value is already stored, use it
    if (stored !== null) {
      return stored === "true";
    }
    // If nothing is stored, try to detect system preference
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    // Final fallback → default to light mode
    return false;
  });

  // Persist theme choice whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const value = useMemo(() => ({ isDark, setIsDark, toggleTheme }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};
