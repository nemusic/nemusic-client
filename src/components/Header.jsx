import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import classes from '../styles/Header.module.css';
import Logo from '../resources/main_logo.svg';
import noUserIcon from '../resources/no_user.png';

import authHeader from '../services/auth-header';

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
      <div className={`${classes.logo} ${classes.flex_item}`}>
        <img src={Logo} alt="" className={classes.logo_icon} />
        <span className={classes.logo_text}>NeoMusic</span>
      </div>
      <ul className={`${classes.nav_list} ${classes.flex_item}`}>
        <li className={classes.nav_item}>
          <a href="/collections" className={classes.nav_link}>
            collections
          </a>
        </li>
        <li className={classes.nav_item}>
          <a href="/likes" className={classes.nav_link}>
            likes
          </a>
        </li>
        <li className={classes.nav_item}>
          <a href="/authors" className={classes.nav_link}>
            authors
          </a>
        </li>
      </ul>
      <div className={`${classes.my_account} ${classes.flex_item}`}>
        <Link to="/profile">
          <span className={classes.acc_name}>{user.username ? user.username : ''}</span>
          <img src={user.avatar ? user.avatar : noUserIcon} alt="" className={classes.acc_photo} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
