import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import '../styles/UltraPlayer.scss';

import { ReactComponent as PlayIcon } from '../resources/play.svg';
import { ReactComponent as PauseIcon } from '../resources/pause.svg';
import { ReactComponent as PrevIcon } from '../resources/prev.svg';
import { ReactComponent as NextIcon } from '../resources/next.svg';
import { ReactComponent as PlayListIcon } from '../resources/playlist.svg';

function UltraPlayer() {
  return (
    <AudioPlayer
      src="music/da.mp3"
      layout="stacked-reverse"
      customAdditionalControls={[]}
      showSkipControls={!false}
      showJumpControls={false}
      customIcons={{
        play: <PlayIcon />,
        pause: <PauseIcon />,
        previous: <PrevIcon />,
        next: <NextIcon />
      }}
      header={(
        <div>
          <div id="player-cover">
            <img src="https://upload.wikimedia.org/wikipedia/ru/6/6d/Vessel1.jpg" alt="track-cover" />
          </div>
          <div id="player-track-info">
            <p id="player-track-name">Track</p>
            <p id="player-track-author">Author</p>
          </div>
        </div>
      )}
      footer={(
        <div>
          <button id="player-show-playlist" type="button">
            <PlayListIcon />
          </button>
        </div>
      )}
    />
  );
}

export default UltraPlayer;
