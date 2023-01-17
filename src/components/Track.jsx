import React, { useState } from 'react';
import PlayingIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';

import classes from '../styles/Track.module.css';

function Track({
  // eslint-disable-next-line
  id, title, authorName, authorUrl, album, cover, media, duration, isFavorite
}) {
  const [favoriteState, setFavoriteState] = useState(isFavorite);
  const favoriteIcon = favoriteState ? <FavoriteFilledIcon /> : <FavoriteIcon />;

  const [playing, setPlaying] = useState(false);
  const playIcon = playing ? <PauseIcon /> : <PlayingIcon />;

  return (
    <div className={classes.track} id={id}>
      <img src={cover} alt="" />
      <div className={classes.play_button} onClick={() => setPlaying((prev) => !prev)}>
        {playIcon}
      </div>

      <div className={classes.meta_data}>
        <div className={classes.track_title}>
          {title}
        </div>
        <div className={classes.author}>
          <a href={authorUrl}>{authorName}</a>
        </div>
      </div>

      <div className={classes.album_title}>
        {album}
      </div>

      <div className={classes.favorite_icon} onClick={() => setFavoriteState((prev) => !prev)}>
        {favoriteIcon}
      </div>

      <div className={classes.duration}>
        {duration}
      </div>
    </div>
  );
}

export default Track;
