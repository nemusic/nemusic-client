/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

import classes from '../styles/PlayButton.module.css';

export default function PlayButton() {
  const [playing, setPlaying] = useState(true);
  const playIcon = playing ? <PlayArrowRoundedIcon /> : <PauseRoundedIcon />;

  return (
    <div className={classes.play_button} onClick={() => setPlaying((prev) => !prev)}>
      {playIcon}
    </div>
  );
}
