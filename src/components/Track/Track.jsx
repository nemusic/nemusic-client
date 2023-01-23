import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PlayingIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';

import authHeader from '../../services/auth-header';

import classes from './Track.module.css';

const API_URL = 'http://localhost:8080/api/';

function Track({
  // eslint-disable-next-line
  id, title, authorName, authorUrl, album, cover, media, duration, isFavorite, onClickPlay
}) {
  const [favoriteState, setFavoriteState] = useState(isFavorite);
  const favoriteIcon = favoriteState ? <FavoriteFilledIcon title="inFavorite" /> : <FavoriteIcon title="notInFavorite" />;

  const playing = useSelector((state) => state.player.isPlaying);
  const playingTrack = useSelector((state) => state.player.current);
  const playIcon = playing && playingTrack.id === id ? <PauseIcon title="playing" /> : <PlayingIcon title="paused" />;

  useEffect(() => {
    fetch(API_URL.concat(`user/likes?id=${id}&operation=${favoriteState ? 'like' : 'dislike'}`), { headers: authHeader(), method: 'POST' });
  }, [id, favoriteState]);

  return (
    <div className={classes.track} id={id}>
      <img src={cover} alt="" />
      <div className={classes.play_button} onClick={onClickPlay.bind(this, id)} title="playButton">
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

      <div className={classes.favorite_icon} onClick={() => setFavoriteState((prev) => !prev)} title="addToFavorite">
        {favoriteIcon}
      </div>

      <div className={classes.duration}>
        {duration}
      </div>
    </div>
  );
}

export default Track;
