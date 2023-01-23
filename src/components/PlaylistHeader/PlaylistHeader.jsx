import React, { useEffect, useState } from 'react';

import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';

import authHeader from '../../services/auth-header';

import classes from './PlaylistHeader.module.css';

const API_URL = 'http://localhost:8080/api/user/collections';

function PlaylistHeader({
  id, cover, title, description, liked
}) {
  const [likedIcon, setLikedIcon] = useState(liked);
  useEffect(() => {
    fetch('http://localhost:8080/api/playlist/'.concat(id), { headers: authHeader() })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLikedIcon(data.liked);
      });
  });

  const handleLike = () => {
    setLikedIcon(() => !likedIcon);
    fetch(API_URL.concat('?id=').concat(id).concat('&operation=').concat(likedIcon ? 'dislike' : 'like'), {
      method: 'POST',
      headers: authHeader()
    });
  };

  const icon = likedIcon ? <FavoriteFilledIcon /> : <FavoriteIcon />;

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
      <div className={classes.edit_button} onClick={handleLike}>
        {icon}
      </div>
    </div>
  );
}

export default PlaylistHeader;
