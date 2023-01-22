import React from 'react';

import PlayButton from '../PlayButton/PlayButton';

import classes from './PlaylistCard.module.css';

export default function CardWoMui({
  id, title, description, cover
}) {
  return (
    <a href="/playlist">
      <div className={classes.cardOutline} id={id}>
        <div className={classes.card}>
          <div className={classes.imageContainer} style={{ backgroundImage: `url(${cover})`, backgroundSize: '285px 285px' }}>
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
    </a>
  );
}
