import React, { useState } from 'react';
import PlayingIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';

import classes from '../styles/Track.module.css';

function Track({
  title, author, authorUrl, albumTitle, albumCoverUrl, albumUrl, duration, isFavorite
}) {
  const [favoriteState, setFavoriteState] = useState(isFavorite);
  const favoriteIcon = favoriteState ? <FavoriteFilledIcon /> : <FavoriteIcon />;

  const [playing, setPlaying] = useState(false);
  const playIcon = playing ? <PauseIcon /> : <PlayingIcon />;

  return (
    <div className={classes.track}>
      <img src={albumCoverUrl} alt="" />
      <div className={classes.play_button} onClick={() => setPlaying((prev) => !prev)}>
        {playIcon}
      </div>

      <div className={classes.meta_data}>
        <div className={classes.track_title}>
          {title}
        </div>
        <div className={classes.author}>
          <a href={authorUrl}>{author}</a>
        </div>
      </div>

      <div className={classes.album_title}>
        <a href={albumUrl}>{albumTitle}</a>
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
