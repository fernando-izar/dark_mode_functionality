import React from "react";
import { Route, Switch } from "react-router-dom";

import classes from "./app.module.css";
import { About } from "./about";
import { Home } from "./home";
import { Nav } from "./nav";
import { useTheme } from "./context/ThemeContext";

export const App = () => {
  return (
    <div className={classes.app}>
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
