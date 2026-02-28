import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

import classes from "./nav.module.css";

export const Nav = () => {
  const { isDark, toggleTheme } = useTheme();
  console.log("isDark", isDark);

  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className={classes.button}
        aria-label="Toggle dark mode"
      >
        <FontAwesomeIcon
          color={isDark ? "#ffbf2f" : "#34374c"}
          icon={isDark ? faMoon : faSun}
          size="lg"
        />
      </button>
    </nav>
  );
};
