import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';

import classes from '../styles/Track.module.css';

function Track({
  title, author, authorUrl, albumTitle, albumCoverUrl, albumUrl, duration, isFavorite
}) {
  const [favoriteState, setFavoriteState] = useState(isFavorite);
  const favoriteIcon = favoriteState ? <FavoriteFilledIcon /> : <FavoriteIcon />;
  return (
    <div className={classes.track}>
      <img src={albumCoverUrl} alt="" />
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
