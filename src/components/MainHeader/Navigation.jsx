import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <button onClick={authCtx.doLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
