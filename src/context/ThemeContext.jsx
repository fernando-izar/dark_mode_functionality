import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext(null);

function getInitialIsDark() {
  const stored = localStorage.getItem("darkMode");
  if (stored !== null) return stored === "true";
  if (window.matchMedia)
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  return false; // fallback: light
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDark));

    const theme = isDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
  }, [isDark]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.documentElement.classList.add("theme-ready");
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
