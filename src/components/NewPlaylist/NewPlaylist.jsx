import React from 'react';

import { CardActionArea } from '@mui/material';

import plus from '../../resources/add.png';

import classes from './NewPlaylist.module.css';

export default function NewPlaylist() {
  return (
    <div className={classes.cardOutlineBorder}>
      <CardActionArea className={classes.hoverState}>
        <div className={classes.cardArea}>
          <div className={classes.plussign}>
            <img src={plus} alt="Avatar" />
          </div>
          <div className={classes.textContainer}>
            <h4><b>Добавить</b></h4>
            <p>Плейлист</p>
          </div>
        </div>
      </CardActionArea>
    </div>
  );
}
