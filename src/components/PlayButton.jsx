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
