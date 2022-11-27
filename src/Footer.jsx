import React from 'react';

import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className={classes.logo}>
        <img src="https://i.ibb.co/zf5zdz0/footer-logo.png" alt="footer logo" className={classes.logo_icon} />
      </div>

      <div className={classes.contacts}>
        <h3 className={classes.contacts__title}>Contacts</h3>
        <div className="contacts__content">
          <ul className="contacts__list">
            <li className={classes.contact__item}>
              tel: 1239018
            </li>
            <li className={classes.contact__item}>
              skype: abobus228
            </li>
            <li className={classes.contact__item}>
              male: info@emale.com
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.info}>
        <h3 className={classes.info__title}>Info</h3>

        <div className="footer__info__content">
          <p className={classes.info__text}>
            This project was created with love and diligence
            to support black starving homeless gay cats in
            antarctica. Peace 🤞
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
