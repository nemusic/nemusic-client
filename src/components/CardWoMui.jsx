import React from 'react';

import classes from '../styles/CardWoMui.module.css';

import PlayButton from './PlayButton';

export default function CardWoMui({ title, description, cover }) {
  return (
    <div className={classes.cardOutline}>
      <div className={classes.card}>
        <div className={classes.imageContainer} style={{ backgroundImage: `url(${cover})` }}>
          <div className={classes.blackBox}>
            <div className={classes.playButton}>
              <PlayButton />
            </div>
          </div>
        </div>
        <div className={classes.container}>
          <h4><b>{title}</b></h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
