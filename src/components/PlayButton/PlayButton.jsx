import React from 'react';
import { useSelector } from 'react-redux';

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import classes from './PlayButton.module.css';

export default function PlayButton({ playlistId, onClickPlay }) {
  const currentPlaylistId = useSelector((state) => state.player.playlist.id);
  const playing = useSelector((state) => state.player.isPlaying);
  const playIcon = playing && currentPlaylistId === playlistId ? <PauseRoundedIcon title="paused" /> : <PlayArrowRoundedIcon title="playing" />;

  const onClick = (e) => {
    onClickPlay(playlistId);
    e.preventDefault();
  };

  return (
    <div className={classes.play_button} onClick={onClick} title="button">
      {playIcon}
    </div>
  );
}
