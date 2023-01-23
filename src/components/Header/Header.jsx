import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../resources/main_logo.svg';
import authHeader from '../../services/auth-header';

import classes from './Header.module.css';

const API_URL = 'http://localhost:8080/api/user';

function Header() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(API_URL, { headers: authHeader() })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <header className={`${classes.header} ${classes.flex_container}`}>
      <Link to="/">
        <div className={`${classes.logo} ${classes.flex_item}`}>
          <img src={Logo} alt="" className={classes.logo_icon} />
          <span className={classes.logo_text}>NeoMusic</span>
        </div>
      </Link>
      <ul className={`${classes.nav_list} ${classes.flex_item}`}>
        <li className={classes.nav_item}>
          <Link to="/collections">
            <span className={classes.nav_link}>
              collections
            </span>
          </Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/likes">
            <span className={classes.nav_link}>
              likes
            </span>
          </Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/logout">
            <span className={classes.nav_link}>
              logout
            </span>
          </Link>
        </li>
      </ul>
      <div className={`${classes.my_account} ${classes.flex_item}`}>
        <Link to="/profile">
          <span className={classes.acc_name}>{user.username}</span>
          <img src={user.avatar} alt="" className={classes.acc_photo} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
