import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

import classes from "./nav.module.css";

export const Nav = () => {
  const { isDark, toogleTheme } = useTheme();

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
        onClick={toogleTheme}
        // className={`${classes.button} dark-mode-button`}
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
