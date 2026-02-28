import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

import classes from './nav.module.css'

export const Nav = () => {
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
      <button className={`${classes.button} dark-mode-button`}>
        <FontAwesomeIcon color="#34374c" icon={faSun} size="lg" />
      </button>
    </nav>
  )
}
