import React from 'react';

import editIcon from '../../resources/edit_icon.svg';

import classes from './PlaylistHeader.module.css';

function PlaylistHeader({ cover, title, description }) {
  return (
    <div className={classes.flex_container}>
      <div className={classes.cover}>
        <img src={cover} alt="" className={classes.cover_image} />
      </div>
      <div>
        <div className={classes.title}>
          {title}
        </div>
        <div className={classes.description}>
          {description}
        </div>
      </div>
      <div className={classes.edit_button}>
        <a href="/edit">
          <img src={editIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default PlaylistHeader;
