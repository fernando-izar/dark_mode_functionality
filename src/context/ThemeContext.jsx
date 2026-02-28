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

  // If user has chosen manually, use it
  if (stored !== null) return stored === "true";

  // Otherwise follow system
  if (window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return false;
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialIsDark);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;

      // Save manual choice
      localStorage.setItem("darkMode", String(next));

      return next;
    });
  };

  // Apply theme
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
  }, [isDark]);

  // Listen to system changes
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      const stored = localStorage.getItem("darkMode");

      // Only react if user hasn't manually chosen
      if (stored === null) {
        setIsDark(e.matches);
      }
    };

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
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
