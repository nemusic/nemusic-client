import React from 'react';

import editIcon from '../../resources/edit_icon.svg';
import authHeader from '../../services/auth-header';

import classes from './Profile.module.css';

const API_URL = 'http://localhost:8080/api/user/avatar';

function Profile({ avatar, name, description }) {
  const loadFile = (event) => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    fetch(API_URL, {
      method: 'POST',
      headers: authHeader(),
      body: formData
    });
    const avatarElement = document.getElementById('avatar');
    avatarElement.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <div className={classes.flex_container}>
      <div className={classes.profile}>
        <div className={classes.images}>
          <div>
            <img src={avatar} alt="" className={classes.avatar} id="avatar" />
          </div>
          <div className={classes.edit}>
            <label htmlFor="file">
              <img src={editIcon} alt="" />
            </label>
            <input id="file" type="file" onChange={loadFile} />
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
