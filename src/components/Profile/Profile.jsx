import React from 'react';
import { Link } from 'react-router-dom';

import editIcon from '../../resources/edit_icon.svg';

import classes from './Profile.module.css';

function Profile({ avatar, name, description }) {
  return (
    <div className={classes.flex_container}>
      <div className={classes.profile}>
        <div className={classes.images}>
          <div>
            <img src={avatar} alt="" className={classes.avatar} />
          </div>
          <div>
            <Link to="/edit_acc">
              <img src={editIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className={classes.account_name}>
          {name}
        </div>
        <div className={classes.account_description}>
          {description}
        </div>
      </div>
    </div>
  );
}

export default Profile;
