import React from 'react';

import editIcon from '../../resources/edit_icon.svg';

import classes from './PlaylistHeader.module.css';

function PlaylistHeader({ headerInfo }) {
  return (
    <div className={classes.flex_container}>
      <div className={classes.cover}>
        <img src={headerInfo.cover} alt="" className={classes.cover_image} />
      </div>
      <div>
        <div className={classes.title}>
          {headerInfo.title}
        </div>
        <div className={classes.description}>
          {headerInfo.description}
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
