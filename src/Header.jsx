import React from 'react';

import classes from './Header.module.css';

function Header({ name, userAvatar }) {
  return (
    <header className={classes.header} id="header">

      <div className={classes.header__logo}>
        <img src="https://i.ibb.co/W2VWSnK/logo.png" alt="" className={classes.logo_icon} />
        <span className={classes.logo_text}>NeoMusic</span>
      </div>

      <div className={classes.nav__container}>
        <div className="nav_menu">
          <ul className="nav__list grid">
            <li className={classes.nav__item}>
              <a href="/collections" className={classes.nav__link}>
                collections
              </a>
            </li>
            <li className={classes.nav__item}>
              <a href="/likes" className={classes.nav__link}>
                likes
              </a>
            </li>
            <li className={classes.nav__item}>
              <a href="/authors" className={classes.nav__link}>
                authors
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.my_accaunt}>
        <span className={classes.account__name}>
          {name}
        </span>
        <a href="/profile" className="my-account__link">
          <img src={userAvatar} alt="" className={classes.account__img} />
        </a>
      </div>

    </header>
  );
}

export default Header;
