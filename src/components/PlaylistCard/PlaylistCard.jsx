import React from 'react';
import { Link } from 'react-router-dom';

import PlayButton from '../PlayButton/PlayButton';

import classes from './PlaylistCard.module.css';

export default function CardWoMui({
  id, title, description, cover, onClickPlay
}) {
  return (
    <Link to="/playlist" state={{ playlistId: id }}>
      <div className={classes.cardOutline} id={id}>
        <div className={classes.card}>
          <div className={classes.imageContainer} style={{ backgroundImage: `url(${cover})` }}>
            <div className={classes.blackBox}>
              <div className={classes.playButton}>
                <PlayButton playlistId={id} onClickPlay={onClickPlay} />
              </div>
            </div>
          </div>
          <div className={classes.container}>
            <h4><b>{title}</b></h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
