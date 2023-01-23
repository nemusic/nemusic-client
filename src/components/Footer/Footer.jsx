import React from 'react';

import Logo from '../../resources/footer_logo.svg';

import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.flex_container}>
        <div className={classes.logo}>
          <img src={Logo} alt="" />
        </div>

        <div className={`${classes.flex_item} ${classes.contacts}`}>
          <div className={classes.contacts_title}>
            Contacts
          </div>

          <ul className={classes.contacts_list}>
            <li>tel: 1239018</li>
            <li>skype: abobus228</li>
            <li>male: info@emale.com</li>
          </ul>
        </div>

        <div className={`${classes.flex_item} ${classes.info}`}>
          <div className={classes.info_title}>
            Info
          </div>

          <div className={classes.info_text}>This project was created with love
            and diligence to support black starving homeless gay
            cats in antarctica. Peace 🤞
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
